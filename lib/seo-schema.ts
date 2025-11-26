/**
 * JSON-LD Schema Generator for SEO
 * Generates structured data for better search engine visibility
 */

export interface BaseSchema {
  "@context": "https://schema.org";
  "@type": string;
}

export interface WebAppSchema extends BaseSchema {
  "@type": "WebApplication";
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: "Web Browser" | "All";
  offers: {
    "@type": "Offer";
    price: "0";
    priceCurrency: "USD";
  };
  aggregateRating?: {
    "@type": "AggregateRating";
    ratingValue: string;
    ratingCount: string;
  };
  potentialAction?: {
    "@type": "SearchAction";
    target: {
      "@type": "EntryPoint";
      urlTemplate: string;
    };
    "query-input": string;
  };
  inLanguage?: string | string[];
  availableLanguage?: {
    "@type": "Language";
    name: string;
    alternateName: string;
  }[];
  author?: {
    "@type": "Organization";
    name: string;
    url: string;
  };
  publisher?: {
    "@type": "Organization";
    name: string;
    logo?: {
      "@type": "ImageObject";
      url: string;
    };
  };
  browserRequirements?: string;
  screenshot?: string;
  softwareVersion?: string;
  datePublished?: string;
  dateModified?: string;
}

export interface SoftwareSchema extends BaseSchema {
  "@type": "SoftwareApplication";
  name: string;
  description: string;
  url: string;
  applicationCategory: "Utility" | "Entertainment" | "Productivity";
  applicationSubCategory?: string;
  operatingSystem: "Web-based" | "Any";
  offers: {
    "@type": "Offer";
    price: "0";
    priceCurrency: "USD";
  };
  featureList?: string[];
  aggregateRating?: {
    "@type": "AggregateRating";
    ratingValue: string;
    bestRating?: string;
    ratingCount: string;
  };
  author?: {
    "@type": "Organization";
    name: string;
  };
  publisher?: {
    "@type": "Organization";
    name: string;
  };
  downloadUrl?: string;
  softwareVersion?: string;
  datePublished?: string;
  dateModified?: string;
  keywords?: string;
}

export interface WebSiteSchema extends BaseSchema {
  "@type": "WebSite";
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    "@type": "SearchAction";
    target: {
      "@type": "EntryPoint";
      urlTemplate: string;
    };
    "query-input": string;
  };
  publisher?: {
    "@type": "Organization";
    name: string;
  };
}

export interface BreadcrumbSchema extends BaseSchema {
  "@type": "BreadcrumbList";
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }[];
}

export interface FAQSchema extends BaseSchema {
  "@type": "FAQPage";
  mainEntity: {
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }[];
}

/**
 * Generate WebApp schema with multilingual support
 */
export function generateWebAppSchema(lang: string = "en"): WebAppSchema {
  const baseUrl = "https://yesornowheel.top";

  const localizedData = {
    en: {
      name: "Yes or No Wheel - Make Quick Decisions Instantly",
      description:
        "Spin the wheel to get a quick Yes or No answer. A fun and simple decision-making tool for when you need help making choices. Perfect for quick decisions!",
      keywords:
        "yes no wheel, decision maker, wheel spinner, random choice, decision tool",
    },
    ru: {
      name: "Колесо Да или Нет - Принимайте быстрые решения мгновенно",
      description:
        "Крутите колесо, чтобы получить быстрый ответ Да или Нет. Забавный и простой инструмент для принятия решений, когда вам нужна помощь в выборе.",
      keywords:
        "да нет колесо, генератор решений, случайный выбор, инструмент принятия решений",
    },
    ja: {
      name: "はい/いいえホイール - 素早く決断を下す",
      description:
        "ホイールを回して、すぐに「はい」または「いいえ」の答えを得ましょう。決断に迷った時の楽しくシンプルなツールです。",
      keywords: "はいいいえ ホイール, 決断, 乱数, 意思決定",
    },
    es: {
      name: "Rueda de Sí o No - Toma decisiones rápidas al instante",
      description:
        "Gira la rueda para obtener una respuesta rápida de Sí o No. Una herramienta divertida y simple para tomar decisiones cuando necesites ayuda.",
      keywords:
        "rueda si no, toma decisiones, girador aleatorio, herramienta de decisión",
    },
  };

  const data =
    localizedData[lang as keyof typeof localizedData] || localizedData.en;

  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: data.name,
    description: data.description,
    url: lang === "en" ? baseUrl : `${baseUrl}/${lang}`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Yes or No Wheel",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Yes or No Wheel",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/android-chrome-512x512.png`,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1520",
    },
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    datePublished: "2024-01-01",
    dateModified: "2025-11-26",
    inLanguage: lang,
    availableLanguage: [
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Русский", alternateName: "ru" },
      { "@type": "Language", name: "日本語", alternateName: "ja" },
      { "@type": "Language", name: "Español", alternateName: "es" },
    ],
  };
}

/**
 * Generate SoftwareApplication schema
 */
export function generateSoftwareSchema(): SoftwareSchema {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Yes or No Wheel",
    description:
      "A web-based decision-making tool that generates random Yes or No answers through an interactive wheel spinner.",
    url: "https://yesornowheel.top",
    applicationCategory: "Utility",
    applicationSubCategory: "Decision Support Tool",
    operatingSystem: "Web-based",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Interactive decision wheel",
      "Random yes/no generator",
      "Multiple language support",
      "Dark/light theme toggle",
      "Instant decision making",
      "No registration required",
    ],
    author: {
      "@type": "Organization",
      name: "Yes or No Wheel",
    },
    publisher: {
      "@type": "Organization",
      name: "Yes or No Wheel",
    },
    softwareVersion: "2.0",
    datePublished: "2024-01-01",
    dateModified: "2025-11-26",
    keywords:
      "decision maker, wheel spinner, yes no generator, random choice, decision tool, spinning wheel",
  };
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema(): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yes or No Wheel",
    url: "https://yesornowheel.top",
    description:
      "Interactive decision-making tool that helps you make quick yes or no choices through a spinning wheel interface.",
    publisher: {
      "@type": "Organization",
      name: "Yes or No Wheel",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://yesornowheel.top/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(
  _lang: string,
  breadcrumbs: { name: string; url: string }[],
): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(
  _lang: string,
  faqs: { question: string; answer: string }[],
): FAQSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate complete schema set for a page
 */
export function generateCompleteSchemaSet(
  lang: string,
  pageType: "home" | "about" | "contact" | "privacy" = "home",
) {
  const schemas: BaseSchema[] = [
    generateWebSiteSchema(),
    generateWebAppSchema(lang),
    generateSoftwareSchema(),
  ];

  if (pageType === "home") {
    const localizedFAQs = {
      en: [
        {
          question: "How does the Yes or No Wheel work?",
          answer:
            "Simply click or tap the spin button and the wheel will randomly stop at either Yes or No, giving you an instant decision.",
        },
        {
          question: "Is the decision truly random?",
          answer:
            "Yes, the wheel uses a random number generator to ensure fair and unbiased results every time you spin.",
        },
        {
          question: "Can I use this for important decisions?",
          answer:
            "While fun and helpful for small decisions, this tool should be used for entertainment purposes. For important life decisions, consider all factors carefully.",
        },
        {
          question: "Do I need to create an account?",
          answer:
            "No registration required! You can start using the Yes or No Wheel immediately without any signup process.",
        },
      ],
      ru: [
        {
          question: "Как работает Колесо Да или Нет?",
          answer:
            "Просто нажмите кнопку вращения, и колесо случайно остановится на Да или Нет, предоставив вам мгновенное решение.",
        },
        {
          question: "Решение действительно случайное?",
          answer:
            "Да, колесо использует генератор случайных чисел для обеспечения честных и непредвзятых результатов при каждом вращении.",
        },
        {
          question: "Можно ли использовать это для важных решений?",
          answer:
            "Хотя это весело и полезно для небольших решений, этот инструмент следует использовать в развлекательных целях. Для важных жизненных решений тщательно взвесьте все факторы.",
        },
      ],
      ja: [
        {
          question: "はい/いいえ Wheelshell работает?",
          answer:
            "スピンボタンをクリックまたはタップするだけで、車輪はランダムに「はい」または「いいえ」で止まり、即座に決断を下します。",
        },
        {
          question: "決定は本当にランダムですか?",
          answer:
            "はい、車輪は公正で偏りのない結果を得るために乱数生成器を使用しています。",
        },
      ],
      es: [
        {
          question: "¿Cómo funciona la Rueda de Sí o No?",
          answer:
            "Simplemente haz clic en el botón de giro y la rueda se detendrá aleatoriamente en Sí o No, dándote una decisión instantánea.",
        },
        {
          question: "¿Es la decisión verdaderamente aleatoria?",
          answer:
            "Sí, la rueda usa un generador de números aleatorios para asegurar resultados justos e imparciales cada vez que giras.",
        },
      ],
    };

    const faqs =
      localizedFAQs[lang as keyof typeof localizedFAQs] || localizedFAQs.en;
    schemas.push(generateFAQSchema(lang, faqs));
  }

  return schemas;
}
