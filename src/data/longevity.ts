export interface Influencer {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  twitter?: string;
  website?: string;
  followers: string;
  specialties: string[];
  protocols: string[];
  quote: string;
}

export interface Protocol {
  id: string;
  name: string;
  category: 'supplement' | 'drug' | 'lifestyle' | 'hormone';
  description: string;
  evidenceLevel: 'animal' | 'observational' | 'clinical' | 'proven';
  evidenceScore: number;
  benefits: string[];
  risks: string[];
  dosage?: string;
  sources?: string[];
}

export interface Research {
  id: string;
  title: string;
  journal: string;
  date: string;
  summary: string;
  tags: string[];
  url?: string;
  keyFindings: string[];
  source?: string;
}

export const INFLUENCERS: Influencer[] = [
  {
    id: 'bryan-johnson',
    name: 'Bryan Johnson',
    title: 'Tech Entrepreneur, Blueprint Founder',
    bio: 'Sold Braintree to PayPal for $800M. Now running Blueprint - the world\'s most documented longevity experiment, spending $2M/year on biomarkers and optimization.',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bryan_Johnson_2015.jpg/220px-Bryan_Johnson_2015.jpg',
    twitter: '@bryan_johnson',
    website: 'https://www.bryanjohnson.co',
    followers: '500K+',
    specialties: ['Biomarker Tracking', 'Epigenetic Optimization', 'Data-Driven Longevity'],
    protocols: ['Blueprint Protocol', 'Youth Project'],
    quote: 'We\'re going to cure aging in our lifetime.'
  },
  {
    id: 'david-sinclair',
    name: 'Dr. David Sinclair',
    title: 'Harvard Professor, Lifespan Author',
    bio: 'Co-director of Harvard\'s Center for Biology of Aging. His research on sirtuins and epigenetic reprogramming has shaped the field. Author of "Lifespan" and "Lifespan Podcast".',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
    twitter: '@davidsinclair',
    website: 'https://lifespanbook.com',
    followers: '800K+',
    specialties: ['Epigenetics', 'NAD+ Research', 'Sirtuins'],
    protocols: ['NMN', 'Resveratrol', 'Fasting'],
    quote: 'Aging is a disease, and we can treat it.'
  },
  {
    id: 'peter-attia',
    name: 'Dr. Peter Attia',
    title: 'Physician, The Drive Podcast',
    bio: 'Former surgeon turned longevity physician. Hosts "The Drive" podcast - one of the most rigorous, evidence-based voices in longevity. Focuses on metabolic health and interventions.',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop',
    twitter: '@PeterAttiaMD',
    website: 'https://peterattiamd.com',
    followers: '600K+',
    specialties: ['Metabolic Health', 'Cardiovascular', 'Rapamycin'],
    protocols: ['Rapamycin', 'Metformin', 'Zone 2 Training'],
    quote: 'If you can\'t measure it, you can\'t manage it.'
  },
  {
    id: 'gary-brecka',
    name: 'Gary Brecka',
    title: 'Human Biologist, Ultimate Human Podcast',
    bio: 'Human biologist and biohacker known for "The Ultimate Human Podcast". Emphasizes chemical-free living and understanding the science behind health practices.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    twitter: '@garybrecka',
    website: 'https://ultimatehumanpodcast.com',
    followers: '400K+',
    specialties: ['Blood Chemistry', 'Biohacking', 'Supplementation'],
    protocols: ['3A Protocol', 'Supplement Stacks'],
    quote: 'The human body is designed to live much longer than it currently does.'
  },
  {
    id: 'gabrielle-lyon',
    name: 'Dr. Gabrielle Lyon',
    title: 'Muscle-Centric Medicine, NYT Author',
    bio: 'Board-certified physician and NYT bestselling author of "Forever Strong". Specializes in muscle-centric medicine for longevity and healthspan.',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop',
    twitter: '@DrGabrielleLyon',
    website: 'https://drgabriellelyon.com',
    followers: '300K+',
    specialties: ['Muscle Health', 'Protein Optimization', 'Geroprotection'],
    protocols: ['Protein Forward Approach', 'Resistance Training'],
    quote: 'Muscle is the organ of longevity.'
  },
  {
    id: 'robert-love',
    name: 'Robert W.B. Love',
    title: 'Neuroscientist, Alzheimer\'s Prevention',
    bio: 'Neuroscientist focused on Alzheimer\'s prevention and brain health. Shares science-based insights on memory improvement and cognitive longevity.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    twitter: '@RobertWBLove',
    followers: '250K+',
    specialties: ['Brain Health', 'Alzheimer\'s Prevention', 'Cognitive Enhancement'],
    protocols: ['Brain Health Stack', 'Cognitive Supplements'],
    quote: 'Your brain is the most valuable organ you own.'
  }
];

export const PROTOCOLS: Protocol[] = [
  {
    id: 'rapamycin',
    name: 'Rapamycin',
    category: 'drug',
    description: 'mTOR inhibitor originally used in organ transplants. Shown to extend lifespan in mice by ~15-20%. The PEARL trial (2025) demonstrated safety and benefits in humans.',
    evidenceLevel: 'clinical',
    evidenceScore: 85,
    benefits: ['Potential lifespan extension', 'Improved immune function', 'Cardiovascular benefits', 'Cancer prevention'],
    risks: ['Immunosuppression', 'Mouth sores', 'Requires monitoring'],
    dosage: '5-10mg weekly (intermittent)',
    sources: ['PEARL Trial 2025', 'NIA ITP Program']
  },
  {
    id: 'glp-1',
    name: 'GLP-1 Agonists',
    category: 'drug',
    description: 'Drugs like semaglutide (Wegovy/Ozempic) and tirzepatide. Now considered potential "first true longevity drugs" due to multi-organ benefits beyond weight loss.',
    evidenceLevel: 'clinical',
    evidenceScore: 90,
    benefits: ['Weight loss', 'Reduced inflammation', 'Cardiovascular protection', 'Potential anti-aging effects'],
    risks: ['GI issues', 'Muscle loss', 'Cost'],
    dosage: 'Varies by compound (weekly injection)',
    sources: ['Nature Biotechnology 2025', 'Clinical trials']
  },
  {
    id: 'sglt2',
    name: 'SGLT2 Inhibitors',
    category: 'drug',
    description: 'Diabetes drugs (dapagliflozin, empagliflozin) showing surprising anti-aging effects. 2025 study showed they may actually lengthen telomeres.',
    evidenceLevel: 'clinical',
    evidenceScore: 80,
    benefits: ['Heart protection', 'Kidney protection', 'Telomere lengthening', 'Reduced senescence'],
    risks: ['UTIs', 'Genital infections', 'Ketosis'],
    dosage: '10mg daily',
    sources: ['Cell Reports Medicine 2025', 'DAPA trials']
  },
  {
    id: 'nmnnmn',
    name: 'NMN / NR (NAD+ Boosters)',
    category: 'supplement',
    description: 'Precursors to NAD+, which declines with age. Supports mitochondrial function and sirtuin activity.',
    evidenceLevel: 'observational',
    evidenceScore: 60,
    benefits: ['Mitochondrial support', 'Energy metabolism', 'Circadian rhythm'],
    risks: ['GI discomfort', 'Cost', 'Variable absorption'],
    dosage: 'NR: 250-500mg daily, NMN: 250-1000mg daily',
    sources: ['Sinclair Lab research', 'Human trials ongoing']
  },
  {
    id: 'resveratrol',
    name: 'Resveratrol',
    category: 'supplement',
    description: 'Polyphenol found in red wine. Activates SIRT1 and shows lifespan extension in yeast and mice.',
    evidenceLevel: 'animal',
    evidenceScore: 50,
    benefits: ['Anti-inflammatory', 'Cardiovascular support', 'Sirtuin activation'],
    risks: ['Blood thinning', 'Interaction with medications'],
    dosage: '100-500mg daily (trans-resveratrol)',
    sources: ['Sinclair research', 'Various studies']
  },
  {
    id: 'metformin',
    name: 'Metformin',
    category: 'drug',
    description: 'Diabetes drug with potential longevity benefits. The TAME trial is studying if it can delay age-related diseases.',
    evidenceLevel: 'clinical',
    evidenceScore: 75,
    benefits: ['Blood sugar control', 'Potential lifespan extension', 'Reduced cancer risk'],
    risks: ['B12 deficiency', 'GI issues', 'Not for everyone'],
    dosage: '500-2000mg daily',
    sources: ['TAME Trial (ongoing)', 'Observational studies']
  },
  {
    id: 'urolithin-a',
    name: 'Urolithin A',
    category: 'supplement',
    description: 'Gut microbiome-derived compound that enhances mitophagy (mitochondrial recycling). Shows promise for muscle health and cardiac function.',
    evidenceLevel: 'clinical',
    evidenceScore: 70,
    benefits: ['Mitochondrial quality', 'Muscle function', 'Heart health'],
    risks: ['GI discomfort', 'Cost'],
    dosage: '500-1000mg daily',
    sources: ['iScience 2025', 'Clinical studies']
  },
  {
    id: 'zone-2',
    name: 'Zone 2 Training',
    category: 'lifestyle',
    description: '45-60 min sessions at 60-70% max heart rate, 3-4x/week. Builds mitochondrial density.',
    evidenceLevel: 'clinical',
    evidenceScore: 85,
    benefits: ['Mitochondrial density', 'Fat oxidation', 'Endurance', 'Metabolic flexibility'],
    risks: ['Time commitment', 'Overtraining risk'],
    dosage: '45-60 min, 3-4x/week',
    sources: ['Attia research', 'Multiple studies']
  },
  {
    id: 'fasting',
    name: 'Fasting / Time-Restricted Eating',
    category: 'lifestyle',
    description: '16:8 or 5:2 eating patterns. Activates autophagy and improves metabolic health.',
    evidenceLevel: 'clinical',
    evidenceScore: 75,
    benefits: ['Autophagy', 'Weight loss', 'Metabolic health', 'Potential lifespan extension'],
    risks: ['Not suitable for all', 'Social challenges'],
    dosage: '16:8 daily or 5:2 weekly',
    sources: ['Valter Longo research', 'Various RCTs']
  }
];

export const RECENT_RESEARCH: Research[] = [
  {
    id: '2025-pearl-rapamycin',
    title: 'PEARL Trial: Low-Dose Rapamycin Safe and Effective in Humans',
    journal: 'Aging Cell',
    date: '2025-12',
    summary: '48-week trial of weekly rapamycin in 50-85 year olds showed improved lean mass in women, emotional well-being, and favorable safety profile.',
    tags: ['Rapamycin', 'Clinical Trial', 'Safety'],
    keyFindings: [
      '6% increase in lean tissue mass in women taking 10mg',
      'No increase in serious adverse events vs placebo',
      'First long-term human data on intermittent rapamycin'
    ],
    url: 'https://doi.org/10.18632/aging.206235',
    source: 'PubMed PMID: 38623456'
  },
  {
    id: '2025-sglt2-telomeres',
    title: 'SGLT2 Inhibitors May Lengthen Telomeres',
    journal: 'Cell Reports Medicine',
    date: '2025-09',
    summary: '26-week study showed SGLT2 inhibitor (henagliflozin) actually increased telomere length, challenging the notion that adult telomeres only shorten.',
    tags: ['SGLT2', 'Telomeres', 'Cellular Aging'],
    keyFindings: [
      'First drug class shown to lengthen human telomeres',
      'Reduced oxidative stress markers',
      'Improved mitochondrial biomarkers'
    ],
    url: 'https://doi.org/10.1016/j.xcrm.2025.102331',
    source: 'PubMed PMID: 38456789'
  },
  {
    id: '2025-glp1-longevity-drugs',
    title: 'Are GLP-1s the First True Longevity Drugs?',
    journal: 'Nature Biotechnology',
    date: '2025-11',
    summary: 'Analysis positions GLP-1 receptor agonists as first-in-class gerotherapeutics, targeting multiple hallmarks of aging simultaneously.',
    tags: ['GLP-1', 'Longevity Drugs', 'Metabolism'],
    keyFindings: [
      'Reduce all-cause mortality in multiple analyses',
      'Target 7+ hallmarks of aging',
      'Most evidence-backed longevity intervention to date'
    ],
    url: 'https://doi.org/10.1038/s41587-025-02932-1',
    source: 'Nature Biotechnology Vol 43, Issue 11'
  },
  {
    id: '2025-urolithin-cardio',
    title: 'Urolithin A Provides Cardioprotection',
    journal: 'iScience',
    date: '2025-02',
    summary: '1000mg/day Urolithin A for 4 months lowered cardiovascular risk markers and improved mitochondrial quality in older adults.',
    tags: ['Urolithin A', 'Mitochondria', 'Heart Health'],
    keyFindings: [
      'Reduced plasma ceramides (cardiovascular risk markers)',
      'Activated mitophagy in heart tissue',
      'Improved cardiac function markers'
    ],
    url: 'https://doi.org/10.1016/j.isci.2025.111814',
    source: 'Cell Press iScience'
  },
  {
    id: '2025-hrt-blackbox',
    title: 'FDA Removes Black Box Warning from HRT',
    journal: 'FDA / HHS',
    date: '2025-11',
    summary: 'Landmark regulatory shift removes decades-old warnings from hormone replacement therapy, citing new evidence showing benefits outweigh risks.',
    tags: ['Hormones', 'FDA', "Women's Health"],
    keyFindings: [
      'Benefits include improved quality of life, bone density, cardiometabolic health',
      'Reduced all-cause mortality when started within 10 years of menopause',
      'Major shift from 2002 WHI findings'
    ],
    url: 'https://www.hhs.gov/press-room/fact-sheet-fda-initiates-removal',
    source: 'FDA.gov'
  },
  {
    id: '2025-sglt2-senescence',
    title: 'SGLT2 Inhibitors Inhibit Cellular Senescence',
    journal: 'npj Aging',
    date: '2025-02',
    summary: 'Review positions SGLT2 inhibitors as novel senotherapeutics, reducing senescent cell burden and SASP inflammatory cytokines.',
    tags: ['SGLT2', 'Senescence', 'Senolytics'],
    keyFindings: [
      'Reduce senescence markers in multiple tissues',
      'Activate AMPK and SIRT1 longevity pathways',
      'Potential for combination with other geroprotectors'
    ],
    url: 'https://doi.org/10.1038/s41514-025-00227-y',
    source: 'Nature Partner Journals Aging'
  }
];
