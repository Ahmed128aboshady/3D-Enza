// ============ Enza Trade — shop / product / checkout / confirm ============
const { useState: uS, useEffect: uE, useMemo: uM } = React;

const WA_PHONE = '201208640240';
const waLink = (msg) => msg ? `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}` : `https://wa.me/${WA_PHONE}`;

/* ---------- Shop ---------- */
const ShopPage = () => {
  const { t, route, navigate, lang, products, categories } = useStore();
  const [cat, setCat] = uS(route.params.cat || 'all');
  const [sort, setSort] = uS('featured');
  uE(() => { if (route.params.cat) setCat(route.params.cat); }, [route.params.cat]);

  const counts = uM(() => {
    const c = {}; categories.forEach(k => c[k.id] = k.id === 'all' ? products.length : products.filter(p => p.cat === k.id).length);
    return c;
  }, [products, categories]);
  let list = cat === 'all' ? [...products] : products.filter(p => p.cat === cat);
  if (sort === 'low') list.sort((a, b) => a.price - b.price);
  if (sort === 'high') list.sort((a, b) => b.price - a.price);
  if (sort === 'featured') list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <>
      <div className="page-hero">
        <div className="ftr-pattern" style={{ opacity: 0.06 }} />
        <div className="wrap">
          <span className="eyebrow">{t({ en: 'The Collection', ar: 'المجموعة' })}</span>
          <h1 className="h1">{t({ en: 'Precision 3D Materials', ar: 'خامات طباعة ثلاثية الأبعاد' })}</h1>
          <p className="lede">{t({ en: 'Premium original 3D printing filaments and resins in Egypt.', ar: 'فيلامينت وريزن أصلي 100% مستورد من كبرى الماركات العالمية لضمان جودة وتفاصيل طباعتك.' })}</p>
        </div>
      </div>
      <section className="wrap section-sm">
        <div className="shop-layout">
          <aside className="filters">
            <div className="filter-group">
              <h4>{t({ en: 'Category', ar: 'الفئة' })}</h4>
              <div className="filter-list">
                {categories.map(c => (
                  <button key={c.id} className={cat === c.id ? 'active' : ''} onClick={() => setCat(c.id)}>
                    <span>{t(c)}</span><span className="cnt">{counts[c.id]}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <h4>{t({ en: 'Good to know', ar: 'معلومة' })}</h4>
              <div className="stack gap-m" style={{ fontSize: 14, color: 'var(--ink-soft)' }}>
                <span className="row gap-s"><Icon n="cash" style={{ width: 19, color: 'var(--maroon)' }} />{t({ en: 'Cash on delivery', ar: 'دفع عند الاستلام' })}</span>
                <span className="row gap-s"><Icon n="truck" style={{ width: 19, color: 'var(--maroon)' }} />{t({ en: 'Delivery in 2–4 days', ar: 'توصيل ٢–٤ أيام' })}</span>
                <span className="row gap-s"><Icon n="shield" style={{ width: 19, color: 'var(--maroon)' }} />{t({ en: 'Original Brand', ar: 'خامات أصلية 100%' })}</span>
              </div>
            </div>
          </aside>
          <div>
            <div className="shop-toolbar">
              <span className="toolbar-count">{list.length} {t({ en: 'pieces', ar: 'قطعة' })}</span>
              <div className="chip-row">
                {categories.map(c => (
                  <button key={c.id} className={'chip mobile-cat ' + (cat === c.id ? 'active' : '')} onClick={() => setCat(c.id)}>{t(c)}</button>
                ))}
              </div>
              <select className="select" value={sort} onChange={e => setSort(e.target.value)}>
                <option value="featured">{lang === 'en' ? 'Featured' : 'المميزة'}</option>
                <option value="low">{lang === 'en' ? 'Price: Low to High' : 'السعر: من الأقل'}</option>
                <option value="high">{lang === 'en' ? 'Price: High to Low' : 'السعر: من الأعلى'}</option>
              </select>
            </div>
            <div className="grid-products shop-grid">
              {list.map(p => <ProductCard key={p.id} p={p} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* ---------- Product detail ---------- */
const ProductPage = () => {
  const { t, money, navigate, route, addToCart, openCart, toast, lang, products, categories, optImg } = useStore();
  const p = products.find(x => x.id === route.params.id) || products[0] || {
    id: '', sku: '', cat: '', name: {en:'', ar:''}, price: 0, compareAt: 0, variants: [{color:{en:'', ar:'', hex:''}, img: '', stock: false}], specs: {}
  };
  const firstInStock = p.variants.findIndex(v => v.stock);
  const initialVi = (route.params.vi != null && route.params.vi >= 0 && route.params.vi < p.variants.length)
                    ? route.params.vi
                    : (firstInStock < 0 ? 0 : firstInStock);
  const [vi, setVi] = uS(initialVi);
  const [qty, setQty] = uS(1);
  const [activeImg, setActiveImg] = uS(p.variants[initialVi].img);
  uE(() => {
    window.scrollTo(0, 0);
    setQty(1);
  }, [p.id]);
  uE(() => {
    const fi = (route.params.vi != null && route.params.vi >= 0 && route.params.vi < p.variants.length)
              ? route.params.vi
              : (firstInStock < 0 ? 0 : firstInStock);
    setVi(fi);
  }, [p.id, route.params.vi]);
  const v = p.variants[vi] || p.variants[0];
  const cat = categories.find(c => c.id === p.cat);
  const related = products.filter(x => x.id !== p.id).slice(0, 4);
  const thumbs = Array.from(new Set([v.img, ...(v.shots || [])]));
  uE(() => { setActiveImg(v.img); }, [vi, p.id]);

  if (!p.id) {
    return (
      <section className="wrap section center">
        <h2 className="h2">{t({ en: 'Product not found', ar: 'المنتج غير موجود' })}</h2>
        <button className="btn btn-primary" style={{ marginTop: 24 }} onClick={() => navigate('shop')}>{t({ en: 'Back to shop', ar: 'العودة للمتجر' })}</button>
      </section>
    );
  }

  const add = () => { addToCart(p, v, qty); toast(t({ en: 'Added to cart', ar: 'تمت الإضافة للسلة' })); openCart(); };
  const waMsg = t({
    en: `Hi Enza Trade! I'd like to order:\n• ${t(p.name)} (${t(v.color)}) ×${qty}\nSKU ${p.sku} — ${money(p.price * qty)}`,
    ar: `أهلاً إنزا تريد! أود طلب:\n• ${t(p.name)} (${t(v.color)}) ×${qty}\nكود ${p.sku} — ${money(p.price * qty)}`,
  });

  return (
    <section className="wrap section-sm">
      <div className="crumbs" style={{ marginBottom: 20 }}>
        <a onClick={() => navigate('home')}>{t({ en: 'Home', ar: 'الرئيسية' })}</a><Icon n="arrow" style={{ width: 12 }} />
        <a onClick={() => navigate('shop')}>{t({ en: 'Shop', ar: 'المتجر' })}</a><Icon n="arrow" style={{ width: 12 }} />
        <span className="muted">{t(p.name)}</span>
      </div>
      
      <div className="pdp-layout">
        {/* Column 1: Gallery */}
        <div className="pdp-gallery-col">
          {thumbs.length > 1 && (
            <div className="pdp-thumbs-vertical">
              {thumbs.map((img, i) => (
                <button 
                  key={i} 
                  className={'pdp-thumb-v ' + (activeImg === img ? 'active' : '')} 
                  onMouseEnter={() => setActiveImg(img)} 
                  onClick={() => setActiveImg(img)}
                  aria-label={t(v.color)}
                >
                  <img src={optImg(img, 128)} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
          <div className="pdp-main-image-container">
            {!v.stock && <div className="card-oos"><span>{t({ en: 'Out of stock', ar: 'نفد المخزون' })}</span></div>}
            <img src={optImg(activeImg, 512)} alt={t(p.name)} className="pdp-main-image" />
          </div>
        </div>

        {/* Column 2: Info */}
        <div className="pdp-info-col">
          <div className="pdp-brand-cat">{t(cat)}</div>
          <h1 className="pdp-title">{t(p.name)}</h1>
          <p className="pdp-tagline-text">{t(p.tagline)}</p>
          
          <div className="divider" style={{ margin: '16px 0' }} />
          
          <div className="pdp-price-section">
            <span className="pdp-current-price">{money(p.price)}</span>
            {p.compareAt > p.price && (
              <div className="pdp-discount-badge-row">
                <span className="pdp-was-price">{money(p.compareAt)}</span>
                <span className="pdp-discount-percent">-{Math.round((1 - p.price / p.compareAt) * 100)}%</span>
              </div>
            )}
          </div>
          {p.cat !== 'resin' && (
            <div className="pdp-bulk-nudge">
              <Icon n="sparkle" style={{ color: 'var(--accent)', width: 15, height: 15 }} />
              <span>{t({ en: 'Buy 10+ filaments, save 50 LE/spool automatically!', ar: 'خصم تلقائي 50 ج.م للبكرة عند طلب 10 بكرات أو أكثر!' })}</span>
            </div>
          )}
          
          <p className="pdp-description">{t(p.blurb)}</p>
          
          <div className="divider" style={{ margin: '16px 0' }} />
          
          <div className="pdp-swatches-section">
            <div className="opt-label">
              {t({ en: 'Color:', ar: 'اللون:' })} <strong className="val">{t(v.color)}</strong>
            </div>
            <div className="swatch-row-pdp">
              {p.variants.map((x, i) => (
                <button 
                  key={i} 
                  className={'swatch-pdp ' + (i === vi ? 'active ' : '') + (x.stock ? '' : 'oos')} 
                  style={{ background: x.color.hex }} 
                  onClick={() => { setVi(i); navigate('product', { id: p.id, vi: i }); }} 
                  title={t(x.color)} 
                />
              ))}
            </div>
          </div>
          
          <div className="divider" style={{ margin: '16px 0' }} />
          
          <h3 className="pdp-specs-title">{t({ en: 'Specifications', ar: 'المواصفات الفنية' })}</h3>
          <table className="pdp-specs-table">
            <tbody>
              {Object.entries(p.specs).map(([k, val]) => (
                <tr key={k}>
                  <td className="spec-label">{t(SPEC_LABELS[k] || { en: k, ar: k })}</td>
                  <td className="spec-val">{typeof val === 'string' ? val : t(val)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Column 3: Buy Box */}
        <div className="pdp-buybox-col">
          <div className="pdp-buybox-card">
            <div className="buybox-price">{money(p.price)}</div>
            <div className="buybox-delivery">
              <Icon n="truck" style={{ width: 18 }} />
              <span>{t({ en: 'Delivery in 2–4 days', ar: 'التوصيل خلال ٢–٤ أيام' })}</span>
            </div>
            <div className="buybox-stock">
              <span className={'stock-badge ' + (v.stock ? 'in' : 'out')}>
                {v.stock ? t({ en: 'In Stock', ar: 'متوفر في المخزن' }) : t({ en: 'Out of stock', ar: 'نفد المخزون' })}
              </span>
            </div>
            
            {v.stock && (
              <div className="buybox-qty-section">
                <label>{t({ en: 'Qty:', ar: 'الكمية:' })}</label>
                <div className="qty-selector-buybox">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))}><Icon n="minus" /></button>
                  <span className="qty-value">{qty}</span>
                  <button onClick={() => setQty(q => q + 1)}><Icon n="plus" /></button>
                </div>
              </div>
            )}
            
            <div className="buybox-actions">
              <button 
                className="btn btn-primary btn-block btn-buybox" 
                disabled={!v.stock} 
                onClick={add}
              >
                <Icon n="bag" style={{ width: 18 }} />
                {t({ en: 'Add to Cart', ar: 'أضف إلى السلة' })}
              </button>
              
              <a 
                className="btn btn-wa btn-block btn-buybox" 
                href={waLink(waMsg)} 
                target="_blank" 
                rel="noopener"
              >
                <Icon n="chat" style={{ width: 18 }} />
                {t({ en: 'Order on WhatsApp', ar: 'اطلب عبر واتساب' })}
              </a>
            </div>
            
            <div className="buybox-trust-list">
              <div className="buybox-trust-item"><Icon n="cash" /><span>{t({ en: 'Cash on delivery', ar: 'الدفع عند الاستلام' })}</span></div>
              <div className="buybox-trust-item"><Icon n="shield" /><span>{t({ en: '100% Original Brand', ar: 'خامات أصلية 100%' })}</span></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="pdp-related-section">
        <div className="sec-head">
          <div className="stack">
            <span className="eyebrow">{t({ en: 'Recommendations', ar: 'قد يعجبك أيضاً' })}</span>
            <h2 className="h2">{t({ en: 'Related Products', ar: 'منتجات ذات صلة' })}</h2>
          </div>
          <button className="btn btn-ghost" onClick={() => navigate('shop')}>{t({ en: 'View all', ar: 'عرض الكل' })}</button>
        </div>
        <div className="grid-products home-grid">{related.map(r => <ProductCard key={r.id} p={r} />)}</div>
      </div>
    </section>
  );
};


const SPEC_LABELS = {
  size: { en: 'Size', ar: 'المقاس' },
  material: { en: 'Material', ar: 'الخامة' },
  strap: { en: 'Strap', ar: 'الحزام' },
  closure: { en: 'Closure', ar: 'الإغلاق' },
  interior: { en: 'Interior', ar: 'من الداخل' },
  temp: { en: 'Print Temp', ar: 'درجة حرارة الطباعة' },
  weight: { en: 'Weight', ar: 'الوزن' },
  brand: { en: 'Brand', ar: 'الماركة' },
  exposure: { en: 'Exposure Time', ar: 'زمن التعريض' }
};

/* ---------- Checkout ---------- */
const CheckoutPage = () => {
  const { t, money, cart, subtotal, bulkDiscount, navigate, lang, placeOrder, shipRates } = useStore();
  const [f, setF] = uS({ name: '', phone: '', gov: '', city: '', address: '', notes: '' });
  const [errs, setErrs] = uS({});
  const set = (k) => (e) => setF(s => ({ ...s, [k]: e.target.value }));
  const shipping = f.gov ? (shipRates[f.gov] ?? 0) : null; // null until governorate chosen
  const total = subtotal + (shipping || 0);

  uE(() => window.scrollTo(0, 0), []);
  if (cart.length === 0) {
    return (
      <section className="wrap section center">
        <h2 className="h2">{t({ en: 'Your bag is empty', ar: 'سلتك فاضية' })}</h2>
        <button className="btn btn-primary" style={{ marginTop: 24 }} onClick={() => navigate('shop')}>{t({ en: 'Browse materials', ar: 'تصفح الخامات' })}</button>
      </section>
    );
  }
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!f.name.trim()) er.name = t({ en: 'Required', ar: 'مطلوب' });
    if (!/^01[0-9]{9}$/.test(f.phone.replace(/\s/g, ''))) er.phone = t({ en: 'Enter a valid Egyptian number', ar: 'أدخل رقم مصري صحيح' });
    if (!f.gov) er.gov = t({ en: 'Required', ar: 'مطلوب' });
    if (!f.address.trim()) er.address = t({ en: 'Required', ar: 'مطلوب' });
    setErrs(er);
    if (Object.keys(er).length === 0) placeOrder(f, shipping || 0);
  };
  // plain function (NOT a component) → returns elements inline, avoids remount/focus-loss
  const field = ({ k, label, type = 'text', ph, full, ac }) => (
    <div className="field" style={full ? { gridColumn: '1 / -1' } : null}>
      <label>{t(label)} <span className="req">*</span></label>
      <input className={'input ' + (errs[k] ? 'err' : '')} type={type} name={k} autoComplete={ac}
        inputMode={type === 'tel' ? 'tel' : undefined}
        value={f[k]} onChange={set(k)} placeholder={ph ? t(ph) : ''} />
      {errs[k] && <span className="msg">{errs[k]}</span>}
    </div>
  );
  return (
    <section className="wrap section-sm">
      <div className="crumbs" style={{ marginBottom: 24 }}>
        <a onClick={() => navigate('shop')}>{t({ en: 'Shop', ar: 'المتجر' })}</a><Icon n="arrow" style={{ width: 13 }} />
        <span className="muted">{t({ en: 'Checkout', ar: 'إتمام الطلب' })}</span>
      </div>
      <h1 className="h1" style={{ marginBottom: 30 }}>{t({ en: 'Checkout', ar: 'إتمام الطلب' })}</h1>
      <form className="checkout" onSubmit={submit} autoComplete="on">
        <div className="checkout-form-card">
          <h3 className="h3" style={{ marginBottom: 18 }}>{t({ en: 'Delivery details', ar: 'بيانات التوصيل' })}</h3>
          <div className="grid-2">
            {field({ k: 'name', label: { en: 'Full name', ar: 'الاسم بالكامل' }, full: true, ac: 'name' })}
            {field({ k: 'phone', label: { en: 'Phone number', ar: 'رقم الموبايل' }, type: 'tel', ac: 'tel', ph: { en: '01XXXXXXXXX', ar: '01XXXXXXXXX' } })}
            <div className="field">
              <label>{t({ en: 'Governorate', ar: 'المحافظة' })} <span className="req">*</span></label>
              <select className={'input ' + (errs.gov ? 'err' : '')} name="gov" autoComplete="address-level1" value={f.gov} onChange={set('gov')}>
                <option value="">{t({ en: 'Select…', ar: 'اختر…' })}</option>
                {GOVERNORATES.map(g => <option key={g} value={g}>{lang === 'ar' ? (GOV_AR[g] || g) : g}</option>)}
              </select>
              {errs.gov && <span className="msg">{errs.gov}</span>}
            </div>
            {field({ k: 'city', label: { en: 'Area / City', ar: 'المنطقة / المدينة' }, ac: 'address-level2' })}
            {field({ k: 'address', label: { en: 'Street address', ar: 'العنوان بالتفصيل' }, full: true, ac: 'street-address' })}
          </div>
          <div className="field" style={{ marginBottom: 24 }}>
            <label>{t({ en: 'Order notes (optional)', ar: 'ملاحظات (اختياري)' })}</label>
            <textarea className="input" name="notes" rows="3" value={f.notes} onChange={set('notes')} placeholder={t({ en: 'Landmark, preferred delivery time…', ar: 'علامة مميزة، وقت توصيل مفضل…' })} />
          </div>

          <div className="divider" style={{ margin: '24px 0' }} />

          <h3 className="h3" style={{ marginBottom: 14 }}>{t({ en: 'Payment', ar: 'الدفع' })}</h3>
          <div className="pay-opt">
            <span className="radio" />
            <div>
              <strong style={{ display: 'block' }}>{t({ en: 'Cash on delivery', ar: 'الدفع عند الاستلام' })}</strong>
              <span className="muted" style={{ fontSize: 14 }}>{t({ en: 'Pay in cash when your order arrives. No deposit needed.', ar: 'ادفع كاش لما الأوردر يوصلك. من غير أي مقدم.' })}</span>
            </div>
          </div>
        </div>

        <aside className="osummary">
          <h3 className="h3" style={{ marginBottom: 8 }}>{t({ en: 'Order summary', ar: 'ملخص الطلب' })}</h3>
          {cart.map(it => (
            <div className="li-mini" key={it.key}>
              <img src={it.img} alt="" />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{t(it.name)}</div>
                <div className="muted" style={{ fontSize: 12.5 }}>{t(it.color)} · ×{it.qty}</div>
              </div>
              <span style={{ fontWeight: 700, fontSize: 14 }}>{money(it.price * it.qty)}</span>
            </div>
          ))}
          <div className="stack gap-s" style={{ padding: '16px 0' }}>
            {bulkDiscount > 0 && (
              <>
                <div className="summary-row" style={{ fontSize: '0.9em', color: 'var(--ink-soft)' }}>
                  <span>{t({ en: 'Before Discount', ar: 'الإجمالي قبل الخصم' })}</span>
                  <span style={{ textDecoration: 'line-through' }}>{money(subtotal + bulkDiscount)}</span>
                </div>
                <div className="summary-row" style={{ fontSize: '0.9em', color: 'var(--accent)', fontWeight: '600' }}>
                  <span>{t({ en: 'Bulk Discount (10+ spools)', ar: 'خصم عرض الـ 10 بكرات' })}</span>
                  <span>-{money(bulkDiscount)}</span>
                </div>
              </>
            )}
            <div className="summary-row"><span>{t({ en: 'Subtotal', ar: 'الإجمالي الفرعي' })}</span><span>{money(subtotal)}</span></div>
            <div className="summary-row">
              <span>{t({ en: 'Shipping', ar: 'الشحن' })}</span>
              <span>{shipping === null ? t({ en: 'Select governorate', ar: 'اختر المحافظة' }) : (shipping === 0 ? t({ en: 'Free', ar: 'مجاني' }) : money(shipping))}</span>
            </div>
          </div>
          <div className="summary-row total" style={{ borderTop: '1px solid var(--line)', paddingTop: 16 }}>
            <span>{t({ en: 'Total', ar: 'الإجمالي' })}</span><span>{money(total)}</span>
          </div>
          <div className="cod-note" style={{ margin: '16px 0' }}><Icon n="cash" />{t({ en: 'You pay on delivery', ar: 'بتدفع عند الاستلام' })}</div>
          <button className="btn btn-primary btn-lg btn-block" type="submit">{t({ en: 'Place order', ar: 'تأكيد الطلب' })}</button>
        </aside>
      </form>
    </section>
  );
};

/* ---------- Confirmation ---------- */
const ConfirmPage = () => {
  const { t, money, navigate, lastOrder } = useStore();
  uE(() => window.scrollTo(0, 0), []);
  const o = lastOrder;
  if (!o) { navigate('home'); return null; }
  const waMsg = t({
    en: `Hi Enza Trade! Confirming my order ${o.id}\nName: ${o.f.name}\nPhone: ${o.f.phone}\n${o.f.gov}, ${o.f.address}\nTotal: ${money(o.total)} (Cash on delivery)`,
    ar: `أهلاً إنزا تريد! بأكد أوردري ${o.id}\nالاسم: ${o.f.name}\nالموبايل: ${o.f.phone}\n${o.f.gov}، ${o.f.address}\nالإجمالي: ${money(o.total)} (دفع عند الاستلام)`,
  });
  return (
    <section className="wrap confirm">
      <img className="confirm-emblem" src="logo.png" alt="" />
      <span className="eyebrow">{t({ en: 'Order received', ar: 'تم استلام الطلب' })}</span>
      <h1 className="h1">{t({ en: 'Thank you, ', ar: 'شكراً لك، ' })}{o.f.name.split(' ')[0]}!</h1>
      <p className="lede" style={{ textAlign: 'center' }}>{t({ en: 'We’ve received your order and our team will confirm everything with you shortly. Pay in cash when it arrives.', ar: 'استلمنا طلبك وفريقنا هيأكد معك كل شيء قريب. ادفع كاش لما يوصلك.' })}</p>
      <div className="confirm-card">
        <div className="row between" style={{ marginBottom: 14 }}>
          <span className="muted">{t({ en: 'Order number', ar: 'رقم الطلب' })}</span>
          <strong>{o.id}</strong>
        </div>
        {o.items.map(it => (
          <div className="li-mini" key={it.key}>
            <img src={it.img} alt="" />
            <div style={{ flex: 1 }}><div style={{ fontWeight: 600, fontSize: 14 }}>{t(it.name)}</div><div className="muted" style={{ fontSize: 12.5 }}>{t(it.color)} · ×{it.qty}</div></div>
            <span style={{ fontWeight: 700, fontSize: 14 }}>{money(it.price * it.qty)}</span>
          </div>
        ))}
        <div className="summary-row total" style={{ paddingTop: 16 }}><span>{t({ en: 'Total (COD)', ar: 'الإجمالي (عند الاستلام)' })}</span><span>{money(o.total)}</span></div>
      </div>
      <div className="row gap-m" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        <a className="btn btn-wa btn-lg" href={waLink(waMsg)} target="_blank" rel="noopener"><Icon n="chat" style={{ width: 19 }} />{t({ en: 'Chat with us on WhatsApp', ar: 'تواصل معنا على واتساب' })}</a>
        <button className="btn btn-outline btn-lg" onClick={() => navigate('shop')}>{t({ en: 'Continue shopping', ar: 'كمل تسوق' })}</button>
      </div>
    </section>
  );
};

Object.assign(window, { ShopPage, ProductPage, CheckoutPage, ConfirmPage, SPEC_LABELS, waLink });
