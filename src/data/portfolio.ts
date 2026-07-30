import type {
  Education,
  Interest,
  Language,
  NavigationItem,
  Project,
  SkillCategory,
} from "@/src/types/portfolio";

export const navigationItems: NavigationItem[] = [
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#egitim", label: "Eğitim" },
  { href: "#proje", label: "Proje" },
  { href: "#beceriler", label: "Beceriler" },
  { href: "#iletisim", label: "İletişim" },
];

export const profile = {
  eyebrow: "Elektronik • Donanım • Gömülü Sistemler",
  greeting: "Merhaba, ben",
  name: "Kubilay Kendirci.",
  title: "Elektrik ve Elektronik Mühendisliği Öğrencisi",
  summary:
    "Hacettepe Üniversitesi Elektrik ve Elektronik Mühendisliği öğrencisiyim. Elektronik devreler, donanım geliştirme ve gömülü sistemler alanlarına ilgi duyuyorum. Teorik bilgilerimi uygulamalı projelerle geliştirmeyi hedefliyorum.",
  shortSummary:
    "Elektronik devreleri anlamayı, kurmayı ve ölçerek geliştirmeyi öğreniyorum.",
} as const;

export const interests: Interest[] = [
  {
    title: "Elektronik Devreler",
    description: "Devre davranışını analiz etme ve uygulama",
    icon: "circuit",
  },
  {
    title: "Donanım Geliştirme",
    description: "Fiziksel sistemleri kurma ve iyileştirme",
    icon: "cpu",
  },
  {
    title: "Gömülü Sistemler",
    description: "Donanım ve kontrol sistemlerini keşfetme",
    icon: "code",
  },
  {
    title: "Ölçüm ve Test",
    description: "Sinyalleri gözlemleme ve doğrulama",
    icon: "activity",
  },
];

export const education: Education = {
  institution: "Hacettepe Üniversitesi",
  department: "Elektrik ve Elektronik Mühendisliği",
  grade: "3.23 / 4.00",
  status: "Devam Ediyor",
};

export const featuredProject: Project = {
  title: "Taşınabilir Hoparlör Tasarımı ve Geliştirilmesi",
  description:
    "Bir taşınabilir hoparlör sisteminin elektronik bağlantılarının kurulması, montajı ve temel ölçümlerle doğrulanmasına odaklanan uygulamalı çalışma.",
  responsibilities: [
    "Taşınabilir hoparlör sisteminin elektronik bağlantılarının gerçekleştirilmesi",
    "Amplifikatör, hoparlör ve güç bağlantılarının kurulumu",
    "Devrenin montaj ve temel test süreçlerinin tamamlanması",
    "Multimetre ve osiloskop kullanılarak temel ölçümlerin gerçekleştirilmesi",
    "Elektronik devre kurulumu, lehimleme ve temel hata ayıklama deneyimi kazanılması",
  ],
  tools: [
    "Multimetre",
    "Osiloskop",
    "Lehimleme ekipmanları",
    "Amplifikatör",
    "Hoparlör",
    "Güç bağlantıları",
  ],
  outcomes: ["Devre kurulumu", "Temel test", "Montaj", "Temel hata ayıklama"],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Elektronik",
    description: "Devreleri anlama ve fiziksel olarak kurma",
    icon: "circuit",
    skills: [
      { name: "Temel Elektronik Devre Analizi", icon: "activity" },
      { name: "Devre Kurulumu", icon: "cpu" },
      { name: "Lehimleme", icon: "wrench" },
    ],
  },
  {
    title: "Ölçüm ve Test",
    description: "Devre davranışını ölçme ve temel doğrulama",
    icon: "gauge",
    skills: [
      { name: "Multimetre Kullanımı", icon: "gauge" },
      { name: "Temel Osiloskop Kullanımı", icon: "monitor" },
      { name: "Temel Hata Ayıklama", icon: "settings" },
    ],
  },
  {
    title: "Yazılım ve Araçlar",
    description: "Teknik çalışma ve üretkenlik araçları",
    icon: "layers",
    skills: [
      { name: "MATLAB", qualifier: "Başlangıç Seviyesi", icon: "flask" },
      { name: "Microsoft Office", icon: "briefcase" },
    ],
  },
];

export const languages: Language[] = [
  { name: "Türkçe", level: "Ana Dil" },
  { name: "İngilizce", level: "İyi" },
];

export const sectionCopy = {
  about: {
    eyebrow: "01 / Hakkımda",
    title: "Merakla başlayan, uygulamayla gelişen bir mühendislik yolculuğu.",
    description:
      "Teoriyi gerçek devrelerde sınayarak öğrenmeyi; ölçüm, montaj ve temel hata ayıklama pratikleriyle teknik altyapımı adım adım geliştirmeyi önemsiyorum.",
    interestsTitle: "İlgi Alanları",
  },
  education: {
    eyebrow: "02 / Eğitim",
    title: "Akademik temel",
    description:
      "Elektrik ve Elektronik Mühendisliği eğitimime Hacettepe Üniversitesi'nde devam ediyorum.",
  },
  project: {
    eyebrow: "03 / Öne Çıkan Proje",
    title: "Bir fikri çalışan bir sisteme dönüştürmek.",
    description:
      "Devre bağlantısından ölçüme uzanan uygulamalı bir hoparlör geliştirme çalışması.",
  },
  skills: {
    eyebrow: "04 / Teknik Beceriler",
    title: "Uygulamayla gelişen teknik araç seti.",
    description:
      "Yüzdeler yerine, kullandığım ve öğrenmeye devam ettiğim beceriler.",
  },
  languages: {
    eyebrow: "05 / Diller",
    title: "Dil bilgisi",
  },
  contact: {
    eyebrow: "06 / İletişim",
    title: "Bir fikir veya proje hakkında konuşalım.",
    description:
      "Elektronik, donanım ve mühendislik projeleri hakkında iletişime geçmek için e-posta gönderebilirsiniz.",
    emailAction: "E-posta Gönder",
  },
} as const;
