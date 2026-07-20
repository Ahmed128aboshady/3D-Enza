// ============ Enza Trade — home / about / shipping / faq ============
const { useState: uSt, useEffect: uEf } = React;

// resolve a button "href": internal route name (home/shop/about/shipping/faq)
// or an external URL. Returns props for a <button>/<a>.
const useCta = () => {
  const { navigate } = useStore();
  return (href, fallback) => {
    const h = (href || '').trim();
    const target = h || fallback || 'home';
    const isUrl = /^(https?:|wa\.me|mailto:|tel:|\/\/)/i.test(target);
    if (isUrl) {
      const url = /^https?:|^mailto:|^tel:/i.test(target) ? target : 'https://' + target.replace(/^\/\//, '');
      return { as: 'a', href: url, target: '_blank', rel: 'noopener' };
    }
    return { as: 'button', onClick: () => navigate(target.replace(/^#?\/?/, '') || 'home') };
  };
};

// render helper: <Cta> picks <a> or <button> based on resolved props
const Cta = ({ go, href, fallback, className, children, style }) => {
  const p = go(href, fallback);
  if (p.as === 'a') return <a className={className} href={p.href} target={p.target} rel={p.rel} style={style}>{children}</a>;
  return <button className={className} onClick={p.onClick} style={style}>{children}</button>;
};

// renders a custom image icon if provided, else the built-in SVG glyph
const ValIcon = ({ item }) => (
  item && item.iconImg
    ? <img src={item.iconImg} alt="" />
    : <Icon n={item ? item.icon : 'sparkle'} />
);

/* ---------- Custom Request Form Component ---------- */
const CustomRequestForm = () => {
  const { t, toast } = useStore();
  const [f, setF] = React.useState({ name: '', phone: '', material: '', qty: '', notes: '' });
  const [submitting, setSubmitting] = React.useState(false);
  const set = (k) => (e) => setF(s => ({ ...s, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!f.name || !f.phone || !f.material) {
      toast(t({ en: 'Please fill required fields', ar: 'من فضلك املأ الحقول المطلوبة' }));
      return;
    }
    setSubmitting(true);
    const waMsg = t({
      en: `Hi Enza Trade! I'd like to request a custom material:\n• Material: ${f.material}\n• Qty: ${f.qty || 1}\n• Name: ${f.name}\n• Phone: ${f.phone}\n• Notes: ${f.notes}`,
      ar: `أهلاً إنزا تريد! حابب أطلب خامة غير متوفرة:\n• الخامة المطلوبة: ${f.material}\n• الكمية: ${f.qty || 1}\n• الاسم: ${f.name}\n• الهاتف: ${f.phone}\n• ملاحظات: ${f.notes}`
    });
    window.open(`https://wa.me/201208640240?text=${encodeURIComponent(waMsg)}`, '_blank');
    setF({ name: '', phone: '', material: '', qty: '', notes: '' });
    setSubmitting(false);
    toast(t({ en: 'Request sent to WhatsApp!', ar: 'تم إرسال طلبك لواتساب!' }));
  };

  return (
    <div className="custom-request-box">
      <div className="stack gap-s">
        <span className="eyebrow">{t({ en: 'Special Requests', ar: 'طلبات خاصة' })}</span>
        <h2>{t({ en: 'Request a Custom Material', ar: 'طلب خامة غير متوفرة أو طلب خاص' })}</h2>
        <p className="muted">{t({
          en: 'Looking for a specific material or color we don\'t have? Fill this form and we will import it for you.',
          ar: 'بتدور على خامة أو لون مش موجودين في الموقع؟ اكتب تفاصيل طلبك هنا وهنوفرها لك في أسرع وقت.'
        })}</p>
      </div>
      <form onSubmit={handleSubmit} className="custom-request-form">
        <div className="field">
          <label>{t({ en: 'Full Name', ar: 'الاسم بالكامل' })} <span className="req">*</span></label>
          <input className="input" value={f.name} onChange={set('name')} placeholder={t({ en: 'Your Name', ar: 'اسمك بالكامل' })} required />
        </div>
        <div className="field">
          <label>{t({ en: 'Phone Number', ar: 'رقم الهاتف' })} <span className="req">*</span></label>
          <input className="input" value={f.phone} onChange={set('phone')} placeholder={t({ en: 'Your Phone', ar: 'رقم الموبايل' })} required />
        </div>
        <div className="field">
          <label>{t({ en: 'Material Name / Color', ar: 'الخامة المطلوبة / اللون' })} <span className="req">*</span></label>
          <input className="input" value={f.material} onChange={set('material')} placeholder={t({ en: 'e.g. PLA Red, TPU...', ar: 'مثال: فيلامينت بولي كربونات، لون خاص…' })} required />
        </div>
        <div className="field">
          <label>{t({ en: 'Quantity (Spools/KG)', ar: 'الكمية المطلوبة' })}</label>
          <input className="input" type="number" value={f.qty} onChange={set('qty')} placeholder="1" />
        </div>
        <div className="field full" style={{ marginBottom: 12 }}>
          <label>{t({ en: 'Additional Notes', ar: 'ملاحظات إضافية' })}</label>
          <textarea className="input" value={f.notes} onChange={set('notes')} rows="2" placeholder={t({ en: 'Specific brand, size, specifications…', ar: 'براند معين، قطر السلك، مواصفات خاصة…' })} />
        </div>
        <button className="btn btn-primary btn-lg" type="submit" style={{ marginTop: 10 }}>
          <Icon n="chat" style={{ width: 18 }} />
          {t({ en: 'Submit Request on WhatsApp', ar: 'إرسال الطلب لواتساب' })}
        </button>
      </form>
    </div>
  );
};

/* ---------- Home ---------- */
const HomePage = () => {
  const { t, dir, navigate, lang, products, content } = useStore();
  const bestsellers = React.useMemo(() => {
    const featured = products.filter(p => p.featured);
    const selection = [...featured];
    
    // Ensure we have at least one Bambu Lab, one Resin, and one PETG in the homepage list if available
    const bambuProd = products.find(p => p.cat === 'bambu' && !selection.includes(p));
    if (bambuProd) selection.push(bambuProd);
    
    const resinProd = products.find(p => p.cat === 'resin' && !selection.includes(p));
    if (resinProd) selection.push(resinProd);
    
    const petgProd = products.find(p => p.cat === 'petg' && !selection.includes(p));
    if (petgProd) selection.push(petgProd);
    
    const finalSet = [];
    selection.forEach(p => {
      if (p && !finalSet.includes(p)) finalSet.push(p);
    });
    
    for (let p of products) {
      if (finalSet.length >= 8) break;
      if (!finalSet.includes(p)) finalSet.push(p);
    }
    
    return finalSet.slice(0, 8);
  }, [products]);

  const go = useCta();
  const hc = content.hero || {};
  const heroImg = hc.image || 'logo.png';
  const vals = content.values || [];
  const eh = content.editHead || {};
  const gift = content.gift || {};
  const quote = content.quote || {};

  const BrandRibbon = (
    <div className="brands-ribbon">
      <span className="importer-badge">
        <Icon n="shield" style={{ width: 16 }} />
        {t({ en: 'Direct & Certified Importer', ar: 'مستورد مباشر ومعتمد بمصر' })}
      </span>
      <div className="brand-item">
        <Icon n="box" style={{ width: 20, color: 'var(--accent)' }} />
        <span>Bambu Lab (بامبو لاب)</span>
      </div>
      <div className="brand-item">
        <Icon n="leaf" style={{ width: 20, color: 'var(--accent)' }} />
        <span>eSUN Filaments (إي صن)</span>
      </div>
      <div className="brand-item">
        <Icon n="gauge" style={{ width: 20, color: 'var(--accent)' }} />
        <span>3D Resins (ريزن 3D)</span>
      </div>
    </div>
  );

  const HomeCategories = (
    <div className="home-categories-grid">
      <button className="home-cat-card" onClick={() => navigate('shop', { cat: 'pla-plus' })}>
        <div className="icon-box"><Icon n="box" /></div>
        <span>{t({ en: 'PLA+ Filaments', ar: 'خيوط PLA+' })}</span>
      </button>
      <button className="home-cat-card" onClick={() => navigate('shop', { cat: 'bambu' })}>
        <div className="icon-box"><Icon n="sparkle" /></div>
        <span>{t({ en: 'Bambu Lab Filaments', ar: 'خامات بامبو لاب' })}</span>
      </button>
      <button className="home-cat-card" onClick={() => navigate('shop', { cat: 'resin' })}>
        <div className="icon-box"><Icon n="gauge" /></div>
        <span>{t({ en: '3D Resins', ar: 'ريزن 3D ثلاثي الأبعاد' })}</span>
      </button>
      <button className="home-cat-card" onClick={() => navigate('shop', { cat: 'pla-cf' })}>
        <div className="icon-box"><Icon n="leaf" /></div>
        <span>{t({ en: 'Carbon Fiber / CF', ar: 'ألياف الكربون CF' })}</span>
      </button>
      <button className="home-cat-card" onClick={() => navigate('shop', { cat: 'asa' })}>
        <div className="icon-box"><Icon n="shield" /></div>
        <span>{t({ en: 'ASA Weatherproof', ar: 'خيوط ASA المقاومة' })}</span>
      </button>
    </div>
  );

  const BundleOffer = (
    <div className="bundle-banner">
      <div className="bundle-banner-pattern" />
      <div className="bundle-content">
        <div className="bundle-text">
          <span className="eyebrow" style={{ color: 'var(--accent)' }}>{t({ en: 'Special Wholesale Deal', ar: 'عرض خاص للطلبات الكبيرة' })}</span>
          <h2>{t({ en: 'Buy 10+ Spools, Save 50 LE/Spool!', ar: 'اشترِ 10 بكرات أو أكثر ووفر 50 ج.م على كل بكرة!' })}</h2>
          <p>{t({
            en: 'Add any 10 or more filament spools (PLA+, ABS+, ASA, Carbon Fiber) to your cart, and the discount will be applied automatically at checkout. Pay cash on delivery.',
            ar: 'أضف أي 10 بكرات فيلامينت أو أكثر إلى سلتك (PLA+، ABS+، ASA، أو كربون فايبر)، وسيتم تطبيق الخصم تلقائياً عند الدفع. الدفع كاش عند الاستلام.'
          })}</p>
          <button className="btn btn-primary" onClick={() => navigate('shop')}>{t({ en: 'Shop Filaments Now', ar: 'تسوق الفيلامينت الآن' })}</button>
        </div>
        <div className="bundle-price-tag">
          <span>{t({ en: 'Bulk Filament Price', ar: 'سعر البكرة في العرض يبدأ من' })}</span>
          <strong className="big">650 ج.م</strong>
          <span>{t({ en: 'Instead of 700 LE', ar: 'بدلاً من 700 ج.م' })}</span>
        </div>
      </div>
    </div>
  );

  const Hero = dir === 'b' ? (
    <section className="hero hero-b">
      <div className="ftr-pattern" />
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow">{t(hc.eyebrow)}</span>
          <h1 className="h-hero">{t(hc.title)}</h1>
          <p className="lede">{t(hc.lede)}</p>
          <div className="hero-actions">
            <Cta go={go} href={hc.primaryHref} fallback="shop" className="btn btn-primary btn-lg">{t(hc.primaryLabel)} <Icon n="arrow" style={{ width: 18 }} /></Cta>
            <Cta go={go} href={hc.secondaryHref} fallback="about" className="btn btn-outline btn-lg">{t(hc.secondaryLabel)}</Cta>
          </div>
        </div>
        <div className="hero-b-art"><img src={heroImg} alt="Enza Trade 3D Printing" /></div>
      </div>
    </section>
  ) : (
    <section className="hero hero-a">
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow">{t(hc.eyebrow)}</span>
          <h1 className="h-hero">{t(hc.title)}</h1>
          <p className="lede">{t(hc.lede)}</p>
          <div className="hero-actions">
            <Cta go={go} href={hc.primaryHref} fallback="shop" className="btn btn-primary btn-lg">{t(hc.primaryLabel)} <Icon n="arrow" style={{ width: 18 }} /></Cta>
            <Cta go={go} href={hc.secondaryHref} fallback="about" className="btn btn-ghost">{t(hc.secondaryLabel)}</Cta>
          </div>
        </div>
        <div className="hero-art">
          <div className="kang" />
          <div className="prod" style={{ backgroundImage: `url(${heroImg})` }} />
        </div>
      </div>
    </section>
  );

  return (
    <>
      {Hero}
      <Marquee />

      {/* Brands ribbon & Quick categories */}
      <section className="wrap section-sm" style={{ paddingBottom: 0 }}>
        {BrandRibbon}
        {HomeCategories}
      </section>

      {/* Importer Section */}
      <section className="wrap section-sm importer-section">
        <div className="importer-layout">
          <div className="importer-content">
            <span className="eyebrow">{t({ en: 'Direct Importer', ar: 'مستورد مباشر ومعتمد بمصر' })}</span>
            <h2 className="h2">{t({ en: 'Enza Trade — Direct Importers', ar: 'إنزا تريد — مستورد معتمد ومباشر لخامات 3D بمصر' })}</h2>
            <p className="lede">{t({
              en: 'We are official, direct importers of premier 3D printing filaments and resins. We bring you authentic products directly from Bambu Lab, eSUN, and leading 3D resin brands to ensure unmatched reliability and precision.',
              ar: 'إنزا تريد هي المورد والمستورد المباشر والمعتمد بمصر لأجود خامات الطباعة ثلاثية الأبعاد. نوفر لك خامات Bambu Lab الأصلية، وفيلامينت eSUN، ومجموعة متنوعة من ريزن 3D عالي الدقة، مباشرة من المصانع الرسمية لضمان تلبية احتياجاتك بأفضل الأسعار.'
            })}</p>
            <div className="importer-badges">
              <span className="ibadge"><Icon n="shield" style={{ width: 18 }} /> {t({ en: '100% Original Guarantee', ar: 'ضمان خامات أصلية 100%' })}</span>
              <span className="ibadge"><Icon n="cash" style={{ width: 18 }} /> {t({ en: 'Cash on Delivery', ar: 'الدفع عند الاستلام كاش للمندوب' })}</span>
            </div>
          </div>
          <div className="importer-img-box">
            <img src="enza_trade_collage.jpg" alt="Enza Trade - خيوط PLA+ الأكثر مبيعاً" />
          </div>
        </div>
      </section>

      {/* Bestsellers section */}
      <section className="wrap section" style={{ paddingTop: 30 }}>
        <div className="sec-head">
          <div className="stack">
            <span className="eyebrow">{t({ en: 'Top Choices', ar: 'الخامات الأكثر طلباً' })}</span>
            <h2 className="h2">{t({ en: 'Bestselling 3D Materials', ar: 'المنتجات الأكثر مبيعاً وطلباً' })}</h2>
          </div>
          <button className="btn btn-ghost" onClick={() => navigate('shop')}>{t(eh.viewAll)}</button>
        </div>
        <div className="grid-products home-grid">{bestsellers.map(p => <ProductCard key={p.id} p={p} />)}</div>
      </section>

      {/* Resin section */}
      <section className="section" style={{ background: dir === 'b' ? 'var(--paper)' : 'transparent', paddingTop: 60, paddingBottom: 60 }}>
        <div className="wrap split">
          <div className="split-img" style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
            <img src="resin_collage.jpg" alt="eSUN Resin - Engineered For Every Print" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          <div className="stack gap-l">
            <span className="eyebrow">{t(gift.eyebrow)}</span>
            <h2 className="h1" style={{ fontSize: 'clamp(30px,4.4vw,58px)' }}>{t(gift.title)}</h2>
            <p className="lede">{t(gift.lede)}</p>
            <div className="hero-actions"><Cta go={go} href={gift.buttonHref} fallback="shop" className="btn btn-primary btn-lg">{t(gift.button)}</Cta></div>
          </div>
        </div>
      </section>

      {/* About Enza section */}
      <section className="wrap section" style={{ paddingTop: 30, paddingBottom: 30 }}>
        <div className="values">
          {vals.map((v, i) => (
            <div className="value" key={i}>
              <div className="value-ic"><ValIcon item={v} /></div>
              <h3>{t(v.h)}</h3>
              <p className="muted">{t(v.p)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Spool Bundle Deal section */}
      <section className="wrap section-sm" style={{ paddingTop: 0 }}>
        {BundleOffer}
      </section>

      {/* Custom Request Form section */}
      <section className="wrap section" id="custom-request-section">
        <CustomRequestForm />
      </section>

      {/* Quote band */}
      <section className="band">
        <div className="ftr-pattern" />
        <div className="band-inner">
          <img className="band-emblem" src="logo_light.png?v=3" alt="" />
          <p className="h2 display">{t(quote.text)}</p>
          <Cta go={go} href={quote.buttonHref} fallback="about" className="btn btn-outline btn-lg" style={{ marginTop: 30, boxShadow: 'inset 0 0 0 1.4px var(--ivory)', color: 'var(--ivory)' }}>{t(quote.button)}</Cta>
        </div>
      </section>

      <ContactBand />
    </>
  );
};

/* ---------- shared contact band ---------- */
const ContactBand = () => {
  const { t, content } = useStore();
  const c = content.contact || {};
  return (
    <section className="wrap section-sm">
      <div className="contact-band">
        <div className="stack gap-s">
          <span className="eyebrow" style={{ color: 'var(--taupe)' }}>{t(c.eyebrow)}</span>
          <h2 className="h2" style={{ color: 'var(--ivory)' }}>{t(c.title)}</h2>
          <p style={{ color: 'rgba(246,241,231,.78)', maxWidth: '42ch' }}>{t(c.lede)}</p>
        </div>
        <a className="btn btn-wa btn-lg" href={waLink()} target="_blank" rel="noopener"><Icon n="chat" style={{ width: 19 }} />{t(c.button)}</a>
      </div>
    </section>
  );
};

/* ---------- About ---------- */
const AboutPage = () => {
  const { t, navigate, content } = useStore();
  uEf(() => window.scrollTo(0, 0), []);
  const a = content.about || {};
  const vals = a.values || [];
  return (
    <>
      <div className="page-hero">
        <div className="ftr-pattern" style={{ opacity: 0.06 }} />
        <div className="wrap">
          <span className="eyebrow">{t(a.heroEyebrow)}</span>
          <h1 className="h1">{t(a.heroTitle)}</h1>
          <p className="lede">{t(a.heroLede)}</p>
        </div>
      </div>
      <section className="wrap section">
        <div className="split">
          <div className="split-img" style={{ background: 'radial-gradient(120% 90% at 50% 15%,#fff,var(--sand))', display: 'grid', placeItems: 'center' }}>
            <img src={a.image} alt="Enza Trade" style={{ width: '74%', height: 'auto', borderRadius: '50%' }} />
          </div>
          <div className="stack gap-l">
            <h2 className="h2">{t(a.splitTitle)}</h2>
            <p className="lede" style={{ fontSize: 17 }}>{t(a.splitP1)}</p>
            <p className="muted">{t(a.splitP2)}</p>
            <button className="btn btn-primary" onClick={() => navigate('shop')}>{t(a.splitButton)}</button>
          </div>
        </div>
      </section>
      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="values">
          {vals.map((v, i) => (
            <div className="value" key={i}>
              <div className="value-ic"><ValIcon item={v} /></div>
              <h3>{t(v.h)}</h3>
              <p className="muted">{t(v.p)}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="band">
        <div className="ftr-pattern" />
        <div className="band-inner">
          <img className="band-emblem" src="logo_light.png?v=3" alt="" />
          <p className="h2 display">{t(a.quote)}</p>
        </div>
      </section>
      <ContactBand />
    </>
  );
};

/* ---------- Shipping ---------- */
const ShippingPage = () => {
  const { t, content } = useStore();
  uEf(() => window.scrollTo(0, 0), []);
  const s = content.shipping || {};
  const bullets = s.bullets || [];
  const trust = s.trust || [];
  return (
    <>
      <div className="page-hero">
        <div className="ftr-pattern" style={{ opacity: 0.06 }} />
        <div className="wrap">
          <span className="eyebrow">{t(s.heroEyebrow)}</span>
          <h1 className="h1">{t(s.heroTitle)}</h1>
          <p className="lede">{t(s.heroLede)}</p>
        </div>
      </div>
      <section className="wrap section">
        <div className="ship-grid">
          {bullets.map((b, i) => (
            <div className="ship-card" key={i}>
              <span className="ship-num">{String(i + 1).padStart(2, '0')}</span>
              <p>{t(b)}</p>
            </div>
          ))}
        </div>
        <div className="row gap-l" style={{ justifyContent: 'center', marginTop: 44, flexWrap: 'wrap' }}>
          {trust.map((tr, i) => (
            <span className="trust" key={i}>{tr.iconImg ? <img src={tr.iconImg} alt="" /> : <Icon n={tr.icon} />}{t(tr.text)}</span>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
};

/* ---------- FAQ ---------- */
const FAQPage = () => {
  const { t, content } = useStore();
  const [open, setOpen] = uSt(0);
  uEf(() => window.scrollTo(0, 0), []);
  const f = content.faq || {};
  const items = f.items || [];
  return (
    <>
      <div className="page-hero">
        <div className="ftr-pattern" style={{ opacity: 0.06 }} />
        <div className="wrap">
          <span className="eyebrow">{t(f.heroEyebrow)}</span>
          <h1 className="h1">{t(f.heroTitle)}</h1>
          <p className="lede">{t(f.heroLede)}</p>
        </div>
      </div>
      <section className="wrap section">
        <div className="faq-wrap">
          {items.map((item, i) => (
            <div className={'acc ' + (open === i ? 'open' : '')} key={i}>
              <button className="acc-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{t(item.q)}</span><span className="acc-ic" />
              </button>
              <div className="acc-a"><p>{t(item.a)}</p></div>
            </div>
          ))}
        </div>
        <div className="center" style={{ marginTop: 48 }}>
          <p className="muted" style={{ marginBottom: 16 }}>{t(f.stillTitle)}</p>
          <a className="btn btn-wa btn-lg" href={waLink()} target="_blank" rel="noopener"><Icon n="chat" style={{ width: 19 }} />{t(content.contact ? content.contact.button : { en: 'Chat with us', ar: 'كلّمنا' })}</a>
        </div>
      </section>
      <ContactBand />
    </>
  );
};

Object.assign(window, { HomePage, AboutPage, ShippingPage, FAQPage, ContactBand, useCta, Cta });
