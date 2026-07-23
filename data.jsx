// ============ ENZA TRADE — catalog, categories, i18n copy ============
// Bilingual store data. Strings are {en, ar}. Helper t() lives in app.jsx.

const CURRENCY = { en: 'LE', ar: 'ج.م' };

// --- Categories ---
const CATEGORIES = [
  {
    "id": "all",
    "en": "All Materials",
    "ar": "كل الخامات"
  },
  {
    "id": "pla-plus",
    "en": "PLA+ Filament",
    "ar": "خيوط PLA+"
  },
  {
    "id": "asa",
    "en": "ASA+ Filament",
    "ar": "خيوط ASA+"
  },
  {
    "id": "abs",
    "en": "ABS+ Filament",
    "ar": "خيوط ABS+"
  },
  {
    "id": "pla-cf",
    "en": "PLA-CF Carbon",
    "ar": "كاربون فايبر PLA-CF"
  },
  {
    "id": "pla-silk",
    "en": "PLA-Silk Haze",
    "ar": "خيوط سيلك حريرية"
  },
  {
    "id": "resin",
    "en": "3D Resins",
    "ar": "ريزن 3D ثلاثي الأبعاد"
  },
  {
    "id": "bambu",
    "en": "Bambu Lab",
    "ar": "خامات بامبو لاب"
  },
  {
    "id": "petg",
    "en": "PETG Filament",
    "ar": "خيوط PETG"
  },
  {
    "id": "other",
    "en": "Specialty Materials",
    "ar": "خامات خاصة أخرى"
  }
];

// helper to build a color
const C = (en, ar, hex) => ({ en, ar, hex });

// --- Products (Grouped by Color Variants) ---
// --- Products (Grouped by Color Variants) ---
const PRODUCTS = [
  {
    id: 'pla-plus-filament-esun',
    sku: 'EZ-PLA--001',
    cat: 'pla-plus',
    name: {"en": "PLA+ Filament (eSUN)", "ar": "خيوط PLA+ الأصلية عالية المقاومة (eSUN)"},
    price: 750.0,
    compareAt: 1000.0,
    featured: true,
    tagline: {"en": "Original 3D Printing PLA+", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality PLA+ 3D printing material by eSUN. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من eSUN. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('White', 'أبيض', '#ffffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/112/image_1024/PLA%2B%20Filament%20White?unique=48ce0da', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/112/image_1024/PLA%2B%20Filament%20White?unique=48ce0da"] },
      { color: C('Grass Green', 'أخضر عشبي', '#355e3b'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/118/image_1024/PLA%2B%20Filament%20Grass%20Green?unique=e5a3ca9', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/118/image_1024/PLA%2B%20Filament%20Grass%20Green?unique=e5a3ca9"] },
      { color: C('Orange', 'برتقالي', '#ff7f00'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/50/image_1024/PLA%2B%20Filament%20Orange?unique=677d0a9', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/50/image_1024/PLA%2B%20Filament%20Orange?unique=677d0a9"] },
      { color: C('Pink', 'وردي', '#ffc0cb'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/51/image_1024/PLA%2B%20Filament%20Pink?unique=7149510', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/51/image_1024/PLA%2B%20Filament%20Pink?unique=7149510"] },
      { color: C('Olive Green', 'أخضر زيتوني', '#555B46'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Bone White', 'أبيض عظمي', '#f5f5f0'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/53/image_1024/PLA%2B%20Filament%20Bone%20White?unique=709dfa0', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/53/image_1024/PLA%2B%20Filament%20Bone%20White?unique=709dfa0"] },
      { color: C('Black', 'أسود', '#111111'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/54/image_1024/PLA%2B%20Filament%20Black?unique=7f95a93', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/54/image_1024/PLA%2B%20Filament%20Black?unique=7f95a93"] },
      { color: C('Red', 'أحمر', '#c00000'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/116/image_1024/PLA%2B%20Filament%20%20Red?unique=4994906', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/116/image_1024/PLA%2B%20Filament%20%20Red?unique=4994906"] },
      { color: C('Yellow', 'أصفر', '#FBCE2B'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/129/image_1024/Bambu%20Lab%20PLA%20Yellow?unique=2c5e17d', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/129/image_1024/Bambu%20Lab%20PLA%20Yellow?unique=2c5e17d"] },
      { color: C('Grey', 'رمادي', '#808080'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/120/image_1024/PLA%2B%20Filament%20Grey?unique=9a870ba', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/120/image_1024/PLA%2B%20Filament%20Grey?unique=9a870ba"] },
      { color: C('Gold', 'ذهبي', '#C99B26'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/138/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20Gold?unique=ad08510', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/138/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20Gold?unique=ad08510"] },
      { color: C('Cold White', 'أبيض ثلجي', '#f0f8ff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/56/image_1024/PLA%2B%20Filament%20Cold%20White?unique=d21bf17', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/56/image_1024/PLA%2B%20Filament%20Cold%20White?unique=d21bf17"] },
      { color: C('Green', 'أخضر', '#008000'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/117/image_1024/PLA%2B%20Filament%20Green?unique=0d49ddb', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/117/image_1024/PLA%2B%20Filament%20Green?unique=0d49ddb"] },
      { color: C('Beige', 'بيج', '#ECCAB0'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/130/image_1024/Bambu%20Lab%20PLA%20Beige?unique=93fbeef', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/130/image_1024/Bambu%20Lab%20PLA%20Beige?unique=93fbeef"] },
      { color: C('Peak Green', 'أخضر داكن', '#2d5a27'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/58/image_1024/PLA%2B%20Filament%20Peak%20Green?unique=f4e2915', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/58/image_1024/PLA%2B%20Filament%20Peak%20Green?unique=f4e2915"] },
      { color: C('Light Blue', 'أزرق فاتح', '#add8e6'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/59/image_1024/PLA%2B%20Filament%20Light%20Blue?unique=dea8ab9', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/59/image_1024/PLA%2B%20Filament%20Light%20Blue?unique=dea8ab9"] },
      { color: C('Light Brown', 'بني فاتح', '#966f33'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/119/image_1024/PLA%2B%20Filament%20Light%20Brown?unique=5cedfd3', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/119/image_1024/PLA%2B%20Filament%20Light%20Brown?unique=5cedfd3"] },
      { color: C('Space Blue', 'أزرق فضائي', '#1d2e54'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/60/image_1024/PLA%2B%20Filament%20Space%20Blue?unique=4942549', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/60/image_1024/PLA%2B%20Filament%20Space%20Blue?unique=4942549"] },
      { color: C('Dark Blue', 'أزرق داكن', '#11204B'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Pine Green', 'أخضر صنوبري', '#0f3a20'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/61/image_1024/PLA%2B%20Filament%20Pine%20Green?unique=80a703d', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/61/image_1024/PLA%2B%20Filament%20Pine%20Green?unique=80a703d"] },
      { color: C('Magenta', 'أرجواني (ماجنتا)', '#d80073'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/62/image_1024/PLA%2B%20Filament%20Magenta?unique=aeeb02e', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/62/image_1024/PLA%2B%20Filament%20Magenta?unique=aeeb02e"] },
      { color: C('Fire Engine Red', 'أحمر ناري', '#c00000'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/64/image_1024/PLA%2B%20Filament%20Fire%20Engine%20Red?unique=95d8e82', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/64/image_1024/PLA%2B%20Filament%20Fire%20Engine%20Red?unique=95d8e82"] },
      { color: C('Jade Green', 'أخضر جاد', '#00a86b'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/65/image_1024/PLA%2B%20Filament%20Jade%20Green?unique=548c9d9', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/65/image_1024/PLA%2B%20Filament%20Jade%20Green?unique=548c9d9"] },
      { color: C('Holly Green', 'أخضر هولي', '#145c2f'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/66/image_1024/PLA%2B%20Filament%20Holly%20Green?unique=97fbe35', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/66/image_1024/PLA%2B%20Filament%20Holly%20Green?unique=97fbe35"] },
      { color: C('Silver', 'فضي', '#c0c0c0'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/113/image_1024/PLA%2B%20Filament%20silver?unique=6bc7885', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/113/image_1024/PLA%2B%20Filament%20silver?unique=6bc7885"] },
      { color: C('Very Peri', 'فيري بيري', '#6667ab'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/67/image_1024/PLA%2B%20Filament%20Very%20Peri?unique=d8e5494', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/67/image_1024/PLA%2B%20Filament%20Very%20Peri?unique=d8e5494"] },
      { color: C('Purple', 'بنفسجي', '#800080'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/68/image_1024/PLA%2B%20Filament%20Purple?unique=8ce932e', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/68/image_1024/PLA%2B%20Filament%20Purple?unique=8ce932e"] },
      { color: C('Brown', 'بني', '#5c4033'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/69/image_1024/PLA%2B%20Filament%20Brown?unique=55d2085', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/69/image_1024/PLA%2B%20Filament%20Brown?unique=55d2085"] },
      { color: C('Baby Pink', 'وردي ناعم', '#FFB6C1'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Coral Orange', 'برتقالي مرجاني', '#ff7f50'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/71/image_1024/PLA%2B%20Filament%20Coral%20Orange?unique=aa52f22', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/71/image_1024/PLA%2B%20Filament%20Coral%20Orange?unique=aa52f22"] },
      { color: C('RGB Red', 'أحمر RGB', '#FF0000'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('RGB Blue', 'أزرق RGB', '#0000FF'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('RGB Green', 'أخضر RGB', '#00FF00'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Mint Green', 'أخضر نعناعي', '#98ff98'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/75/image_1024/PLA%2B%20Filament%20Mint%20Green?unique=b722e36', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/75/image_1024/PLA%2B%20Filament%20Mint%20Green?unique=b722e36"] },
      { color: C('Baby Blue', 'بيبي بلو', '#89cff0'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/115/image_1024/PLA%2B%20Filament%20baby%20blue?unique=db47feb', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/115/image_1024/PLA%2B%20Filament%20baby%20blue?unique=db47feb"] },
      { color: C('Light Khaki', 'كاكي فاتح', '#D6C9AF'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Lilac', 'ليلكي', '#CF9AD0'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Matcha Green', 'أخضر ماتشا', '#80A867'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Peach Pink', 'خوخي وردي', '#FFBDC4'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Milky White', 'أبيض حليبي', '#fffffd'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/73/image_1024/PLA%2B%20Filament%20Milky%20White?unique=b3c563c', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/73/image_1024/PLA%2B%20Filament%20Milky%20White?unique=b3c563c"] },
      { color: C('Almond Yellow', 'أصفر لوزي', '#E9E795'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Apricot', 'مشمشي', '#FFCF56'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Aqua', 'سماوي', '#7fdbff'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Brick Red', 'أحمر طوبي', '#9B5347'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Concrete Grey', 'رمادي خرساني', '#DEDEDE'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
    ],
    specs: {"material": "PLA+", "temp": "205 - 225 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-plus-3kg-filament-esun',
    sku: 'EZ-PLA-3K-001',
    cat: 'pla-plus',
    name: {"en": "PLA+ Filament 3kg (eSUN)", "ar": "خيوط PLA+ الأصلية حجم 3 كجم (eSUN)"},
    price: 2200.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Bulk 3kg 3D Printing PLA+", "ar": "خامات طباعة ثلاثية الأبعاد حجم اقتصادي 3 كجم"},
    blurb: {"en": "Bulk 3kg spool of high quality PLA+ filament by eSUN. Ideal for long print jobs and production environments.", "ar": "بكرة كبيرة بحجم 3 كجم من خيوط PLA+ عالية الجودة من eSUN. مثالية للطباعة الطويلة والمستمرة وإنتاج الكميات الكبيرة بأسعار اقتصادية."},
    variants: [
      { color: C('Black', 'أسود', '#111111'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/54/image_1024/PLA%2B%20Filament%20Black?unique=7f95a93', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/54/image_1024/PLA%2B%20Filament%20Black?unique=7f95a93"] },
      { color: C('White', 'أبيض', '#ffffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/112/image_1024/PLA%2B%20Filament%20White?unique=48ce0da', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/112/image_1024/PLA%2B%20Filament%20White?unique=48ce0da"] },
    ],
    specs: {"material": "PLA+", "temp": "205 - 225 °C", "weight": "3.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-plus-5kg-filament-esun',
    sku: 'EZ-PLA-5K-001',
    cat: 'pla-plus',
    name: {"en": "PLA+ Filament 5kg (eSUN)", "ar": "خيوط PLA+ الأصلية حجم 5 كجم (eSUN)"},
    price: 3600.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Bulk 5kg 3D Printing PLA+", "ar": "خامات طباعة ثلاثية الأبعاد حجم اقتصادي 5 كجم"},
    blurb: {"en": "Industrial 5kg spool of high quality PLA+ filament by eSUN. Engineered for industrial production and heavy printing needs.", "ar": "بكرة صناعية ضخمة بحجم 5 كجم من خيوط PLA+ عالية الجودة من eSUN. مصممة للمصانع والورش والإنتاج الكمي لتقليل تكلفة الطباعة."},
    variants: [
      { color: C('Black', 'أسود', '#111111'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/54/image_1024/PLA%2B%20Filament%20Black?unique=7f95a93', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/54/image_1024/PLA%2B%20Filament%20Black?unique=7f95a93"] },
      { color: C('White', 'أبيض', '#ffffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/112/image_1024/PLA%2B%20Filament%20White?unique=48ce0da', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/112/image_1024/PLA%2B%20Filament%20White?unique=48ce0da"] },
    ],
    specs: {"material": "PLA+", "temp": "205 - 225 °C", "weight": "5.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-pluscmyk-filament-esun',
    sku: 'EZ-PLA--002',
    cat: 'pla-plus',
    name: {"en": "PLA+ CMYK Filament (eSUN)", "ar": "خيوط PLA+ بالألوان الأساسية للطباعة الملونة (eSUN)"},
    price: 1150.0,
    compareAt: null,
    featured: true,
    tagline: {"en": "Original 3D Printing PLA+ CMYK Pack", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality PLA+ CMYK Pack 3D printing material by eSUN. Engineered for multi-color printing (Cyan, Magenta, Yellow, White) using HueForge or multi-material units.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من eSUN. تم تصميمها لتناسب تطبيقات الطباعة متعددة الألوان."},
    variants: [
      { color: C('Cyan', 'سماوي', '#00ffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/76/image_1024/PLA%2BCMYK%20Filament%20Cyan?unique=e19edaf', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/76/image_1024/PLA%2BCMYK%20Filament%20Cyan?unique=e19edaf"] },
      { color: C('White', 'أبيض', '#ffffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/78/image_1024/PLA%2BCMYK%20Filament%20White?unique=2cf859e', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/78/image_1024/PLA%2BCMYK%20Filament%20White?unique=2cf859e"] },
      { color: C('Yellow', 'أصفر', '#FBCE2B'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/129/image_1024/Bambu%20Lab%20PLA%20Yellow?unique=2c5e17d', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/129/image_1024/Bambu%20Lab%20PLA%20Yellow?unique=2c5e17d"] },
      { color: C('Magenta', 'أرجواني (ماجنتا)', '#d80073'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/62/image_1024/PLA%2B%20Filament%20Magenta?unique=aeeb02e', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/62/image_1024/PLA%2B%20Filament%20Magenta?unique=aeeb02e"] },
    ],
    specs: {"material": "PLA+ CMYK Pack", "temp": "200 - 220 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-filament-esun',
    sku: 'EZ-PLA-STD-001',
    cat: 'pla-plus',
    name: {"en": "PLA Filament (eSUN)", "ar": "خيوط PLA الأساسية (eSUN)"},
    price: 750.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA Standard", "ar": "خامات طباعة ثلاثية الأبعاد قياسية"},
    blurb: {"en": "Standard PLA filament by eSUN. Easy to print with smooth finish and high detail, ideal for general prototyping.", "ar": "خيوط PLA القياسية من eSUN. سهلة الطباعة وتتميز بلمسة نهائية ناعمة وتفاصيل دقيقة، مثالية للنماذج العامة."},
    variants: [
      { color: C('Translucent Light Blue', 'سماوي شفاف', '#add8e6b0'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Clear', 'شفاف', '#e0e0e0b0'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/178/image_1024/High%20Temperature%20Resin%20Clear?unique=44fd2cd', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/178/image_1024/High%20Temperature%20Resin%20Clear?unique=44fd2cd"] },
    ],
    specs: {"material": "PLA", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-clear-rainbow-filament-esun',
    sku: 'EZ-PLA-CLR-001',
    cat: 'pla-plus',
    name: {"en": "PLA-Clear Rainbow (eSUN)", "ar": "خيوط PLA قوس قزح الشفافة (eSUN)"},
    price: 1200.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing Clear Rainbow", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality translucent rainbow PLA filament by eSUN. Features a beautiful transition of transparent colors, perfect for vases and light-transmitting prints.", "ar": "خيوط PLA الشفافة بألوان قوس قزح من eSUN. تتميز بتدرج لوني شفاف رائع، مثالية للمزهريات والمجسمات المضيئة."},
    variants: [
      { color: C('Translucent Light Purple', 'ليلكي شفاف', '#CF9AD0b0'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Translucent Aqua', 'أكوا شفاف', '#00FFFFb0'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Translucent Blue', 'أزرق شفاف', '#0000FFb0'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Translucent Green', 'أخضر شفاف', '#00FF00b0'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
    ],
    specs: {"material": "PLA Clear Rainbow", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-basic-filament-esun',
    sku: 'EZ-PLA-BSC-001',
    cat: 'pla-plus',
    name: {"en": "PLA-Basic Filament (eSUN)", "ar": "خيوط PLA-Basic الاقتصادية (eSUN)"},
    price: 750.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA Basic", "ar": "خامات طباعة ثلاثية الأبعاد قياسية"},
    blurb: {"en": "Affordable and highly reliable standard PLA filament by eSUN. Great choice for everyday prints and educational projects.", "ar": "خيوط PLA الاقتصادية والموثوقة من eSUN. الخيار الأفضل للطباعة اليومية والمشاريع التعليمية."},
    variants: [
      { color: C('Light Grey', 'رمادي فاتح', '#d3d3d3'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
    ],
    specs: {"material": "PLA Basic", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-luminous-filament-esun',
    sku: 'EZ-PLA--003',
    cat: 'pla-plus',
    name: {"en": "PLA-Luminous Filament (eSUN)", "ar": "خيوط PLA مضيئة في الظلام (eSUN)"},
    price: 1200.0,
    compareAt: null,
    featured: true,
    tagline: {"en": "Original 3D Printing PLA Luminous", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "Glow-in-the-dark PLA filament by eSUN. Absorbs light and emits a brilliant glow in darkness, perfect for Halloween, toys, and night signs.", "ar": "خيوط PLA المضيئة في الظلام من eSUN. تمتص الضوء لتشع بوهج رائع في الظلام، مثالية للألعاب واللوحات الإرشادية الليلية."},
    variants: [
      { color: C('Luminous Orange', 'برتقالي مضيء', '#ffa500'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Luminous Green', 'أخضر مضيء', '#00ff00'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Luminous Blue', 'أزرق مضيء', '#0000ff'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Luminous Purple', 'بنفسجي مضيء', '#800080'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
    ],
    specs: {"material": "PLA Luminous", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-silk-filament-esun',
    sku: 'EZ-PLA--004',
    cat: 'pla-plus',
    name: {"en": "PLA-Silk Filament (eSUN)", "ar": "خيوط PLA سيلك بلمعة الحرير (eSUN)"},
    price: 900.0,
    compareAt: null,
    featured: true,
    tagline: {"en": "Original 3D Printing PLA Silk", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality Silk PLA filament by eSUN. Gives 3D prints a shiny, satin finish that looks like real polished silk.", "ar": "خيوط سيلك الحريرية من eSUN. تمنح المجسمات لمعاناً حريرياً ناعماً وبريقاً معدنياً جذاباً دون الحاجة لمعالجة بعد الطباعة."},
    variants: [
      { color: C('Gold', 'ذهبي سيلك', '#ffd700'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/138/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20Gold?unique=ad08510', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/138/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20Gold?unique=ad08510"] },
      { color: C('Rose Gold', 'روز جولد سيلك', '#b76e79'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Cyan', 'سماوي سيلك', '#00ffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/76/image_1024/PLA%2BCMYK%20Filament%20Cyan?unique=e19edaf', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/76/image_1024/PLA%2BCMYK%20Filament%20Cyan?unique=e19edaf"] },
      { color: C('Purple', 'بنفسجي سيلك', '#800080'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/68/image_1024/PLA%2B%20Filament%20Purple?unique=8ce932e', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/68/image_1024/PLA%2B%20Filament%20Purple?unique=8ce932e"] },
      { color: C('Moon Palace', 'بنفسجي غامق سيلك', '#4a2c5a'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
    ],
    specs: {"material": "PLA Silk", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-silk-magic-filament-esun',
    sku: 'EZ-PLA--006',
    cat: 'pla-plus',
    name: {"en": "PLA-Silk Magic Filament (eSUN)", "ar": "خيوط PLA سيلك ماجيك ثنائية/ثلاثية الألوان (eSUN)"},
    price: 1450.0,
    compareAt: null,
    featured: true,
    tagline: {"en": "Original 3D Printing PLA Silk Magic", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "Co-extruded dual-color Silk PLA by eSUN. Displays different colors depending on the viewing angle, creating an amazing color-shifting effect.", "ar": "خيوط سيلك ماجيك ثنائية الألوان من eSUN. يظهر المجسم بألوان مختلفة حسب زاوية الرؤية، مما يمنحه تأثيراً بصرياً ساحراً وديناميكياً."},
    variants: [
      { color: C('Green Blue', 'أخضر وأزرق سيلك', 'linear-gradient(135deg, #00ff00 0%, #0000ff 100%)'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Purple Gold', 'بنفسجي وذهبي سيلك', 'linear-gradient(135deg, #800080 0%, #ffd700 100%)'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Red Blue', 'أحمر وأزرق سيلك', 'linear-gradient(135deg, #ff0000 0%, #0000ff 100%)'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/82/image_1024/PLA-Matte%20Filament%20Red%20Blue?unique=3071ab7', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/82/image_1024/PLA-Matte%20Filament%20Red%20Blue?unique=3071ab7"] },
      { color: C('Blue Purple', 'أزرق وبنفسجي سيلك', 'linear-gradient(135deg, #0000ff 0%, #800080 100%)'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Gold Silver', 'ذهبي وفضي سيلك', 'linear-gradient(135deg, #ffd700 0%, #c0c0c0 100%)'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
    ],
    specs: {"material": "PLA Silk Magic", "temp": "190 - 225 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-silk-mystic-filament-esun',
    sku: 'EZ-PLA-MYS-001',
    cat: 'pla-plus',
    name: {"en": "PLA-Silk Mystic Filament (eSUN)", "ar": "خيوط PLA سيلك ميستيك ثلاثية الألوان (eSUN)"},
    price: 1450.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA Silk Mystic", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "Tri-color co-extruded Silk PLA filament by eSUN. Combines three colors in a single strand for breathtaking multi-color transitions.", "ar": "خيوط سيلك ميستيك ثلاثية الألوان المندمجة من eSUN. تدمج ثلاثة ألوان في خيط واحد لتمنح المجسم تفاصيل غاية في الروعة."},
    variants: [
      { color: C('Red Yellow Blue', 'أحمر وأصفر وأزرق سيلك', 'linear-gradient(135deg, #ff0000 0%, #ffff00 50%, #0000ff 100%)'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Red Gold Purple', 'أحمر وذهبي وبنفسجي سيلك', 'linear-gradient(135deg, #ff0000 0%, #ffd700 50%, #800080 100%)'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Red Green Blue', 'أحمر وأخضر وأزرق سيلك', 'linear-gradient(135deg, #ff0000 0%, #00ff00 50%, #0000ff 100%)'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Gold Red Green', 'ذهبي وأحمر وأخضر سيلك', 'linear-gradient(135deg, #ffd700 0%, #ff0000 50%, #00ff00 100%)'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
    ],
    specs: {"material": "PLA Silk Mystic", "temp": "190 - 225 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-matte-filament-esun',
    sku: 'EZ-PLA--005',
    cat: 'pla-plus',
    name: {"en": "PLA-Matte Filament (eSUN)", "ar": "خيوط PLA مطفية ناعمة (eSUN)"},
    price: 900.0,
    compareAt: null,
    featured: true,
    tagline: {"en": "Original 3D Printing PLA Matte", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "Matte finish PLA filament by eSUN. Creates prints with no glare, hiding layer lines effectively and providing a elegant, ceramic-like look.", "ar": "خيوط PLA مطفية ناعمة (Matte) من eSUN. تمنح المجسمات ملمساً ناعماً ومظهراً غير عاكس للضوء، وتساعد في إخفاء طبقات الطباعة."},
    variants: [
      { color: C('Deep Black', 'أسود مطفي', '#111111'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Milky White', 'أبيض حليبي مطفي', '#fffffd'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/73/image_1024/PLA%2B%20Filament%20Milky%20White?unique=b3c563c', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/73/image_1024/PLA%2B%20Filament%20Milky%20White?unique=b3c563c"] },
      { color: C('Peach Pink', 'خوخي وردي مطفي', '#ffbdc4'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Paddy Field', 'أخضر عشبي مطفي', '#556b2f'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Fruit Candy', 'وردي حلوى مطفي', '#ffb6c1'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
    ],
    specs: {"material": "PLA Matte", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-matte-dual-filament-esun',
    sku: 'EZ-PLA-MTD-001',
    cat: 'pla-plus',
    name: {"en": "PLA-Matte Dual Filament (eSUN)", "ar": "خيوط PLA مطفية ثنائية الألوان (eSUN)"},
    price: 950.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing Matte Dual", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "Co-extruded dual-color Matte PLA by eSUN. Combining the gorgeous texture of matte with the color-shifting properties of dual filaments.", "ar": "خيوط مطفية ثنائية الألوان مدمجة من eSUN. تجمع بين روعة المظهر المطفي وتغيير الألوان البصري حسب زاوية النظر للقطع المطبوعة."},
    variants: [
      { color: C('Red Blue', 'أحمر وأزرق مطفي', 'linear-gradient(135deg, #ff0000 0%, #0000ff 100%)'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/82/image_1024/PLA-Matte%20Filament%20Red%20Blue?unique=3071ab7', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/82/image_1024/PLA-Matte%20Filament%20Red%20Blue?unique=3071ab7"] },
      { color: C('Green Pink', 'أخضر ووردي مطفي', 'linear-gradient(135deg, #00ff00 0%, #ffc0cb 100%)'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Purple Yellow', 'بنفسجي وأصفر مطفي', 'linear-gradient(135deg, #800080 0%, #ffff00 100%)'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
    ],
    specs: {"material": "PLA Matte Dual", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-metal-filament-esun',
    sku: 'EZ-PLA-MTL-001',
    cat: 'pla-plus',
    name: {"en": "PLA-Metal Filament (eSUN)", "ar": "خيوط PLA بتأثير معدني (eSUN)"},
    price: 1100.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA Metal", "ar": "خامات طباعة ثلاثية الأبعاد معدنية"},
    blurb: {"en": "High quality metal-like PLA filament by eSUN. Infused with metallic sheen for printing sculptures, coins, and vintage prototypes.", "ar": "خيوط PLA ذات بريق معدني كلاسيكي من eSUN. تعطي انطباع المعادن الحقيقية، مثالية للتصاميم المعمارية والعملات والتماثيل."},
    variants: [
      { color: C('Gold', 'ذهبي معدني', '#d4af37'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/138/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20Gold?unique=ad08510', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/138/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20Gold?unique=ad08510"] },
      { color: C('Antique Brass', 'نحاسي معتق', '#b5a642'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
    ],
    specs: {"material": "PLA Metal", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-chameleon-filament-esun',
    sku: 'EZ-PLA-CHM-001',
    cat: 'pla-plus',
    name: {"en": "PLA-Chameleon Filament (eSUN)", "ar": "خيوط الحرباء المتغيرة الألوان (eSUN)"},
    price: 1500.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA Chameleon", "ar": "خامات طباعة ثلاثية الأبعاد متغيرة الألوان"},
    blurb: {"en": "Stunning chameleon effect PLA filament by eSUN. Color changes beautifully depending on angle and reflection of ambient light.", "ar": "خيوط PLA بتأثير الحرباء الفريد من eSUN. يتغير اللون بشكل مذهل وانسيابي مع انعكاس الإضاءة والزوايا المختلفة للمجسم."},
    variants: [
      { color: C('Polaris', 'بولاريس متوهج', 'linear-gradient(135deg, #000044 0%, #00ff88 100%)'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Galaxy Blue', 'أزرق مجرة', '#0f2b5c'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
    ],
    specs: {"material": "PLA Chameleon", "temp": "195 - 220 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-wood-filament-esun',
    sku: 'EZ-PLA--009',
    cat: 'pla-plus',
    name: {"en": "PLA-Wood Filament (eSUN)", "ar": "خيوط PLA وود خشبية بمظهر طبيعي (eSUN)"},
    price: 1100.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA Wood", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "Wood-like PLA filament by eSUN. Contains actual wood fibers to produce prints with a natural wooden texture and smell that can be sanded and painted.", "ar": "خيوط خشبية أصلية من eSUN. تحتوي على ألياف الخشب الحقيقية لتعطي المجسم ملمساً ورائحة الخشب الطبيعي، قابلة للصنفرة والدهان."},
    variants: [
      { color: C('Birch', 'خشب البتولا', '#dfd5c6'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Aspen', 'خشب الحور', '#f0eae1'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Walnut', 'خشب الجوز', '#5c4033'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/87/image_1024/PLA-Wood%20Filament%20Walnut?unique=1445896', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/87/image_1024/PLA-Wood%20Filament%20Walnut?unique=1445896"] },
    ],
    specs: {"material": "PLA Wood", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-hs-filament-esun',
    sku: 'EZ-PLA-HS-001',
    cat: 'pla-plus',
    name: {"en": "PLA-HS High Speed Filament (eSUN)", "ar": "خيوط PLA-HS للطباعة السريعة (eSUN)"},
    price: 850.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA High Speed", "ar": "خامات طباعة ثلاثية الأبعاد سريعة"},
    blurb: {"en": "High Speed PLA filament by eSUN. Formulated for ultra-fast extrusion and cooling, compatible with modern high-speed 3D printers.", "ar": "خيوط PLA مخصصة للطباعة عالية السرعة من eSUN. تمتاز بالتدفق والانصهار السريع لملائمة الطابعات الحديثة عالية السرعة."},
    variants: [
      { color: C('Orange', 'برتقالي', '#ff7f00'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/50/image_1024/PLA%2B%20Filament%20Orange?unique=677d0a9', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/50/image_1024/PLA%2B%20Filament%20Orange?unique=677d0a9"] },
      { color: C('Black', 'أسود', '#111111'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/54/image_1024/PLA%2B%20Filament%20Black?unique=7f95a93', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/54/image_1024/PLA%2B%20Filament%20Black?unique=7f95a93"] },
      { color: C('Grey', 'رمادي', '#808080'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/120/image_1024/PLA%2B%20Filament%20Grey?unique=9a870ba', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/120/image_1024/PLA%2B%20Filament%20Grey?unique=9a870ba"] },
      { color: C('Red', 'أحمر', '#c00000'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/116/image_1024/PLA%2B%20Filament%20%20Red?unique=4994906', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/116/image_1024/PLA%2B%20Filament%20%20Red?unique=4994906"] },
      { color: C('White', 'أبيض', '#ffffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/112/image_1024/PLA%2B%20Filament%20White?unique=48ce0da', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/112/image_1024/PLA%2B%20Filament%20White?unique=48ce0da"] },
      { color: C('Pink', 'وردي', '#ffc0cb'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/51/image_1024/PLA%2B%20Filament%20Pink?unique=7149510', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/51/image_1024/PLA%2B%20Filament%20Pink?unique=7149510"] },
    ],
    specs: {"material": "PLA High Speed", "temp": "210 - 230 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-plushs-high-speed-filament-esun',
    sku: 'EZ-PLA--011',
    cat: 'pla-plus',
    name: {"en": "PLA+HS High Speed Filament (eSUN)", "ar": "خيوط PLA+HS للسرعات العالية جداً (eSUN)"},
    price: 850.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA+ High Speed", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "Premium High-Speed PLA+ filament by eSUN. Designed to balance speed, layer adhesion, and mechanical properties for optimal functional prints.", "ar": "خيوط PLA+ للسرعات العالية جداً من eSUN. توازن بين سرعة الطباعة الفائقة وقوة تماسك الطبقات للحصول على نتائج ممتازة."},
    variants: [
      { color: C('Olive Green', 'أخضر زيتوني', '#555B46'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Bone White', 'أبيض عظمي', '#f5f5f0'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/53/image_1024/PLA%2B%20Filament%20Bone%20White?unique=709dfa0', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/53/image_1024/PLA%2B%20Filament%20Bone%20White?unique=709dfa0"] },
      { color: C('Black', 'أسود', '#111111'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/98/image_1024/PLA%2BHS%20Filament%20Black?unique=042f84a', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/98/image_1024/PLA%2BHS%20Filament%20Black?unique=042f84a"] },
      { color: C('Red', 'أحمر', '#c00000'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/116/image_1024/PLA%2B%20Filament%20%20Red?unique=4994906', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/116/image_1024/PLA%2B%20Filament%20%20Red?unique=4994906"] },
      { color: C('Yellow', 'أصفر', '#FBCE2B'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/129/image_1024/Bambu%20Lab%20PLA%20Yellow?unique=2c5e17d', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/129/image_1024/Bambu%20Lab%20PLA%20Yellow?unique=2c5e17d"] },
      { color: C('Grey', 'رمادي', '#808080'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/120/image_1024/PLA%2B%20Filament%20Grey?unique=9a870ba', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/120/image_1024/PLA%2B%20Filament%20Grey?unique=9a870ba"] },
      { color: C('Gold', 'ذهبي', '#C99B26'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/138/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20Gold?unique=ad08510', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/138/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20Gold?unique=ad08510"] },
      { color: C('Cold White', 'أبيض ثلجي', '#f0f8ff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/56/image_1024/PLA%2B%20Filament%20Cold%20White?unique=d21bf17', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/56/image_1024/PLA%2B%20Filament%20Cold%20White?unique=d21bf17"] },
      { color: C('Beige', 'بيج', '#ECCAB0'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/130/image_1024/Bambu%20Lab%20PLA%20Beige?unique=93fbeef', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/130/image_1024/Bambu%20Lab%20PLA%20Beige?unique=93fbeef"] },
      { color: C('Milky White', 'أبيض حليبي', '#fffffd'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/73/image_1024/PLA%2B%20Filament%20Milky%20White?unique=b3c563c', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/73/image_1024/PLA%2B%20Filament%20Milky%20White?unique=b3c563c"] },
      { color: C('White', 'أبيض', '#ffffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/123/image_1024/PLA%2BHS%20Filament%20White?unique=c3895fc', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/123/image_1024/PLA%2BHS%20Filament%20White?unique=c3895fc"] },
    ],
    specs: {"material": "PLA+ High Speed", "temp": "210 - 230 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'petg-plus-hs-filament-esun',
    sku: 'EZ-PETG-HS-001',
    cat: 'petg',
    name: {"en": "PETG+ HS High Speed Filament (eSUN)", "ar": "خيوط PETG+ HS للسرعات العالية (eSUN)"},
    price: 850.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PETG+ High Speed", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High Speed PETG+ filament by eSUN. Provides the chemical resistance and strength of standard PETG but prints at higher speeds.", "ar": "خيوط PETG+ للطباعة عالية السرعة من eSUN. تضمن متانة ومقاومة كيميائية عالية كـ PETG المعتاد مع تدفق أسرع لتقليل زمن الطباعة."},
    variants: [
      { color: C('Solid White', 'أبيض', '#ffffff'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Solid Orange', 'برتقالي', '#ff7f00'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Solid Black', 'أسود', '#1c1a19'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Solid Red', 'أحمر', '#c00000'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Solid Yellow', 'أصفر', '#FBCE2B'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
    ],
    specs: {"material": "PETG+ High Speed", "temp": "230 - 250 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'petg-filament-esun',
    sku: 'EZ-PETG-038',
    cat: 'petg',
    name: {"en": "PETG Filament (eSUN)", "ar": "خيوط PETG الأصلية عالية الوضوح والصلابة (eSUN)"},
    price: 750.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PETG", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality PETG 3D printing material by eSUN. Combines the easy printing of PLA with the durability and chemical resistance of ABS.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من eSUN. تجمع بين سهولة طباعة الـ PLA ومتانة ومقاومة الـ ABS للمواد الكيميائية والعوامل الجوية."},
    variants: [
      { color: C('Natural/Clear', 'شفاف', '#e0e0e0b0'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Solid White', 'أبيض', '#ffffff'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Solid Black', 'أسود', '#1c1a19'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Solid Grey', 'رمادي', '#808080'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Solid Silver', 'فضي', '#c0c0c0'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
    ],
    specs: {"material": "PETG", "temp": "230 - 250 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'abs-plus-filament-esun',
    sku: 'EZ-ABS--013',
    cat: 'abs',
    name: {"en": "ABS+ Filament (eSUN)", "ar": "خيوط ABS+ الأصلية عالية التحمل الحراري (eSUN)"},
    price: 700.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing ABS+", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "Improved ABS+ filament by eSUN. Features lower shrinkage and odor compared to traditional ABS, delivering high heat resistance and impact strength.", "ar": "خيوط ABS+ المحسنة من eSUN. تتميز بمعدل انكماش ورائحة أقل بكثير مقارنة بـ ABS التقليدي، وتتحمل الإجهاد والحرارة المرتفعة."},
    variants: [
      { color: C('Natural/White', 'أبيض', '#ffffff'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Orange', 'برتقالي', '#ff7f00'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/50/image_1024/PLA%2B%20Filament%20Orange?unique=677d0a9', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/50/image_1024/PLA%2B%20Filament%20Orange?unique=677d0a9"] },
      { color: C('Black', 'أسود', '#1c1a19'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/54/image_1024/PLA%2B%20Filament%20Black?unique=7f95a93', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/54/image_1024/PLA%2B%20Filament%20Black?unique=7f95a93"] },
      { color: C('Red', 'أحمر', '#c00000'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/116/image_1024/PLA%2B%20Filament%20%20Red?unique=4994906', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/116/image_1024/PLA%2B%20Filament%20%20Red?unique=4994906"] },
      { color: C('Yellow', 'أصفر', '#FBCE2B'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/129/image_1024/Bambu%20Lab%20PLA%20Yellow?unique=2c5e17d', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/129/image_1024/Bambu%20Lab%20PLA%20Yellow?unique=2c5e17d"] },
      { color: C('Grey', 'رمادي', '#808080'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/120/image_1024/PLA%2B%20Filament%20Grey?unique=9a870ba', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/120/image_1024/PLA%2B%20Filament%20Grey?unique=9a870ba"] },
      { color: C('Blue', 'أزرق', '#1d4ed8'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/114/image_1024/PLA%2B%20Filament%20Blue?unique=094e37c', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/114/image_1024/PLA%2B%20Filament%20Blue?unique=094e37c"] },
      { color: C('Cold White', 'أبيض ثلجي', '#f0f8ff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/56/image_1024/PLA%2B%20Filament%20Cold%20White?unique=d21bf17', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/56/image_1024/PLA%2B%20Filament%20Cold%20White?unique=d21bf17"] },
      { color: C('Fire Engine Red', 'أحمر ناري', '#c00000'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/64/image_1024/PLA%2B%20Filament%20Fire%20Engine%20Red?unique=95d8e82', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/64/image_1024/PLA%2B%20Filament%20Fire%20Engine%20Red?unique=95d8e82"] },
    ],
    specs: {"material": "ABS+", "temp": "230 - 250 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-rock-filament-esun',
    sku: 'EZ-PLA-RCK-001',
    cat: 'pla-plus',
    name: {"en": "PLA-Rock Filament (eSUN)", "ar": "خيوط PLA-Rock بتأثير الصخور (eSUN)"},
    price: 1200.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA Rock", "ar": "خامات طباعة ثلاثية الأبعاد حجرية"},
    blurb: {"en": "Rock-textured PLA filament by eSUN. Mimics the appearance of raw natural stone, perfect for architecture, statues, and historical models.", "ar": "خيوط PLA الرخامية ذات المظهر الصخري من eSUN. تحاكي أشكال وملمس الأحجار الطبيعية، مثالية للمجسمات الأثرية والمعمارية."},
    variants: [
      { color: C('Granite', 'جرانيت حجرى', '#708090'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('Hornfels', 'هورنفيلس داكن', '#555555'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
    ],
    specs: {"material": "PLA Rock", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-uv-filament-esun',
    sku: 'EZ-PLA--010',
    cat: 'pla-plus',
    name: {"en": "PLA-UV Filament (eSUN)", "ar": "خيوط PLA يتغير لونها مع أشعة الشمس UV (eSUN)"},
    price: 1250.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA UV-reactive", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "UV-reactive PLA filament by eSUN. Changes color instantly when exposed to sunlight or UV light source, returning to base color indoors.", "ar": "خيوط تفاعلية مع الأشعة فوق البنفسجية (UV) من eSUN. يتغير لونها فوراً عند التعرض لأشعة الشمس، ويعود للونه الأساسي بمجرد الدخول للمنزل."},
    variants: [
      { color: C('UV Change Orange', 'برتقالي يتغير بالـ UV', '#ffa500'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/88/image_1024/PLA-UV%20Filament%20UV%20Change%20Orange?unique=cc553f0', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/88/image_1024/PLA-UV%20Filament%20UV%20Change%20Orange?unique=cc553f0"] },
      { color: C('UV Change Red', 'أحمر يتغير بالـ UV', '#dc2626'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('UV Change Yellow', 'أصفر يتغير بالـ UV', '#ffff00'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
      { color: C('UV Change Blue', 'أزرق يتغير بالـ UV', '#0000ff'), img: 'enza_trade_collage.png', stock: true, shots: ["enza_trade_collage.png"] },
    ],
    specs: {"material": "PLA UV-reactive", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'asa-plus-filament-esun',
    sku: 'EZ-ASA--017',
    cat: 'asa',
    name: {"en": "ASA+ Filament (eSUN)", "ar": "خيوط ASA+ المقاومة للعوامل الجوية (eSUN)"},
    price: 1400.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing ASA+", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High performance ASA+ filament by eSUN. Specially formulated for weather resistance, UV stability, and high mechanical strength, ideal for outdoor parts.", "ar": "خيوط ASA+ عالية الأداء من eSUN. صممت لتكون مقاومة لأشعة الشمس المباشرة والظروف الجوية المختلفة، مثالية للقطع الميكانيكية الخارجية."},
    variants: [
      { color: C('Black', 'أسود', '#1c1a19'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/54/image_1024/PLA%2B%20Filament%20Black?unique=7f95a93', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/54/image_1024/PLA%2B%20Filament%20Black?unique=7f95a93"] },
      { color: C('Red', 'أحمر', '#c00000'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/116/image_1024/PLA%2B%20Filament%20%20Red?unique=4994906', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/116/image_1024/PLA%2B%20Filament%20%20Red?unique=4994906"] },
      { color: C('Yellow', 'أصفر', '#FBCE2B'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/129/image_1024/Bambu%20Lab%20PLA%20Yellow?unique=2c5e17d', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/129/image_1024/Bambu%20Lab%20PLA%20Yellow?unique=2c5e17d"] },
      { color: C('Grey', 'رمادي', '#808080'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/125/image_1024/ASA%2B%20Filament%20Grey?unique=92270e5', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/125/image_1024/ASA%2B%20Filament%20Grey?unique=92270e5"] },
      { color: C('Blue', 'أزرق', '#1d4ed8'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/114/image_1024/PLA%2B%20Filament%20Blue?unique=094e37c', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/114/image_1024/PLA%2B%20Filament%20Blue?unique=094e37c"] },
      { color: C('Cold White', 'أبيض ثلجي', '#f0f8ff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/124/image_1024/ASA%2B%20Filament%20Cold%20White?unique=f676289', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/124/image_1024/ASA%2B%20Filament%20Cold%20White?unique=f676289"] },
      { color: C('Green', 'أخضر', '#008000'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/117/image_1024/PLA%2B%20Filament%20Green?unique=0d49ddb', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/117/image_1024/PLA%2B%20Filament%20Green?unique=0d49ddb"] },
    ],
    specs: {"material": "ASA+", "temp": "240 - 260 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-plus-285-filament-esun',
    sku: 'EZ-PLA-285-001',
    cat: 'pla-plus',
    name: {"en": "PLA+ Filament 2.85mm (eSUN)", "ar": "خيوط PLA+ الأصلية مقاس 2.85 مم (eSUN)"},
    price: 850.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 2.85mm 3D Printing PLA+", "ar": "خامات طباعة ثلاثية الأبعاد مقاس 2.85 مم"},
    blurb: {"en": "High quality 2.85mm diameter PLA+ filament by eSUN. Perfect for Ultimaker, LulzBot, and other 2.85mm diameter extruder printers.", "ar": "خيوط PLA+ الأصلية بمقاس 2.85 مم من eSUN. مصممة خصيصاً لطابعات Ultimaker وغيرها من الأنظمة التي تعتمد على مقاس 2.85 مم."},
    variants: [
      { color: C('Cold White', 'أبيض ثلجي', '#f0f8ff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/56/image_1024/PLA%2B%20Filament%20Cold%20White?unique=d21bf17', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/56/image_1024/PLA%2B%20Filament%20Cold%20White?unique=d21bf17"] },
      { color: C('White', 'أبيض', '#ffffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/112/image_1024/PLA%2B%20Filament%20White?unique=48ce0da', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/112/image_1024/PLA%2B%20Filament%20White?unique=48ce0da"] },
    ],
    specs: {"material": "PLA+", "temp": "205 - 225 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'eresin-pla-pro-esun',
    sku: 'EZ-ERES-026',
    cat: 'resin',
    name: {"en": "eResin-PLA Pro (eSUN)", "ar": "ريزن PLA برو عالي الدقة (eSUN)"},
    price: 2200.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA-like Resin", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality PLA-like Resin 3D printing material by eSUN. Biocompatible resin made from corn starch, offers high strength, rigidity, and low odor.", "ar": "ريزن PLA الحيوي عالي الدقة من eSUN. مصنوع من نشا الذرة، يتميز بصلابة عالية، تفاصيل دقيقة، ورائحة منخفضة جداً ومناسب للطباعة المكتبية."},
    variants: [
      { color: C('Grey', 'رمادي', '#808080'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/158/image_1024/eResin-PLA%20Pro%20Grey?unique=57b57aa', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/158/image_1024/eResin-PLA%20Pro%20Grey?unique=57b57aa"] },
      { color: C('Black', 'أسود', '#1c1a19'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/159/image_1024/eResin-PLA%20Pro%20black?unique=6c8dc19', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/159/image_1024/eResin-PLA%20Pro%20black?unique=6c8dc19"] },
      { color: C('Beige', 'بيج', '#f5f5dc'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/160/image_1024/eResin-PLA%20Pro%20beige?unique=c8bb415', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/160/image_1024/eResin-PLA%20Pro%20beige?unique=c8bb415"] },
      { color: C('White', 'أبيض', '#ffffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/161/image_1024/eResin-PLA%20Pro%20white?unique=c240acc', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/161/image_1024/eResin-PLA%20Pro%20white?unique=c240acc"] },
      { color: C('Sky Blue', 'سماوي', '#87ceeb'), img: 'resin_collage.png', stock: true, shots: ["resin_collage.png"] },
      { color: C('Clear', 'شفاف', '#e0e0e0'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/178/image_1024/High%20Temperature%20Resin%20Clear?unique=44fd2cd', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/178/image_1024/High%20Temperature%20Resin%20Clear?unique=44fd2cd"] },
    ],
    specs: {"material": "PLA-like Resin", "weight": "1.0 kg", "exposure": "Normal: 2-3s, Bottom: 20-30s", "brand": "eSUN"}
  },
  {
    id: 's300-standard-resin-esun',
    sku: 'EZ-S300-027',
    cat: 'resin',
    name: {"en": "S300 Standard Resin (eSUN)", "ar": "ريزن ستاندرد S300 اقتصادي (eSUN)"},
    price: 1800.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing Standard Resin", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "Budget-friendly standard resin by eSUN. Offers quick printing speed and high success rate, perfect for beginners and prototyping.", "ar": "ريزن S300 الاقتصادي والقياسي من eSUN. يوفر معالجة سريعة ونسبة نجاح طباعة عالية، وهو خيار ممتاز للمبتدئين والنماذج العامة."},
    variants: [
      { color: C('Black', 'أسود', '#1c1a19'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/163/image_1024/S300%20Standard%20Resin%20black?unique=d7edb66', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/163/image_1024/S300%20Standard%20Resin%20black?unique=d7edb66"] },
      { color: C('White', 'أبيض', '#ffffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/164/image_1024/S300%20Standard%20Resin%20White?unique=61e87ad', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/164/image_1024/S300%20Standard%20Resin%20White?unique=61e87ad"] },
      { color: C('Dark Grey', 'رمادي داكن', '#505050'), img: 'resin_collage.png', stock: true, shots: ["resin_collage.png"] },
    ],
    specs: {"material": "Standard Resin", "weight": "1.0 kg", "exposure": "Normal: 2.5-3.5s, Bottom: 25-35s", "brand": "eSUN"}
  },
  {
    id: 'standard-resin-esun',
    sku: 'EZ-RES-STD-001',
    cat: 'resin',
    name: {"en": "Standard Resin (eSUN)", "ar": "ريزن eSUN القياسي (eSUN)"},
    price: 1800.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing Resin", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality Standard Resin 3D printing material by eSUN. Designed for high resolution, low shrinkage, and excellent stability.", "ar": "الريزن القياسي الاحترافي من eSUN. مصمم للحصول على تفاصيل دقيقة ومعدل انكماش منخفض، وثبات أبعاد ممتاز لجميع المجسمات."},
    variants: [
      { color: C('White', 'أبيض', '#ffffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/112/image_1024/PLA%2B%20Filament%20White?unique=48ce0da', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/112/image_1024/PLA%2B%20Filament%20White?unique=48ce0da"] },
      { color: C('Black', 'أسود', '#1c1a19'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/54/image_1024/PLA%2B%20Filament%20Black?unique=7f95a93', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/54/image_1024/PLA%2B%20Filament%20Black?unique=7f95a93"] },
      { color: C('Grey', 'رمادي', '#808080'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/120/image_1024/PLA%2B%20Filament%20Grey?unique=9a870ba', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/120/image_1024/PLA%2B%20Filament%20Grey?unique=9a870ba"] },
      { color: C('Clear', 'شفاف', '#e0e0e0'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/178/image_1024/High%20Temperature%20Resin%20Clear?unique=44fd2cd', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/178/image_1024/High%20Temperature%20Resin%20Clear?unique=44fd2cd"] },
    ],
    specs: {"material": "Standard Resin", "weight": "1.0 kg", "exposure": "Normal: 2-3s, Bottom: 20-30s", "brand": "eSUN"}
  },
  {
    id: 'water-washable-resin-esun',
    sku: 'EZ-RES-WW-001',
    cat: 'resin',
    name: {"en": "Water Washable Resin (eSUN)", "ar": "ريزن قابل للغسيل بالماء القياسي (eSUN)"},
    price: 2000.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing Water Washable Resin", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "Water Washable Resin by eSUN. Can be cleaned directly with water instead of alcohol, safer and easier to clean.", "ar": "ريزن قابل للغسيل بالماء من eSUN. يمكن غسله وتنظيفه مباشرةً بالماء العادي بدلاً من الكحول، ليكون خياراً أكثر أماناً وسهولة للعمل."},
    variants: [
      { color: C('Clear', 'شفاف', '#e0e0e0'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/178/image_1024/High%20Temperature%20Resin%20Clear?unique=44fd2cd', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/178/image_1024/High%20Temperature%20Resin%20Clear?unique=44fd2cd"] },
    ],
    specs: {"material": "Water Washable Resin", "weight": "1.0 kg", "exposure": "Normal: 2-3s, Bottom: 20-30s", "brand": "eSUN"}
  },
  {
    id: 'w300-16k-water-washable-resin-esun',
    sku: 'EZ-W300-028',
    cat: 'resin',
    name: {"en": "W300 16K Water Washable Resin (eSUN)", "ar": "ريزن قابل للغسيل بالماء W300 16K (eSUN)"},
    price: 2200.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing Water Washable Resin", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "W300 16K Water Washable Resin by eSUN. Specifically formulated for 8K and 16K ultra-high resolution resin printers, easily washable in water.", "ar": "ريزن W300 مخصص لشاشات 8K و 16K فائقة الدقة من eSUN. يعطي تفاصيل مجهرية ويسهل تنظيفه بالماء مباشرة."},
    variants: [
      { color: C('Grey', 'رمادي', '#808080'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/166/image_1024/W300%2016K%20Water%20Washable%20Resin%20grey?unique=794ac8a', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/166/image_1024/W300%2016K%20Water%20Washable%20Resin%20grey?unique=794ac8a"] },
      { color: C('Beige', 'بيج', '#f5f5dc'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/167/image_1024/W300%2016K%20Water%20Washable%20Resin%20beige?unique=d90f418', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/167/image_1024/W300%2016K%20Water%20Washable%20Resin%20beige?unique=d90f418"] },
      { color: C('Brown', 'بني', '#5c4033'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/168/image_1024/W300%2016K%20Water%20Washable%20Resin%20brown?unique=047a33b', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/168/image_1024/W300%2016K%20Water%20Washable%20Resin%20brown?unique=047a33b"] },
      { color: C('Black', 'أسود', '#1c1a19'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/169/image_1024/W300%2016K%20Water%20Washable%20Resin%20black?unique=40b77f9', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/169/image_1024/W300%2016K%20Water%20Washable%20Resin%20black?unique=40b77f9"] },
      { color: C('White', 'أبيض', '#ffffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/170/image_1024/W300%2016K%20Water%20Washable%20Resin%20white?unique=a1099bd', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/170/image_1024/W300%2016K%20Water%20Washable%20Resin%20white?unique=a1099bd"] },
    ],
    specs: {"material": "Water Washable Resin", "weight": "1.0 kg", "exposure": "Normal: 2-3s, Bottom: 20-30s", "brand": "eSUN"}
  },
  {
    id: 'hard-tough-resin-esun',
    sku: 'EZ-HARD-029',
    cat: 'resin',
    name: {"en": "Hard-Tough Resin (eSUN)", "ar": "ريزن صلب وقوي مقاوم للصدمات (eSUN)"},
    price: 3500.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing Tough Resin", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "Industrial-grade tough resin by eSUN. High impact resistance, tensile strength, and toughness, ideal for printing functional mechanical gears.", "ar": "الريزن الهندسي شديد التحمل والصدمات من eSUN. ممتاز للتروس والقطع الميكانيكية التي تحتاج مقاومة عالية للكسر والضغط."},
    variants: [
      { color: C('White', 'أبيض', '#ffffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/171/image_1024/Hard%20-Tough%20Resin%20white?unique=680752c', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/171/image_1024/Hard%20-Tough%20Resin%20white?unique=680752c"] },
      { color: C('Black', 'أسود', '#1c1a19'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/172/image_1024/Hard%20-Tough%20Resin%20black?unique=2dbe054', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/172/image_1024/Hard%20-Tough%20Resin%20black?unique=2dbe054"] },
      { color: C('Grey', 'رمادي', '#808080'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/173/image_1024/Hard%20-Tough%20Resin%20grey?unique=f130605', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/173/image_1024/Hard%20-Tough%20Resin%20grey?unique=f130605"] },
    ],
    specs: {"material": "Tough Resin", "weight": "1.0 kg", "exposure": "Normal: 3-4s, Bottom: 30-40s", "brand": "eSUN"}
  },
  {
    id: 'abs-like-odor-lite-resin-esun',
    sku: 'EZ-ABS--030',
    cat: 'resin',
    name: {"en": "ABS-like Odor Lite Resin (eSUN)", "ar": "ريزن كالأكريليك قليل الرائحة (eSUN)"},
    price: 2400.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing ABS-like Resin", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "ABS-like low odor resin by eSUN. Provides high strength and toughness similar to ABS, with significantly lower odor for safe workspace usage.", "ar": "ريزن منخفض الرائحة يماثل خصائص ABS من eSUN. يجمع بين المتانة العالية والتحمل مع انبعاث رائحة أقل بكثير أثناء المعالجة والطباعة."},
    variants: [
      { color: C('Black', 'أسود', '#1c1a19'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/174/image_1024/ABS%20-like%20odor%20Lite%20black?unique=9758021', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/174/image_1024/ABS%20-like%20odor%20Lite%20black?unique=9758021"] },
      { color: C('White', 'أبيض', '#ffffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/175/image_1024/ABS%20-like%20odor%20Lite%20white?unique=f8589bc', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/175/image_1024/ABS%20-like%20odor%20Lite%20white?unique=f8589bc"] },
      { color: C('Grey', 'رمادي', '#808080'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/176/image_1024/ABS%20-like%20odor%20Lite%20grey?unique=d5020b9', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/176/image_1024/ABS%20-like%20odor%20Lite%20grey?unique=d5020b9"] },
    ],
    specs: {"material": "ABS-like Resin", "weight": "1.0 kg", "exposure": "Normal: 2.5-3.5s, Bottom: 25-35s", "brand": "eSUN"}
  },
  {
    id: 'pa-100-nylon-like-resin-esun',
    sku: 'EZ-PA-1-031',
    cat: 'resin',
    name: {"en": "PA 100 Nylon-Like Resin (eSUN)", "ar": "ريزن نايلون مرن شديد التحمل PA 100 (eSUN)"},
    price: 5000.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing Nylon-like Resin", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "Nylon-like engineering resin by eSUN. High elongation at break and flexural modulus, perfect for durable engineering functional models.", "ar": "ريزن نايلون الهندسي المرن من eSUN. يمتاز بمرونة فائقة وقدرة على الانحناء والتحمل دون كسر، للنماذج الهندسية عالية الموثوقية."},
    variants: [
      { color: C('Grey', 'رمادي', '#808080'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/177/image_1024/PA%20100%20Nylon-Like%20Resin%20grey?unique=eecec25', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/177/image_1024/PA%20100%20Nylon-Like%20Resin%20grey?unique=eecec25"] },
    ],
    specs: {"material": "Nylon-like Resin", "weight": "1.0 kg", "exposure": "Normal: 3.5-4.5s, Bottom: 35-45s", "brand": "eSUN"}
  },
  {
    id: 'high-temperature-resin-esun',
    sku: 'EZ-HIGH-032',
    cat: 'resin',
    name: {"en": "High Temperature Resin (eSUN)", "ar": "ريزن مقاوم للحرارة العالية (eSUN)"},
    price: 3900.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing High Temp Resin", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High temperature resistant resin by eSUN. Withstands heat up to 120°C, suitable for high-temperature engineering prototypes and mold tools.", "ar": "ريزن مقاوم للحرارة العالية حتى 120 درجة مئوية من eSUN. ممتاز لصناعة القوالب الهندسية وقطع الغيار التي تتعرض للحرارة العالية."},
    variants: [
      { color: C('Transparent', 'شفاف', '#e0e0e0'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/182/image_1024/SG100%20Surgical%20Guide%20Resin%20Transparent?unique=9b54966', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/182/image_1024/SG100%20Surgical%20Guide%20Resin%20Transparent?unique=9b54966"] },
    ],
    specs: {"material": "High Temp Resin", "weight": "1.0 kg", "exposure": "Normal: 3-4s, Bottom: 30-40s", "brand": "eSUN"}
  },
  {
    id: 'bambu-lab-pla-plus',
    sku: 'EZ-BAMB-018',
    cat: 'bambu',
    name: {"en": "Bambu Lab PLA+", "ar": "بامبو لاب PLA+ الأصلي"},
    price: 900.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA+", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality PLA+ 3D printing material by Bambu Lab. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من Bambu Lab. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Jade White', 'أبيض جاد', '#e3ece9'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/126/image_1024/Bambu%20Lab%20PLA%20jade%20white?unique=52024f7', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/126/image_1024/Bambu%20Lab%20PLA%20jade%20white?unique=52024f7"] },
      { color: C('Yellow', 'أصفر', '#ffff00'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/129/image_1024/Bambu%20Lab%20PLA%20Yellow?unique=2c5e17d', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/129/image_1024/Bambu%20Lab%20PLA%20Yellow?unique=2c5e17d"] },
      { color: C('Beige', 'بيج', '#f5f5dc'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/130/image_1024/Bambu%20Lab%20PLA%20Beige?unique=93fbeef', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/130/image_1024/Bambu%20Lab%20PLA%20Beige?unique=93fbeef"] },
      { color: C('Mistletoe green', 'أخضر مستلتو', '#224e3a'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/131/image_1024/Bambu%20Lab%20PLA%20Mistletoe%20green?unique=ab5d39c', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/131/image_1024/Bambu%20Lab%20PLA%20Mistletoe%20green?unique=ab5d39c"] },
      { color: C('Hot Pink', 'فوشيا', '#ff69b4'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/132/image_1024/Bambu%20Lab%20PLA%20Hot%20bink?unique=164135d', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/132/image_1024/Bambu%20Lab%20PLA%20Hot%20bink?unique=164135d"] },
      { color: C('Magenta', 'أرجواني (ماجنتا)', '#d80073'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/133/image_1024/Bambu%20Lab%20PLA%20Magenta?unique=6c13261', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/133/image_1024/Bambu%20Lab%20PLA%20Magenta?unique=6c13261"] },
      { color: C('Maroon Red', 'نبيتي', '#800000'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/134/image_1024/Bambu%20Lab%20PLA%20Maroon%20Red?unique=7255568', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/134/image_1024/Bambu%20Lab%20PLA%20Maroon%20Red?unique=7255568"] },
      { color: C('Bronze', 'برونز', '#cd7f32'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/135/image_1024/Bambu%20Lab%20PLA%20Bronze?unique=cc24b9f', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/135/image_1024/Bambu%20Lab%20PLA%20Bronze?unique=cc24b9f"] },
      { color: C('Turquoise', 'فيروزي', '#40e0d0'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/136/image_1024/Bambu%20Lab%20PLA%20Turquoise?unique=94ce49d', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/136/image_1024/Bambu%20Lab%20PLA%20Turquoise?unique=94ce49d"] },
      { color: C('Orange', 'برتقالي', '#ffa500'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/137/image_1024/Bambu%20Lab%20PLA%20Orang?unique=2963510', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/137/image_1024/Bambu%20Lab%20PLA%20Orang?unique=2963510"] },
    ],
    specs: {"material": "PLA+", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "Bambu Lab"}
  },
  {
    id: 'bambu-lab-pla-silk-plus',
    sku: 'EZ-BAMB-019',
    cat: 'bambu',
    name: {"en": "Bambu Lab PLA Silk+", "ar": "بامبو لاب PLA حرير"},
    price: 1200.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA Silk+", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality PLA Silk+ 3D printing material by Bambu Lab. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من Bambu Lab. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Gold', 'ذهبي', '#ffd700'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/138/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20Gold?unique=ad08510', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/138/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20Gold?unique=ad08510"] },
      { color: C('Silver', 'فضي', '#c0c0c0'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/139/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20Silver?unique=a10ffce', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/139/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20Silver?unique=a10ffce"] },
      { color: C('Mint', 'نعناعي', '#3eb489'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/140/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20Mint?unique=80706f5', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/140/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20Mint?unique=80706f5"] },
      { color: C('Pink', 'وردي', '#ffc0cb'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/141/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20pink?unique=f20da14', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/141/image_1024/Bambu%20Lab%20PLA%20Silk%2B%20pink?unique=f20da14"] },
    ],
    specs: {"material": "PLA Silk+", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "Bambu Lab"}
  },
  {
    id: 'bambu-lab-pla-silk-multi-color',
    sku: 'EZ-BAMB-020',
    cat: 'bambu',
    name: {"en": "Bambu Lab PLA Silk Multi-color", "ar": "بامبو لاب PLA حرير متعدد الألوان"},
    price: 1400.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA Silk Multi-color", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality PLA Silk Multi-color 3D printing material by Bambu Lab. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من Bambu Lab. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Dawn Radiance', 'فجر متألق', 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/142/image_1024/Bambu%20Lab%20pla%20Silk%20Multi%20color%20Dawn%20Radiance?unique=7c41728', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/142/image_1024/Bambu%20Lab%20pla%20Silk%20Multi%20color%20Dawn%20Radiance?unique=7c41728"] },
      { color: C('Blue Hawaii', 'أزرق هاواي', 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/143/image_1024/Bambu%20Lab%20pla%20Silk%20Multi%20color%20Blue%20Hawaii?unique=ad84bc1', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/143/image_1024/Bambu%20Lab%20pla%20Silk%20Multi%20color%20Blue%20Hawaii?unique=ad84bc1"] },
      { color: C('South Beach', 'ساوث بيتش', 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/144/image_1024/Bambu%20Lab%20pla%20Silk%20Multi%20color%20South%20Beach?unique=d9f586c', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/144/image_1024/Bambu%20Lab%20pla%20Silk%20Multi%20color%20South%20Beach?unique=d9f586c"] },
    ],
    specs: {"material": "PLA Silk Multi-color", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "Bambu Lab"}
  },
  {
    id: 'bambu-lab-pla-translucent',
    sku: 'EZ-BAMB-021',
    cat: 'bambu',
    name: {"en": "Bambu Lab PLA Translucent", "ar": "بامبو لاب PLA شفاف"},
    price: 1300.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA Translucent", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality PLA Translucent 3D printing material by Bambu Lab. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من Bambu Lab. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Ice Blue', 'أزرق جليدي', '#728f9e'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/145/image_1024/Bambu%20Lab%20PLA%20Translucent%20Ice%20Blue?unique=04a33b8', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/145/image_1024/Bambu%20Lab%20PLA%20Translucent%20Ice%20Blue?unique=04a33b8"] },
    ],
    specs: {"material": "PLA Translucent", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "Bambu Lab"}
  },
  {
    id: 'bambu-lab-pla-sparkle',
    sku: 'EZ-BAMB-022',
    cat: 'bambu',
    name: {"en": "Bambu Lab PLA Sparkle", "ar": "بامبو لاب PLA براق"},
    price: 1600.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA Sparkle", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality PLA Sparkle 3D printing material by Bambu Lab. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من Bambu Lab. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Royal Purple', 'بنفسجي ملكي', '#7851a9'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/146/image_1024/Bambu%20Lab%20PLA%20Sparkle%20Royal%20Purple?unique=34b9982', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/146/image_1024/Bambu%20Lab%20PLA%20Sparkle%20Royal%20Purple?unique=34b9982"] },
      { color: C('Alpine Green', 'أخضر ألباين', '#005f56'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/147/image_1024/Bambu%20Lab%20PLA%20Sparkle%20Alpine%20Green?unique=07f561e', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/147/image_1024/Bambu%20Lab%20PLA%20Sparkle%20Alpine%20Green?unique=07f561e"] },
      { color: C('Slate Gray', 'رمادي سليت', '#708090'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/148/image_1024/Bambu%20Lab%20PLA%20Sparkle%20Slate%20gray?unique=61bec04', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/148/image_1024/Bambu%20Lab%20PLA%20Sparkle%20Slate%20gray?unique=61bec04"] },
      { color: C('Classic Gold', 'ذهبي كلاسيكي', '#d4af37'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/149/image_1024/Bambu%20Lab%20PLA%20Sparkle%20Classic%20Gold?unique=b48843b', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/149/image_1024/Bambu%20Lab%20PLA%20Sparkle%20Classic%20Gold?unique=b48843b"] },
    ],
    specs: {"material": "PLA Sparkle", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "Bambu Lab"}
  },
  {
    id: 'bambu-lab-pla-cf',
    sku: 'EZ-BAMB-023',
    cat: 'bambu',
    name: {"en": "Bambu Lab PLA-CF", "ar": "بامبو لاب PLA كاربون فايبر"},
    price: 1500.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA-CF Carbon Fiber", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality PLA-CF Carbon Fiber 3D printing material by Bambu Lab. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من Bambu Lab. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Black', 'أسود', '#1c1a19'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/150/image_1024/Bambu%20Lab%20PLA-%20CF%20Black?unique=a95a06f', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/150/image_1024/Bambu%20Lab%20PLA-%20CF%20Black?unique=a95a06f"] },
    ],
    specs: {"material": "PLA-CF Carbon Fiber", "temp": "200 - 230 °C", "weight": "1.0 kg", "brand": "Bambu Lab"}
  },
  {
    id: 'bambu-lab-asa',
    sku: 'EZ-BAMB-024',
    cat: 'bambu',
    name: {"en": "Bambu Lab ASA", "ar": "بامبو لاب ASA مقاوم للعوامل الجوية"},
    price: 1750.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing ASA", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality ASA 3D printing material by Bambu Lab. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من Bambu Lab. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Black', 'أسود', '#1c1a19'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/155/image_1024/Bambu%20Lab%20ASA%20Black?unique=d2935cb', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/155/image_1024/Bambu%20Lab%20ASA%20Black?unique=d2935cb"] },
      { color: C('White', 'أبيض', '#ffffff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/156/image_1024/Bambu%20Lab%20ASA%20white?unique=aaf6f29', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/156/image_1024/Bambu%20Lab%20ASA%20white?unique=aaf6f29"] },
    ],
    specs: {"material": "ASA", "temp": "240 - 270 °C", "weight": "1.0 kg", "brand": "Bambu Lab"}
  },
  {
    id: 'bambu-lab-ppa-cf',
    sku: 'EZ-BAMB-025',
    cat: 'bambu',
    name: {"en": "Bambu Lab PPA-CF", "ar": "بامبو لاب PPA كاربون فايبر"},
    price: 9000.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PPA-CF High Temp", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality PPA-CF High Temp 3D printing material by Bambu Lab. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من Bambu Lab. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Black', 'أسود', '#1c1a19'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/157/image_1024/Bambu%20Lab%20PPA-%20CF%20Black?unique=4fc2b19', stock: true, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/157/image_1024/Bambu%20Lab%20PPA-%20CF%20Black?unique=4fc2b19"] },
    ],
    specs: {"material": "PPA-CF High Temp", "temp": "280 - 320 °C", "weight": "1.0 kg", "brand": "Bambu Lab"}
  },
  {
    id: 'pla-marble-filament-esun',
    sku: 'EZ-PLA--007',
    cat: 'pla-plus',
    name: {"en": "PLA-Marble Filament (eSUN)", "ar": "خيوط PLA رخامي بنقوش حجرية (eSUN)"},
    price: 1500.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA Marble", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality PLA Marble 3D printing material by eSUN. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من eSUN. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Grey', 'رمادي', '#808080'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/84/image_1024/PLA-Marble%20Filament%20Grey?unique=04cd7d8', stock: false, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/84/image_1024/PLA-Marble%20Filament%20Grey?unique=04cd7d8"] },
    ],
    specs: {"material": "PLA Marble", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pla-magic-filament-esun',
    sku: 'EZ-PLA--008',
    cat: 'pla-plus',
    name: {"en": "PLA-Magic Filament (eSUN)", "ar": "خيوط PLA ماجيك بتغيير الألوان (eSUN)"},
    price: 1400.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PLA Magic", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality PLA Magic 3D printing material by eSUN. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من eSUN. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Dark Twinkling Blue', 'أزرق لامع داكن', '#0b1d3a'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/85/image_1024/PLA-Magic%20Filament%20Dark%20Twinkling%20Blue?unique=409680e', stock: false, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/85/image_1024/PLA-Magic%20Filament%20Dark%20Twinkling%20Blue?unique=409680e"] },
      { color: C('Dark Twinkling Purple', 'بنفسجي لامع داكن', '#2a0d3a'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/86/image_1024/PLA-Magic%20Filament%20Dark%20Twinkling%20Purple?unique=ae09f08', stock: false, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/86/image_1024/PLA-Magic%20Filament%20Dark%20Twinkling%20Purple?unique=ae09f08"] },
    ],
    specs: {"material": "PLA Magic", "temp": "190 - 220 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'abs-fr-flame-retardant-filament-esun',
    sku: 'EZ-ABS--012',
    cat: 'abs',
    name: {"en": "ABS-FR Flame Retardant Filament (eSUN)", "ar": "خيوط ABS-FR مضادة للاشتعال صناعية (eSUN)"},
    price: 1850.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing ABS Flame Retardant", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality ABS Flame Retardant 3D printing material by eSUN. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من eSUN. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Black', 'أسود', '#1c1a19'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/99/image_1024/ABS-FR%20Filament%20Black?unique=d54924b', stock: false, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/99/image_1024/ABS-FR%20Filament%20Black?unique=d54924b"] },
    ],
    specs: {"material": "ABS Flame Retardant", "temp": "240 - 260 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'abs-gf-glass-fiber-filament-esun',
    sku: 'EZ-ABS--015',
    cat: 'abs',
    name: {"en": "ABS-GF Glass Fiber Filament (eSUN)", "ar": "خيوط ABS-GF المعززة بالألياف الزجاجية (eSUN)"},
    price: 1600.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing ABS-GF Glass Fiber", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality ABS-GF Glass Fiber 3D printing material by eSUN. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من eSUN. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Black', 'أسود', '#1c1a19'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/105/image_1024/ABS-GF%20Filament%20Black?unique=d560efe', stock: false, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/105/image_1024/ABS-GF%20Filament%20Black?unique=d560efe"] },
      { color: C('Cold White', 'أبيض ثلجي', '#f0f8ff'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/106/image_1024/ABS-GF%20Filament%20Cold%20White?unique=6761b71', stock: false, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/106/image_1024/ABS-GF%20Filament%20Cold%20White?unique=6761b71"] },
    ],
    specs: {"material": "ABS-GF Glass Fiber", "temp": "240 - 260 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'pa-cf-carbon-fiber-filament-esun',
    sku: 'EZ-PA-C-016',
    cat: 'pla-cf',
    name: {"en": "PA-CF Carbon Fiber Filament (eSUN)", "ar": "خيوط نايلون PA-CF شديدة الصلابة صناعية (eSUN)"},
    price: 2750.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing PA-CF Carbon Fiber", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality PA-CF Carbon Fiber 3D printing material by eSUN. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من eSUN. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Black', 'أسود', '#1c1a19'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/107/image_1024/PA-CF%20Filament%20Black?unique=7b1d560', stock: false, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/107/image_1024/PA-CF%20Filament%20Black?unique=7b1d560"] },
    ],
    specs: {"material": "PA-CF Carbon Fiber", "temp": "260 - 290 °C", "weight": "1.0 kg", "brand": "eSUN"}
  },
  {
    id: 'castable-resin-for-jewelry-esun',
    sku: 'EZ-CAST-033',
    cat: 'resin',
    name: {"en": "Castable Resin For Jewelry (eSUN)", "ar": "ريزن قابل للصب وصنع المجوهرات (eSUN)"},
    price: 15000.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing Castable Wax Resin", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality Castable Wax Resin 3D printing material by eSUN. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من eSUN. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Green', 'أخضر', '#008000'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/179/image_1024/Castable%20Resin%20For%20Jewelry%20green?unique=78e2ad1', stock: false, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/179/image_1024/Castable%20Resin%20For%20Jewelry%20green?unique=78e2ad1"] },
    ],
    specs: {"material": "Castable Wax Resin", "weight": "1.0 kg", "exposure": "Normal: 3-5s, Bottom: 30-50s", "brand": "eSUN"}
  },
  {
    id: 'tc-100-temporary-dental-resin-esun',
    sku: 'EZ-TC-1-034',
    cat: 'resin',
    name: {"en": "TC 100 Temporary Dental Resin (eSUN)", "ar": "ريزن أسنان مؤقت TC 100 طبي (eSUN)"},
    price: 8000.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing Bio-compatible Temporary Resin", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality Bio-compatible Temporary Resin 3D printing material by eSUN. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من eSUN. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('A1 (Dental Shade)', 'درجة A1 أسنان', '#f1ece1'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/180/image_1024/TC%20100%20Temporary%20Resin%20A1?unique=d1ba394', stock: false, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/180/image_1024/TC%20100%20Temporary%20Resin%20A1?unique=d1ba394"] },
      { color: C('A2 (Dental Shade)', 'درجة A2 أسنان', '#eedec7'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/181/image_1024/TC%20100%20Temporary%20Resin%20A2?unique=15fe044', stock: false, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/181/image_1024/TC%20100%20Temporary%20Resin%20A2?unique=15fe044"] },
    ],
    specs: {"material": "Bio-compatible Temporary Resin", "weight": "1.0 kg", "exposure": "Normal: 2.5-3.5s, Bottom: 25-35s", "brand": "eSUN"}
  },
  {
    id: 'sg100-surgical-guide-dental-resin-esun',
    sku: 'EZ-SG10-035',
    cat: 'resin',
    name: {"en": "SG100 Surgical Guide Dental Resin (eSUN)", "ar": "ريزن دليل جراحي طبي شفاف SG100 (eSUN)"},
    price: 9000.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing Bio-compatible Surgical Guide Resin", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality Bio-compatible Surgical Guide Resin 3D printing material by eSUN. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من eSUN. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Transparent', 'شفاف', '#e0e0e0'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/182/image_1024/SG100%20Surgical%20Guide%20Resin%20Transparent?unique=9b54966', stock: false, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/182/image_1024/SG100%20Surgical%20Guide%20Resin%20Transparent?unique=9b54966"] },
    ],
    specs: {"material": "Bio-compatible Surgical Guide Resin", "weight": "1.0 kg", "exposure": "Normal: 2-3s, Bottom: 20-30s", "brand": "eSUN"}
  },
  {
    id: 'dc100-dental-cast-resin-esun',
    sku: 'EZ-DC10-036',
    cat: 'resin',
    name: {"en": "DC100 Dental Cast Resin (eSUN)", "ar": "ريزن صب الأسنان DC100 طبي (eSUN)"},
    price: 10000.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing Bio-compatible Castable Resin", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality Bio-compatible Castable Resin 3D printing material by eSUN. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من eSUN. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Green', 'أخضر', '#008000'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/183/image_1024/DC100%20Dental%20Cast%20Resin%20green?unique=992c7cb', stock: false, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/183/image_1024/DC100%20Dental%20Cast%20Resin%20green?unique=992c7cb"] },
    ],
    specs: {"material": "Bio-compatible Castable Resin", "weight": "1.0 kg", "exposure": "Normal: 3-4s, Bottom: 30-40s", "brand": "eSUN"}
  },
  {
    id: 'dental-mold-resin-esun',
    sku: 'EZ-DENT-037',
    cat: 'resin',
    name: {"en": "Dental Mold Resin (eSUN)", "ar": "ريزن قوالب ونماذج الأسنان طبي (eSUN)"},
    price: 3500.0,
    compareAt: null,
    featured: false,
    tagline: {"en": "Original 3D Printing Bio-compatible Model Resin", "ar": "خامات طباعة ثلاثية الأبعاد أصلية"},
    blurb: {"en": "High quality Bio-compatible Model Resin 3D printing material by eSUN. Engineered for dimensional accuracy, smooth finishes, and robust physical performance.", "ar": "خامات طباعة ثلاثية الأبعاد عالية الجودة من eSUN. تم تصميمها لتحقيق دقة أبعاد ممتازة، ولمسة نهائية ناعمة، وأداء وظيفي قوي."},
    variants: [
      { color: C('Beige', 'بيج', '#f5f5dc'), img: 'https://enza-trade-co.odoo.com/web/image/product.product/184/image_1024/Dental%20Mold%20Resin%20beige?unique=0397ece', stock: false, shots: ["https://enza-trade-co.odoo.com/web/image/product.product/184/image_1024/Dental%20Mold%20Resin%20beige?unique=0397ece"] },
    ],
    specs: {"material": "Bio-compatible Model Resin", "weight": "1.0 kg", "exposure": "Normal: 2.5-3.5s, Bottom: 25-35s", "brand": "eSUN"}
  }
];

const GOVERNORATES = [
  "6th of October",
  "Alexandria",
  "Aswan",
  "Asyut",
  "Beheira",
  "Beni Suef",
  "Cairo",
  "Dakahlia",
  "Damietta",
  "Fayoum",
  "Gharbia",
  "Giza",
  "Helwan",
  "Ismailia",
  "Kafr El Sheikh",
  "Luxor",
  "Matrouh",
  "Minya",
  "Monufia",
  "New Valley",
  "North Sinai",
  "Port Said",
  "Qalyubia",
  "Qena",
  "Red Sea",
  "Sharqia",
  "Sohag",
  "South Sinai",
  "Suez"
];

const GOV_AR = {
  "6th of October": "السادس من أكتوبر",
  "Alexandria": "الإسكندرية",
  "Aswan": "أسوان",
  "Asyut": "أسيوط",
  "Beheira": "البحيرة",
  "Beni Suef": "بني سويف",
  "Cairo": "القاهرة",
  "Dakahlia": "الدقهلية",
  "Damietta": "دمياط",
  "Fayoum": "الفيوم",
  "Gharbia": "الغربية",
  "Giza": "الجيزة",
  "Helwan": "حلوان",
  "Ismailia": "الإسماعيلية",
  "Kafr El Sheikh": "كفر الشيخ",
  "Luxor": "الأقصر",
  "Matrouh": "مطروح",
  "Minya": "المنيا",
  "Monufia": "المنوفية",
  "New Valley": "الوادي الجديد",
  "North Sinai": "شمال سيناء",
  "Port Said": "بورسعيد",
  "Qalyubia": "القليوبية",
  "Qena": "قنا",
  "Red Sea": "البحر الأحمر",
  "Sharqia": "الشرقية",
  "Sohag": "سوهاج",
  "South Sinai": "جنوب سيناء",
  "Suez": "السويس"
};

const SHIP_RATES = {
  "Cairo": 50,
  "Giza": 50,
  "Alexandria": 60,
  "Qalyubia": 55,
  "Helwan": 50,
  "6th of October": 50,
  "Sharqia": 65,
  "Dakahlia": 65,
  "Beheira": 65,
  "Gharbia": 65,
  "Monufia": 65,
  "Fayoum": 70,
  "Beni Suef": 70,
  "Minya": 75,
  "Asyut": 75,
  "Sohag": 80,
  "Qena": 85,
  "Luxor": 90,
  "Aswan": 95,
  "Suez": 65,
  "Ismailia": 65,
  "Port Said": 65,
  "Damietta": 65,
  "Kafr El Sheikh": 65,
  "Matrouh": 100,
  "New Valley": 110,
  "Red Sea": 90,
  "North Sinai": 100,
  "South Sinai": 100
};

const SITE_CONTENT = {
  "announce": {
    "en": "🚀 Original eSUN & Bambu Lab Materials · Shipping across all Egypt · Cash on Delivery",
    "ar": "🚀 خامات أصلية 100% من eSUN و Bambu Lab · شحن لجميع المحافظات · الدفع عند الاستلام"
  },
  "marquee": [
    {
      "en": "Premium 3D Filaments & Resins",
      "ar": "خيوط وريزن ثلاثي الأبعاد احترافي"
    },
    {
      "en": "Original eSUN & Bambu Lab Egypt",
      "ar": "خامات أصلية 100% من eSUN و Bambu Lab"
    },
    {
      "en": "Cash On Delivery",
      "ar": "الدفع عند الاستلام"
    },
    {
      "en": "Fast Shipping to All Governorates",
      "ar": "شحن سريع لجميع محافظات مصر"
    },
    {
      "en": "High Strength & Dimensional Accuracy",
      "ar": "صلابة فائقة ودقة أبعاد ممتازة"
    }
  ],
  "hero": {
    "eyebrow": {
      "en": "Premium 3D Printing Materials in Egypt",
      "ar": "خامات طباعة ثلاثية الأبعاد أصلية بمصر"
    },
    "title": {
      "en": "Precision 3D Materials",
      "ar": "خامات طباعة ثلاثية الأبعاد بدقة احترافية"
    },
    "lede": {
      "en": "Imported original filaments and resins from world-leading brands eSUN & Bambu Lab. Engineered for smooth finishes, high strength, and reliability.",
      "ar": "خيوط وريزن أصلية 100% مستوردة من كبرى الماركات eSUN و Bambu Lab بمصر. مصممة لأعلى دقة أبعاد، ألوان رائعة، ومتانة استثنائية."
    },
    "image": "logo.png?v=3",
    "primaryLabel": {
      "en": "Shop the catalog",
      "ar": "تصفح المنتجات"
    },
    "primaryHref": "shop",
    "secondaryLabel": {
      "en": "Our story",
      "ar": "عن إنزا تريد"
    },
    "secondaryHref": "about"
  },
  "values": [
    {
      "icon": "cash",
      "h": {
        "en": "Pay on receipt",
        "ar": "ادفع عند الاستلام"
      },
      "p": {
        "en": "No advanced deposit required. Pay cash only when your items arrive.",
        "ar": "من غير أي مقدم أو دفع مسبق. بتدفع كاش للمندوب لما الأوردر يوصلك لحد باب البيت."
      }
    },
    {
      "icon": "truck",
      "h": {
        "en": "Fast doorstep delivery",
        "ar": "توصيل سريع لكل المحافظات"
      },
      "p": {
        "en": "We ship directly to your address within 2 to 4 business days, Egypt-wide.",
        "ar": "بنشحن مع شركة شحن سريعة وموثوقة — بيوصلك الأوردر من ٢ لـ ٤ أيام عمل لكل مصر."
      }
    },
    {
      "icon": "chat",
      "h": {
        "en": "Easy checkout on WhatsApp",
        "ar": "طلب سهل على واتساب"
      },
      "p": {
        "en": "Submit your cart to WhatsApp. Our team will confirm everything instantly.",
        "ar": "ضيف المنتجات للسلة واطلب بضغطة زرار على واتساب، وفريقنا هيأكد معاك الشحن على طول."
      }
    }
  ],
  "editHead": {
    "eyebrow": {
      "en": "Highly Recommended",
      "ar": "ترشيحاتنا لك"
    },
    "title": {
      "en": "Professional-grade materials",
      "ar": "خامات يفضلها المحترفون"
    },
    "viewAll": {
      "en": "View all",
      "ar": "عرض كل الخامات"
    }
  },
  "gift": {
    "eyebrow": {
      "en": "Premium 3D Resins",
      "ar": "ريزن 3D ثلاثي الأبعاد"
    },
    "title": {
      "en": "Ultra-Detail Resins by eSUN",
      "ar": "ريزن احترافي لأدق التفاصيل"
    },
    "lede": {
      "en": "Get smooth surfaces, low shrinkage, and fast curing with eSUN resins. Perfect for functional prototypes, miniatures, jewelry, and dental models.",
      "ar": "احصل على تفاصيل مذهلة، سطح ناعم، ومعالجة فائقة السرعة مع مجموعة ريزن eSUN الأصلية. مثالية للمجسمات، المجوهرات، ونماذج طب الأسنان."
    },
    "button": {
      "en": "Shop Resins",
      "ar": "تسوق الريزن الآن"
    },
    "buttonHref": "shop/resin",
    "image": "image (33).png"
  },
  "quote": {
    "text": {
      "en": "“Quality materials are the foundation of any great 3D print. We bring the best to Egyptian creators.”",
      "ar": "«الخامة الممتازة هي أساس الطباعة الناجحة. نوفر لك الجودة التي يستحقها عملك.»"
    },
    "button": {
      "en": "About Enza Trade",
      "ar": "عن إنزا تريد"
    },
    "buttonHref": "about"
  },
  "contact": {
    "eyebrow": {
      "en": "Need expert help?",
      "ar": "محتاج مساعدة فنية؟"
    },
    "title": {
      "en": "Chat with our 3D experts",
      "ar": "تواصل مع خبراء الطباعة لدينا"
    },
    "lede": {
      "en": "Questions about material compatibility, temperature settings, or wholesale pricing? We are one message away.",
      "ar": "عندك أي استفسار بخصوص توافق الخامات، درجات الحرارة المناسبة، أو أسعار الجملة؟ تواصل معنا الآن."
    },
    "button": {
      "en": "Message on WhatsApp",
      "ar": "تواصل معنا عبر واتساب"
    }
  },
  "about": {
    "heroEyebrow": {
      "en": "Our Story",
      "ar": "من نحن"
    },
    "heroTitle": {
      "en": "About Enza Trade",
      "ar": "عن إنزا تريد"
    },
    "heroLede": {
      "en": "Egypt's premier destination for original, professional 3D printing filaments and resins.",
      "ar": "المورد الرائد في مصر لأجود خامات الفيلامينت والريزن الأصلية للمحترفين والهواة."
    },
    "image": "logo_cropped.png?v=3",
    "splitTitle": {
      "en": "More than just materials",
      "ar": "أكثر من مجرد خامات"
    },
    "splitP1": {
      "en": "At Enza Trade, we believe that every project deserves the best start. That's why we import only original, certified materials from world-leading brands like eSUN and Bambu Lab.",
      "ar": "في إنزا تريد، نؤمن بأن كل مشروع ناجح يبدأ بخامة ممتازة. لذلك، نستورد فقط الخامات الأصلية والمعتمدة من كبرى العلامات التجارية العالمية مثل eSUN و Bambu Lab."
    },
    "splitP2": {
      "en": "Whether you are printing industrial functional prototypes, architectural models, creative designs, or medical guides — our range of PLA+, ASA, ABS+, Carbon Fiber, and Resins provides outstanding reliability and print quality. We ship directly to your door across Egypt.",
      "ar": "سواء كنت تطبع نماذج صناعية، مجسمات معمارية، تصاميم إبداعية، أو أدلة طبية — فإن مجموعتنا الواسعة من PLA+، ASA، ABS+، ألياف الكربون، والريزن تضمن لك الموثوقية والنتائج الاحترافية. نشحن مباشرة لباب بيتك في أي مكان بمصر."
    },
    "splitButton": {
      "en": "Explore the catalog",
      "ar": "تصفح الخامات الآن"
    },
    "values": [
      {
        "icon": "sparkle",
        "h": {
          "en": "100% Original Brands",
          "ar": "خامات أصلية 100%"
        },
        "p": {
          "en": "Directly imported from eSUN and Bambu Lab. Guaranteed authentic and fresh batches.",
          "ar": "مستوردة مباشرة من المصانع الرسمية لشركتي eSUN و Bambu Lab. نضمن لك خامات أصلية غير مقلدة."
        }
      },
      {
        "icon": "shield",
        "h": {
          "en": "Reliability & Strength",
          "ar": "متانة وموثوقية عالية"
        },
        "p": {
          "en": "Engineered for high dimensional stability, anti-warping, and strong layer adhesion.",
          "ar": "خامات مصممة خصيصاً لمقاومة الالتواء، وتماسك قوي بين الطبقات لتتحمل الاستخدام الشاق."
        }
      },
      {
        "icon": "leaf",
        "h": {
          "en": "Eco-Friendly & Safe",
          "ar": "خامات صديقة للبيئة"
        },
        "p": {
          "en": "Non-toxic PLA formulas made from corn starch, clean and safe to print indoors.",
          "ar": "خيوط PLA آمنة تماماً وغير سامة، مصنوعة من نشا الذرة الطبيعي ومناسبة للطباعة في المكاتب والمنازل."
        }
      }
    ],
    "quote": {
      "en": "“Empowering Egyptian innovators, one layer at a time.”",
      "ar": "«ندعم المبتكرين وصناع المستقبل في مصر، طبقة تلو الأخرى.»"
    }
  },
  "shipping": {
    "heroEyebrow": {
      "en": "Shipping & Payment",
      "ar": "الشحن والدفع"
    },
    "heroTitle": {
      "en": "Delivery across Egypt",
      "ar": "شحن وتوصيل لجميع المحافظات"
    },
    "heroLede": {
      "en": "Cash on delivery, fast delivery, and flat rates. Here is everything you need to know about our logistics.",
      "ar": "شحن سريع، دفع عند الاستلام، وأسعار واضحة. إليك كل ما تحتاج لمعرفته عن التوصيل لدينا."
    },
    "bullets": [
      {
        "en": "We deliver directly to your doorstep in all 27 Egyptian governorates.",
        "ar": "نوصل طلبك مباشرة لحد باب بيتك في جميع المحافظات الـ 27 بمصر."
      },
      {
        "en": "Cash on Delivery — no credit card or advanced deposit needed for standard orders.",
        "ar": "الدفع عند الاستلام — لا تحتاج لبطاقة ائتمان أو دفع مسبق للطلبات العادية."
      },
      {
        "en": "Orders are shipped within 24 hours of confirmation, and delivery takes 2–4 business days.",
        "ar": "يتم شحن الطلبات خلال 24 ساعة من تأكيد الطلب، ويستغرق التوصيل من 2 إلى 4 أيام عمل."
      },
      {
        "en": "Please ensure your phone is reachable so the courier can coordinate delivery timing with you.",
        "ar": "يرجى التأكد من أن هاتفك متاح حتى يتمكن مندوب الشحن من تنسيق موعد التسليم معك."
      },
      {
        "en": "For bulk/wholesale orders or custom shipping arrangements, please contact us via WhatsApp.",
        "ar": "للطلبات بالجملة أو الترتيبات الخاصة بالشحن، يرجى التواصل معنا مباشرة عبر واتساب."
      }
    ],
    "trust": [
      {
        "icon": "cash",
        "text": {
          "en": "Cash on Delivery",
          "ar": "دفع كاش عند الاستلام"
        }
      },
      {
        "icon": "truck",
        "text": {
          "en": "Nationwide Delivery",
          "ar": "توصيل سريع لكل مصر"
        }
      },
      {
        "icon": "return",
        "text": {
          "en": "Authentic Products",
          "ar": "خامات أصلية 100%"
        }
      }
    ]
  },
  "faq": {
    "heroEyebrow": {
      "en": "FAQs",
      "ar": "الأسئلة الشائعة"
    },
    "heroTitle": {
      "en": "Answers to your questions",
      "ar": "إجابات لجميع استفساراتك"
    },
    "heroLede": {
      "en": "Everything you need to know about printing materials, ordering, and shipping settings.",
      "ar": "كل ما تود معرفته عن خامات الطباعة، كيفية الطلب، ومواعيد الشحن والتوصيل."
    },
    "stillTitle": {
      "en": "Still have a question?",
      "ar": "هل لديك سؤال آخر؟"
    },
    "items": [
      {
        "q": {
          "en": "Are these materials 100% original?",
          "ar": "هل هذه الخامات أصلية 100%؟"
        },
        "a": {
          "en": "Yes! All our filaments and resins are 100% original, imported directly from official eSUN and Bambu Lab factories in original sealed packaging with desiccant.",
          "ar": "نعم بكل تأكيد! جميع خامات الفيلامينت والريزن لدينا أصلية 100%، مستوردة مباشرة من مصانع eSUN و Bambu Lab وتصلك في تغليف المصنع الأصلي المحكم ومزودة بمانع الرطوبة."
        }
      },
      {
        "q": {
          "en": "How can I order from the store?",
          "ar": "كيف يمكنني الطلب من المتجر؟"
        },
        "a": {
          "en": "Simply browse our categories, select your materials and colors, add them to the cart, and click 'Complete Order'. This will generate a WhatsApp checkout message. Send it to us, and our team will confirm your order and shipping details immediately.",
          "ar": "كل ما عليك هو تصفح الأقسام، واختيار الخامات والألوان التي تريدها وإضافتها للسلة، ثم الضغط على 'تأكيد الطلب'. سيقوم المتجر بتجهيز رسالة واتساب مفصلة بطلبك. أرسلها إلينا وسيقوم فريقنا بتأكيد طلبك وتفاصيل الشحن فوراً."
        }
      },
      {
        "q": {
          "en": "What is the delivery time?",
          "ar": "ما هي مدة التوصيل المتوقعة؟"
        },
        "a": {
          "en": "For Cairo, Giza, and Qalyubia, delivery takes 1 to 2 business days. For Alexandria, Delta, and Canal governorates, it takes 2 to 3 days. For Upper Egypt and remote areas, it takes 3 to 4 days.",
          "ar": "للقاهرة والجيزة والقليوبية، يستغرق التوصيل من يوم إلى يومين عمل. لمحافظات الإسكندرية والدلتا والقناة، من 2 إلى 3 أيام. لمحافظات الصعيد والمناطق البعيدة، من 3 إلى 4 أيام."
        }
      },
      {
        "q": {
          "en": "How do I choose the right printing temperature?",
          "ar": "كيف أختار درجة حرارة الطباعة المناسبة؟"
        },
        "a": {
          "en": "Each product detail page lists the recommended print settings (nozzle temperature, bed temperature, etc.). For example, eSUN PLA+ prints best at 205-225°C with a bed at 50-60°C.",
          "ar": "كل صفحة منتج تحتوي على قسم المواصفات الذي يوضح درجات الحرارة الموصى بها. مثلاً خيوط eSUN PLA+ تطبع بأفضل جودة عند درجة حرارة نوزل 205-225 مئوية وسرير ساخن 50-60 مئوية."
        }
      },
      {
        "q": {
          "en": "Do you support bulk/wholesale orders for businesses?",
          "ar": "هل تدعمون مبيعات الجملة للشركات والمعامل؟"
        },
        "a": {
          "en": "Yes, we support factories, labs, universities, and 3D printing hubs. For bulk discounts or tax invoices, please contact us directly on WhatsApp.",
          "ar": "نعم، نحن نوفر أسعاراً خاصة للشركات، المعامل، والجامعات، ومراكز الخدمة. للطلبات الكبيرة أو طلب فواتير ضريبية، يرجى التواصل معنا مباشرة على واتساب."
        }
      }
    ]
  },
  "footer": {
    "tagline": {
      "en": "Enza Trade — Your premier supplier of professional 3D printing materials in Egypt. High-accuracy filaments and resins for perfect prints.",
      "ar": "إنزا تريد — المورد الأول لخامات الطباعة ثلاثية الأبعاد الاحترافية في مصر. فيلامينت وريزن عالي الدقة لنتائج طباعة مثالية."
    },
    "founded": {
      "en": "Enza Trade Egypt",
      "ar": "إنزا تريد مصر"
    },
    "social": {
      "instagram": "https://instagram.com/enzatrade",
      "tiktok": "https://tiktok.com/@enzatrade",
      "facebook": "https://www.facebook.com/profile.php?id=61564877800208",
      "whatsapp": "https://wa.me/201208640240"
    }
  }
};

Object.assign(window, { CURRENCY, CATEGORIES, PRODUCTS, GOVERNORATES, GOV_AR, SHIP_RATES, SITE_CONTENT });
