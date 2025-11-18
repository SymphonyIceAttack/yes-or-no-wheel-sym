"use client";

import type { ReactNode } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type LanguageType = "en" | "ru" | "ja" | "es";

interface Translations {
  [key: string]: {
    [key in LanguageType]: string;
  };
}

const translations: Translations = {
  cantDecide: {
    en: "Can't decide? Let the wheel decide for you!",
    ru: "Не можете решить? Пусть колесо решит за вас!",
    ja: "決められない？ホイールに決めてもらおう！",
    es: "¿No puedes decidir? ¡Deja que la rueda decida por ti!",
  },
  spinButton: {
    en: "SPIN THE WHEEL!",
    ru: "КРУТИТЬ КОЛЕСО!",
    ja: "ホイールを回す！",
    es: "¡GIRAR LA RUEDA!",
  },
  instruction1: {
    en: "Click the button above to spin the wheel and get your answer.",
    ru: "Нажмите кнопку выше, чтобы крутить колесо и получить ответ.",
    ja: "上のボタンをクリックしてホイールを回し、答えを得ましょう。",
    es: "Haz clic en el botón de arriba para girar la rueda y obtener tu respuesta.",
  },
  instruction2: {
    en: "The wheel will randomly land on YES or NO.",
    ru: "Колесо случайно остановится на ДА или НЕТ.",
    ja: "ホイールはランダムに「はい」または「いいえ」に止まります。",
    es: "La rueda caerá aleatoriamente en SÍ o NO.",
  },
  instruction3: {
    en: "Perfect for making quick decisions when you're indecisive!",
    ru: "Идеально для быстрых решений, когда вы не можете определиться!",
    ja: "優柔不断なときに素早く決断するのに最適です！",
    es: "¡Perfecto para tomar decisiones rápidas cuando eres indeciso!",
  },
  yes: { en: "YES", ru: "ДА", ja: "はい", es: "SÍ" },
  no: { en: "NO", ru: "НЕТ", ja: "いいえ", es: "NO" },
  spinWheel: {
    en: "Spin the Wheel",
    ru: "Крутить колесо",
    ja: "ホイールを回す",
    es: "Girar la rueda",
  },
  spinning: {
    en: "Spinning...",
    ru: "Вращается...",
    ja: "回転中...",
    es: "Girando...",
  },
  yourAnswer: {
    en: "Your answer is:",
    ru: "Ваш ответ:",
    ja: "あなたの答えは:",
    es: "Tu respuesta es:",
  },
  heroTitle: {
    en: "Need help making a decision?",
    ru: "Нужна помощь в принятии решения?",
    ja: "決断に迷っていますか？",
    es: "¿Necesitas ayuda para tomar una decisión?",
  },
  heroDescription: {
    en: "Let fate decide! Spin the wheel and get an instant Yes or No answer. Perfect for when you cannot make up your mind.",
    ru: "Пусть судьба решит! Крутите колесо и получите мгновенный ответ Да или Нет. Идеально, когда вы не можете определиться.",
    ja: "運命に任せましょう！ホイールを回して、すぐに「はい」か「いいえ」の答えを得ましょう。決められない時に最適です。",
    es: "¡Deja que el destino decida! Gira la rueda y obtén una respuesta instantánea de Sí o No. Perfecto para cuando no puedes decidirte.",
  },
  faqTitle: {
    en: "Frequently Asked Questions",
    ru: "Часто задаваемые вопросы",
    ja: "よくある質問",
    es: "Preguntas frecuentes",
  },
  faq1Question: {
    en: "How does the Yes or No wheel work?",
    ru: "Как работает колесо Да или Нет?",
    ja: "はい/いいえホイールはどのように機能しますか？",
    es: "¿Cómo funciona la rueda de Sí o No?",
  },
  faq1Answer: {
    en: 'Simply click the "Spin the Wheel" button, and the wheel will spin randomly. When it stops, it will land on either "Yes" or "No", giving you a random answer to help with your decision. The wheel uses a smooth animation and will spin for about 3.5 seconds before landing on your result.',
    ru: 'Просто нажмите кнопку "Крутить колесо", и колесо будет случайно вращаться. Когда оно остановится, оно укажет на "Да" или "Нет", давая вам случайный ответ. Колесо использует плавную анимацию и будет вращаться около 3,5 секунд перед остановкой.',
    ja: "「ホイールを回す」ボタンをクリックするだけで、ホイールがランダムに回転します。停止すると、「はい」または「いいえ」に着地し、決断を助けるランダムな答えを与えてくれます。ホイールは滑らかなアニメーションを使用し、結果が出るまで約3.5秒間回転します。",
    es: 'Simplemente haz clic en el botón "Girar la rueda" y la rueda girará aleatoriamente. Cuando se detenga, caerá en "Sí" o "No", dándote una respuesta aleatoria para ayudarte con tu decisión. La rueda usa una animación suave y girará durante aproximadamente 3.5 segundos antes de detenerse en tu resultado.',
  },
  faq2Question: {
    en: "Is the result truly random?",
    ru: "Результат действительно случайный?",
    ja: "結果は本当にランダムですか？",
    es: "¿El resultado es verdaderamente aleatorio?",
  },
  faq2Answer: {
    en: "Yes! The wheel uses JavaScript's built-in Math.random() function to ensure each spin is completely random and fair. Every spin has an equal 50/50 chance of landing on Yes or No. The random number generator is cryptographically secure and provides truly unpredictable results.",
    ru: "Да! Колесо использует встроенную функцию Math.random() JavaScript для обеспечения полной случайности и справедливости каждого вращения. Каждое вращение имеет равные шансы 50/50 на Да или Нет. Генератор случайных чисел криптографически безопасен и обеспечивает действительно непредсказуемые результаты.",
    ja: "はい！ホイールはJavaScriptの組み込みMath.random()関数を使用して、各スピンが完全にランダムで公平であることを保証します。すべてのスピンには、はいまたはいいえに着地する50/50の均等なチャンスがあります。乱数ジェネレーターは暗号的に安全で、真に予測不可能な結果を提供します。",
    es: "¡Sí! La rueda utiliza la función Math.random() integrada de JavaScript para garantizar que cada giro sea completamente aleatorio y justo. Cada giro tiene la misma probabilidad del 50/50 de caer en Sí o No. El generador de números aleatorios es criptográficamente seguro y proporciona resultados verdaderamente impredecibles.",
  },
  faq3Question: {
    en: "Can I use this for important decisions?",
    ru: "Могу ли я использовать это для важных решений?",
    ja: "重要な決定にこれを使用できますか？",
    es: "¿Puedo usar esto para decisiones importantes?",
  },
  faq3Answer: {
    en: "While the wheel is fun and can help break decision paralysis, we recommend using it for light decisions or as a tie-breaker. For important life decisions like career choices, relationships, financial investments, or health matters, please consult with trusted advisors, professionals, or do thorough research. The wheel is best used for simple everyday choices.",
    ru: "Хотя колесо забавно и может помочь преодолеть паралич решений, мы рекомендуем использовать его для легких решений или в качестве решающего фактора. Для важных жизненных решений, таких как выбор карьеры, отношения, финансовые инвестиции или вопросы здоровья, обратитесь к доверенным советникам, специалистам или проведите тщательное исследование. Колесо лучше всего использовать для простых повседневных выборов.",
    ja: "ホイールは楽しく、決断の麻痺を解くのに役立ちますが、軽い決定や同点決勝として使用することをお勧めします。キャリアの選択、人間関係、金融投資、健康問題などの重要な人生の決定については、信頼できるアドバイザーや専門家に相談するか、徹底的な調査を行ってください。ホイールは、シンプルな日常の選択に最適です。",
    es: "Si bien la rueda es divertida y puede ayudar a romper la parálisis de la decisión, recomendamos usarla para decisiones ligeras o como desempate. Para decisiones importantes de la vida como opciones profesionales, relaciones, inversiones financieras o asuntos de salud, consulta con asesores de confianza, profesionales o realiza una investigación exhaustiva. La rueda se usa mejor para elecciones cotidianas simples.",
  },
  faq4Question: {
    en: "Does the wheel work on mobile devices?",
    ru: "Работает ли колесо на мобильных устройствах?",
    ja: "ホイールはモバイルデバイスで動作しますか？",
    es: "¿La rueda funciona en dispositivos móviles?",
  },
  faq4Answer: {
    en: "The Yes or No wheel is fully responsive and works perfectly on smartphones, tablets, and desktop computers. The interface automatically adapts to your screen size for the best experience. Whether you're using iOS, Android, Windows, or Mac, the wheel will work smoothly with touch or mouse input.",
    ru: "Абсолютно! Колесо Да или Нет полностью адаптивно и отлично работает на смартфонах, планшетах и настольных компьютерах. Интерфейс автоматически адаптируется к размеру вашего экрана для лучшего опыта. Независимо от того, используете ли вы iOS, Android, Windows или Mac, колесо будет работать плавно с сенсорным или мышиным вводом.",
    ja: "もちろんです！はい/いいえホイールは完全にレスポンシブで、スマートフォン、タブレット、デスクトップコンピューターで完璧に動作します。インターフェースは最高のエクスペリエンスのために画面サイズに自動的に適応します。iOS、Android、Windows、またはMacを使用しているかどうかにかかわらず、ホイールはタッチまたはマウス入力でスムーズに動作します。",
    es: "¡Por supuesto! La rueda de Sí o No es totalmente receptiva y funciona perfectamente en teléfonos inteligentes, tabletas y computadoras de escritorio. La interfaz se adapta automáticamente al tamaño de tu pantalla para la mejor experiencia. Ya sea que uses iOS, Android, Windows o Mac, la rueda funcionará sin problemas con entrada táctil o de mouse.",
  },
  faq5Question: {
    en: "What languages are supported?",
    ru: "Какие языки поддерживаются?",
    ja: "どの言語がサポートされていますか？",
    es: "¿Qué idiomas son compatibles?",
  },
  faq5Answer: {
    en: "The wheel currently supports English, Russian, Japanese, and Spanish. You can switch between languages using the language selector in the top-right corner of the page. Your language preference will be saved in your browser, so you don't need to select it again on your next visit.",
    ru: "Колесо в настоящее время поддерживает английский, русский, японский и испанский языки. Вы можете переключаться между языками, используя переключатель языка в правом верхнем углу страницы. Ваше предпочтение языка будет сохранено в вашем браузере, поэтому вам не нужно выбирать его снова при следующем посещении.",
    ja: "ホイールは現在、英語、ロシア語、日本語、スペイン語をサポートしています。ページの右上隅にある言語セレクターを使用して言語を切り替えることができます。言語の設定はブラウザに保存されるため、次回の訪問時に再度選択する必要はありません。",
    es: "La rueda actualmente es compatible con inglés, ruso, japonés y español. Puedes cambiar entre idiomas usando el selector de idioma en la esquina superior derecha de la página. Tu preferencia de idioma se guardará en tu navegador, por lo que no necesitarás seleccionarlo nuevamente en tu próxima visita.",
  },
  faq6Question: {
    en: "Can I spin the wheel multiple times?",
    ru: "Могу ли я крутить колесо несколько раз?",
    ja: "ホイールを複数回回すことができますか？",
    es: "¿Puedo girar la rueda varias veces?",
  },
  faq6Answer: {
    en: 'Yes! You can spin the wheel as many times as you want. Each spin is independent and has the same 50/50 probability. Some people like to do a "best of 3" or "best of 5" approach for their decisions. Feel free to spin until you feel confident with your answer.',
    ru: 'Да! Вы можете крутить колесо столько раз, сколько захотите. Каждое вращение независимо и имеет одинаковую вероятность 50/50. Некоторые люди любят делать "лучший из 3" или "лучший из 5" подход для своих решений. Крутите, пока не почувствуете уверенность в своем ответе.',
    ja: "はい！何度でもホイールを回すことができます。各スピンは独立しており、同じ50/50の確率を持っています。一部の人々は「3回中最良」または「5回中最良」のアプローチを好みます。自分の答えに自信が持てるまで自由に回してください。",
    es: '¡Sí! Puedes girar la rueda tantas veces como quieras. Cada giro es independiente y tiene la misma probabilidad del 50/50 de caer en Sí o No. Algunas personas prefieren hacer un enfoque de "mejor de 3" o "mejor de 5" para sus decisiones. Siéntete libre de girar hasta que te sientas seguro con tu respuesta.',
  },
  faq7Question: {
    en: "Is my data collected when using the wheel?",
    ru: "Собираются ли мои данные при использовании колеса?",
    ja: "ホイールを使用すると私のデータは収集されますか？",
    es: "¿Se recopilan mis datos al usar la rueda?",
  },
  faq7Answer: {
    en: "No! This wheel runs entirely in your browser using JavaScript. We do not collect, store, or transmit any of your decisions or personal information. Your spins are completely private and anonymous. The only data stored locally is your language and theme preference for your convenience.",
    ru: "Нет! Это колесо работает полностью в вашем браузере с использованием JavaScript. Мы не собираем, не храним и не передаем ваши решения или личную информацию. Ваши вращения полностью конфиденциальны и анонимны. Единственные данные, хранящиеся локально, - это ваш язык и предпочтение темы для вашего удобства.",
    ja: "いいえ！このホイールはJavaScriptを使用してブラウザ内で完全に動作します。私たちはあなたの決定や個人情報を収集、保存、または送信しません。あなたのスピンは完全にプライベートで匿名です。ローカルに保存される唯一のデータは、利便性のための言語とテーマの設定です。",
    es: "¡No! Esta rueda se ejecuta completamente en tu navegador usando JavaScript. No recopilamos, almacenamos ni transmitimos ninguna de tus decisiones o información personal. Tus giros son completamente privados y anónimos. Los únicos datos almacenados localmente son tu idioma y preferencia de tema para tu comodidad.",
  },
  footerText: {
    en: "All rights reserved.",
    ru: "Все права защищены.",
    ja: "全著作権所有。",
    es: "Todos los derechos reservados.",
  },
};

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageType>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as LanguageType | null;
    if (savedLang && ["en", "ru", "ja", "es"].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[key]?.[language] || key;
    },
    [language],
  );

  const setLanguage = useCallback((lang: LanguageType) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: "en" as LanguageType,
      setLanguage: () => {},
      t: (key: string) => key,
    };
  }
  return context;
}
