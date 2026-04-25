// ─── OMEGA LABORATORIES — Static Content Data ─────────────────────────────

export const NAV_LINKS = [
  { href: '#services', label: 'Shërbimet' },
  { href: '#about', label: 'Përse OMEGA' },
  { href: '#journey', label: 'Procesi' },
  { href: '#locations', label: 'Kontakti' },
];

export const TRUST_STATS = [
  { target: 27, suffix: '+', label: 'Vite Ekselencë' },
  { target: 850, suffix: 'k+', label: 'Pacientë të Shërbyer' },
  { target: 320, suffix: '+', label: 'Parametra Analitikë' },
  { target: 99.7, suffix: '%', label: 'Saktësi Diagnostike', isFloat: true },
  { target: 4, suffix: 'h', label: 'Kthim Mesatar' },
];

export const CREDENTIALS = [
  {
    idx: '01',
    code: 'ISO 15189',
    title: 'Kompetencë\nLaboratorike',
    org: 'International Organization\nfor Standardization',
    icon: 'iso',
  },
  {
    idx: '02',
    code: 'CAP',
    title: 'Akreditim i\nPatologjisë',
    org: 'College of American\nPathologists',
    icon: 'cap',
  },
  {
    idx: '03',
    code: 'OBSH / WHO',
    title: 'Aprovim\nGlobal',
    org: 'Organizata Botërore\ne Shëndetësisë',
    icon: 'who',
  },
  {
    idx: '04',
    code: 'CLIA',
    title: 'Certifikim\nKlinik',
    org: 'Clinical Laboratory\nImprovement Amendments',
    icon: 'clia',
  },
  {
    idx: '05',
    code: 'MSH · Kosovë',
    title: 'Licencë\nShtetërore',
    org: 'Ministria e Shëndetësisë\nRepublika e Kosovës',
    icon: 'msh',
    isAnchor: true,
    sealText: 'ZYRTARISHT · I LICENSUAR · RINOVUAR 2024',
    liveText: 'AKTIV · 2024',
  },
];

export const SERVICE_TABS = [
  {
    id: 'biochem',
    label: 'Biokimi',
    num: '01',
    title: 'Biokimi &\nAnalizë Metabolike',
    desc: 'Panele metabolike gjithëpërfshirëse që mbulojnë funksionin e mëlçisë, treguesit renalë, profilet lipidike, rregullimin e glukozës dhe mbi 80 analita me raportim ditën e njëjtë.',
    tags: ['Paneli Hepatik', 'Funksioni Renal', 'Profili Lipidik', 'Glukoza & HbA1c', 'Elektrolitët', 'Treguesit Kardiak'],
  },
  {
    id: 'hemato',
    label: 'Hematologji',
    num: '02',
    title: 'Hematologji &\nAnalizë e Gjakut',
    desc: 'Numërim i plotë i gjakut, analizë diferenciale qelizore, profilizim koagulimi dhe ekzaminim morfologjik i avancuar me analizatorë 5-klasësh dhe mikroskopi dixhitale.',
    tags: ['CBC + Diferencial', 'Koagulimi', 'Studimet e Hekurit', 'ESR / CRP', 'Retikulocitet', 'Analiza Trombocitare'],
  },
  {
    id: 'micro',
    label: 'Mikrobiologji',
    num: '03',
    title: 'Mikrobiologji &\nZbulimi i Infeksioneve',
    desc: 'Testim kulturor dhe ndjeshmëri, identifikim i shpejtë i patogjenëve me PCR, profilizim antibiograme dhe screening parazitar me platforma automatike MALDI-TOF.',
    tags: ['Kulturë Gjaku', 'Zbulim PCR', 'Antibiograma', 'Kulturë Urine', 'MALDI-TOF', 'Screening Parazitar'],
  },
  {
    id: 'immuno',
    label: 'Imunologji',
    num: '04',
    title: 'Imunologji &\nProfilizim Autoimun',
    desc: 'Platforma të avancuara imunoanalitike për panele alergjie, zbulim autoantikorpesh, profilizim citokinash dhe vlerësim gjithëpërfshirës të sistemit imunitar.',
    tags: ['Paneli i Alergjisë', 'ANA / ANCA', 'Citokinat', 'Komplementi', 'Imunoglobulinat', 'Flow Cytometry'],
  },
  {
    id: 'hormones',
    label: 'Hormonet',
    num: '05',
    title: 'Endokrinologji &\nProfilizim Hormonal',
    desc: 'Vlerësim i plotë endokrin nga akset tiroide dhe adrenale deri te hormonet riprodhuese, faktorët e rritjes dhe hormonet metabolike.',
    tags: ['Paneli i Plotë Tiroid', 'Hormonet Seksuale', 'Kortizoli / ACTH', 'Insulina / C-Peptidi', 'Hormoni i Rritjes', 'Vitamina D / B12'],
  },
  {
    id: 'genetics',
    label: 'Gjenetikë',
    num: '06',
    title: 'Gjenetikë Molekulare &\nDiagnostikë Gjinomike',
    desc: 'Sekuencim i gjeneratës së re, farmakogjenomikë, panele mutacionesh onkologjike, screening sëmundjesh trashëgimore dhe testim bartësi me platforma NGS dhe qPCR.',
    tags: ['Panelet NGS', 'Farmakogjenomikë', 'Analiza BRCA', 'Screening Prenatal', 'PCR Patogjenësh', 'Metilimi'],
  },
];

export const PILLARS = [
  {
    num: '01 — Precizion',
    icon: 'target',
    title: 'Precizion',
    titleEm: 'Absolut',
    text: 'Platformat tona analitike operojnë në kufijtë e zbulimit 0.001 nmol/L. Çdo rezultat kalibrohet çdo ditë kundrejt standardeve ndërkombëtare NIST.',
    metricVal: '±0.1%',
    metricLabel: 'Koeficienti\ni Variacionit',
    bgNum: '01',
  },
  {
    num: '02 — Shpejtësi',
    icon: 'clock',
    title: 'Rezultate',
    titleEm: 'Ditën e Njëjtë',
    text: 'Panelet urgente dhe rutinore raportohen brenda 4 orëve. Dërgesa dixhitale e sigurt drejtpërsëdrejti te pacienti dhe mjeku.',
    metricVal: '4h',
    metricLabel: 'Koha Mesatare\ne Kthimit',
    bgNum: '02',
  },
  {
    num: '03 — Cilësi',
    icon: 'star',
    title: 'Akreditim',
    titleEm: 'ISO 15189',
    text: 'I akredituar ndërkombëtarisht sipas standardeve më rigoroze të menaxhimit të cilësisë.',
    metricVal: 'CAP',
    metricLabel: 'Laborator\ni Aprovuar',
    bgNum: '03',
  },
  {
    num: '04 — Disponim',
    icon: 'coffee',
    title: 'Disponueshmëri',
    titleEm: '24 Orë',
    text: 'Qendrat e marrjes së mostrës janë të hapura gjatë gjithë ditës me specialist laboratori.',
    metricVal: '24/7',
    metricLabel: 'Shërbim pa\nNdërprerje',
    bgNum: '04',
  },
  {
    num: '05 — Ekspertizë',
    icon: 'user',
    title: 'Patologë',
    titleEm: 'Ekspertë',
    text: 'Çdo rezultat shqyrtohet nga patologë klinikë të certifikuar me ekspertizë të specializuar në diagnostikë molekulare dhe hematologji.',
    metricVal: '850k+',
    metricLabel: 'Pacientë\ntë Shërbyer',
    bgNum: '05',
    isWide: true,
  },
];

export const INSTRUMENTS = [
  {
    watermark: 'cobas',
    tag: 'Platforma Kryesore Analitike',
    name: 'Roche cobas 8000',
    nameEm: 'Analizator Modular',
    desc: 'Kulmi i automatizimit klinik. Proceson deri në 1,800 analiza në orë nëpër module të kimisë, imunologjisë dhe koagulimit me gjurmueshmëri të plotë të mostrave.',
    specs: [
      { label: 'Kapaciteti', value: '1,800 analiza/orë' },
      { label: 'Modulet', value: 'Kim + Immuno + Koag' },
      { label: 'Koha STAT', value: '< 12 minuta' },
      { label: 'CV%', value: '< 1.5% të gjitha analizat' },
    ],
    stepLabel: 'cobas 8000',
  },
  {
    watermark: 'NextSeq',
    tag: 'Diagnostikë Molekulare',
    name: 'Illumina NextSeq 550',
    nameEm: 'Platforma NGS',
    desc: 'Sekuencim i gjeneratës së re me kapacitet të lartë që mundëson profilizim gjenetik gjithëpërfshirës, sekuencim të paneleve të synuara dhe analizë egzomike.',
    specs: [
      { label: 'Gjatësia e Leximit', value: '2 × 150 bp' },
      { label: 'Prodhimi', value: 'deri 120 Gb/ekzekutim' },
      { label: 'Shkalla e Gabimit', value: '< 0.1%' },
      { label: 'Kthimi', value: '48–72 orë' },
    ],
    stepLabel: 'NextSeq 550',
  },
  {
    watermark: 'XN-9100',
    tag: 'Analizë Qelizore',
    name: 'Sysmex XN-9100',
    nameEm: 'Analizator Hematologjik',
    desc: 'Diferencim i automatizuar 5-klasësh me shqyrtim dixhital morfologjik. Shënues me ndihmën e AI për populatat qelizore jonormale me shkallë <0.5% pozitive false.',
    specs: [
      { label: 'Kapaciteti', value: '200 mostra/orë' },
      { label: 'Parametrat', value: '36 parametra CBC' },
      { label: 'Diferencial', value: '5-klasësh i automatizuar' },
      { label: 'Saktësia WBC', value: '99.2%' },
    ],
    stepLabel: 'Sysmex XN-9100',
  },
  {
    watermark: 'MALDI',
    tag: 'Mikrobiologji & Identifikim',
    name: 'MALDI-TOF',
    nameEm: 'Spektrometri Masive',
    desc: 'Identifikim i saktë i mikroorganizmave brenda minutave nëpërmjet spektrometrisë masive. Standardi i artë i mikrobiologjisë klinike moderne.',
    specs: [
      { label: 'Koha e Identifikimit', value: '< 5 minuta' },
      { label: 'Saktësia', value: '> 99.5% identifikim' },
      { label: 'Baza e të dhënave', value: '> 6,000 specie' },
      { label: 'Antibiograma', value: 'Automatike' },
    ],
    stepLabel: 'MALDI-TOF',
  },
];

export const JOURNEY_STEPS = [
  {
    num: '01',
    title: 'Rezervo Online',
    desc: 'Cakto takimin nëpërmjet portalit tonë ose me telefon. Zgjidh testet, lokacionin dhe konfirmo vendin — brenda 2 minutave.',
    time: '2 min',
    icon: 'booking',
  },
  {
    num: '02',
    title: 'Mbërri dhe Regjistrohu',
    desc: 'Paraqit konfirmimin tënd në recepsion. Ekipi ynë i flebotomisë do të të mirëpresë dhe konfirmojë testet — pa letër.',
    time: '5 min',
    icon: 'checkin',
  },
  {
    num: '03',
    title: 'Marrja e Mostrës',
    desc: 'Kryhet nga flebotomistë të certifikuar në dhoma private klinike. Të gjitha mostrat barkodohen dhe regjistrohen në LIMS.',
    time: '10 min',
    icon: 'sample',
  },
  {
    num: '04',
    title: 'Analizë Laboratorike',
    desc: 'Mostrat procesohen në platforma të automatizuara me monitorim QC në kohë reale. Çdo rezultat vlidohet nga ekipi i patologjisë.',
    time: '2–4 orë',
    icon: 'lab',
  },
  {
    num: '05',
    title: 'Rezultatet Dorëzohen',
    desc: 'Dërgesa dixhitale e sigurt te portali yt i pacientit dhe drejtpërdrejt te mjeku. Raportet PDF përfshijnë vlerat referente dhe komentet klinike.',
    time: 'Ditën e njëjtë',
    icon: 'results',
  },
];

export const LOCATIONS = [
  {
    name: 'Pejë',
    address: 'Rr. Sadik Cufa, Pejë 30000',
    hours: [
      { open: true, text: 'Hën–Die · 07:00–20:00' },
    ],
    isPrimary: true,
  },
];

export const FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
  sherbime: [
    { label: 'Biokimi',         href: '#services' },
    { label: 'Hematologji',     href: '#services' },
    { label: 'Mikrobiologji',   href: '#services' },
    { label: 'Imunologji',      href: '#services' },
    { label: 'Hormonet',        href: '#services' },
    { label: 'Gjenetikë & NGS', href: '#services' },
  ],
  pacientet: [
    { label: 'Rezervo Online',      href: '#booking'   },
    { label: 'Vizita në Shtëpi',    href: '#locations' },
    { label: 'Përgatitja për Testin', href: '#journey'  },
  ],
  kompania: [
    { label: 'Rreth OMEGA',  href: '#about'     },
    { label: 'Akreditimet',  href: '#about'     },
    { label: 'Lokacionet',   href: '#locations' },
    { label: 'Kontakti',     href: '#booking'   },
  ],
};
