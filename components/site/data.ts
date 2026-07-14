export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Requirements', href: '#requirements' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Terms', href: '#terms' },
  { label: 'Contact', href: '#contact' },
]

export const TECH_BADGES = [
  'Unity',
  'Blender',
  'VRChat SDK3',
  'Substance Painter',
  'Photoshop',
  'Poiyomi',
  'LilToon',
]

export const SHOP_PRODUCTS = [
  {
    title: 'Avatar Assets',
    description: 'Drop-in accessories and parts built for quick avatar setup.',
  },
  {
    title: 'Texture Packs',
    description: 'Ready-made PBR texture sets for a fresh, high-detail look.',
  },
  {
    title: 'Materials',
    description: 'Pre-configured Poiyomi & LilToon materials for VRChat.',
  },
  {
    title: 'Unity Tools',
    description: 'Time-saving editor tools and reusable Unity systems.',
  },
  {
    title: 'Avatar Accessories',
    description: 'Props, gadgets, and add-ons to make an avatar stand out.',
  },
  {
    title: 'Blender Assets',
    description: 'Meshes and blend files ready for import and rigging.',
  },
  {
    title: 'Complete Asset Packs',
    description: 'Bundled kits combining textures, materials, and props.',
  },
]

export const PORTFOLIO = [
  {
    title: 'Anime Booth Customization',
    category: 'Avatar Edit',
    description:
      'Full face and material rework giving a Booth base a distinct, polished identity.',
    image: '/portfolio/anime-rework.png',
    tags: ['Poiyomi', 'Substance Painter', 'Unity'],
  },
  {
    title: 'Furry Avatar Styling',
    category: 'Texturing',
    description:
      'Custom fluff detailing, markings, and body modifications for a unique fursona.',
    image: '/portfolio/base-texturing.png',
    tags: ['Substance Painter', 'Blender', 'LilToon'],
  },
  {
    title: 'Unity Gimmicks',
    category: 'Systems',
    description:
      'Toggles, PhysBones, contact receivers, and particle effects wired into the menu.',
    image: '/portfolio/scifi-assets.png',
    tags: ['Unity', 'VRChat SDK3', 'PhysBones'],
  },
  {
    title: 'Quest Optimization',
    category: 'Optimization',
    description:
      'Poly reduction, texture compression, and fallbacks to hit a friendly Quest rank.',
    image: '/portfolio/optimization.png',
    tags: ['Quest', 'Optimization', 'Fallbacks'],
  },
]

export const SERVICES = [
  {
    title: 'Booth Model Setup',
    price: 'Starting at $30+',
    featured: false,
    points: [
      'Asset fitting',
      'Clothing setup',
      'Blendshape fixing',
      'LilToon configuration',
      'Poiyomi configuration',
      'Material setup',
    ],
  },
  {
    title: 'Furry Customization',
    price: 'Starting at $75+',
    featured: true,
    points: [
      'Substance Painter textures',
      'Fluff detailing',
      'Custom markings',
      'Body modifications',
      'Accessories',
      'Custom materials',
    ],
  },
  {
    title: 'Unity Systems & Gimmicks',
    price: 'Starting at $75+',
    featured: false,
    points: [
      'Avatar Toggles',
      'Contact Receivers',
      'PhysBones',
      'Expression Menus',
      'Material Swaps',
      'Dissolve Effects',
      'Particle Effects',
      'GoGoLoco Setup',
      'Custom Unity Systems',
    ],
  },
  {
    title: 'Avatar Optimization',
    price: 'Starting at $40+',
    featured: false,
    points: [
      'Poly Reduction',
      'Texture Compression',
      'Quest Conversion',
      'Fallback Materials',
      'Performance Optimization',
      'Feature balancing via VRChat guidelines',
    ],
  },
]

export const PROCESS = [
  { step: '01', title: 'Submit Request', desc: 'Send me your idea and references.' },
  { step: '02', title: 'Project Review & Quote', desc: 'I review scope and send a quote.' },
  { step: '03', title: 'Invoice & Upfront Payment', desc: 'Secure your slot to begin work.' },
  { step: '04', title: 'Work Begins', desc: 'Progress updates provided throughout.' },
  { step: '05', title: 'Final Revisions', desc: 'We dial in the final result.' },
  { step: '06', title: 'Secure Delivery', desc: 'Files delivered, VRChat ready.' },
]

export const REQUIREMENTS = {
  required: [
    'Avatar Base Files',
    'Purchased Assets',
    'Proof of Asset Ownership',
    'Reference Images',
    'Color Palette',
    'Project Description',
  ],
  optional: ['Deadline', 'Additional Notes'],
}

export const FAQ = [
  {
    q: 'How long do commissions take?',
    a: 'Turnaround depends on scope and my current queue, typically 3–7 days for standard work. I always provide an estimate before starting.',
  },
  {
    q: 'Do you upload avatars?',
    a: 'I deliver the finished files and can guide you through uploading. Upload assistance is available upon request with the proper permissions.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Payment is arranged during the quote step, typically through PayPal or another agreed-upon method. Payment is 100% upfront before work begins.',
  },
  {
    q: 'Can I request revisions?',
    a: 'Yes. Minor revisions are included so we can perfect the result. Larger scope changes beyond the original brief may carry an additional fee.',
  },
  {
    q: 'Do you work on NSFW avatars?',
    a: 'Reach out with your project details and I will let you know whether it is something I can take on. All work still requires proof of legal asset ownership.',
  },
]

export const TERMS = [
  'Client must provide proof of legal ownership for all avatar bases and assets.',
  'No ripped, leaked, or pirated assets will be accepted.',
  'Delivery is provided as a secure UnityPackage or complete Unity project files.',
  'Upload assistance is available upon request.',
  'Shaders are configured based on project requirements, including Poiyomi and LilToon.',
  'Optimization follows VRChat performance guidelines while balancing features and appearance. Final performance depends on the assets supplied.',
  'Payment is 100% upfront before work begins.',
  'Once Unity or Blender production has started, refunds are unavailable.',
  'Minor revisions are included unless otherwise specified.',
]
