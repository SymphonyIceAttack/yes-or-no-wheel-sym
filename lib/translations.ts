export type LanguageType = "en" | "ru" | "ja" | "es";

interface Translations {
  [key: string]: {
    [key in LanguageType]: string;
  };
}

export const translations: Translations = {
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
    en: "Yes or No Wheel",
    ru: "Колесо Да или Нет",
    ja: "はい/いいえホイール",
    es: "Rueda de Sí o No",
  },
  heroDescription: {
    en: "Need help making a decision? Let fate decide! Spin the wheel and get an instant Yes or No answer.",
    ru: "Нужна помощь в принятии решения? Пусть судьба решит! Крутите колесо и получите мгновенный ответ Да или Нет.",
    ja: "決断に迷っていますか？運命に任せましょう！ホイールを回して、すぐに「はい」か「いいえ」の答えを得ましょう。",
    es: "¿Necesitas ayuda para tomar una decisión? ¡Deja que el destino decida! Gira la rueda y obtén una respuesta instantánea de Sí o No.",
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
    en: 'Simply click the "Spin the Wheel" button, and the wheel will spin randomly. When it stops, it will land on either "Yes" or "No", giving you a random answer to help with your decision.',
    ru: 'Просто нажмите кнопку "Крутить колесо", и колесо будет случайно вращаться. Когда оно остановится, оно укажет на "Да" или "Нет".',
    ja: "「ホイールを回す」ボタンをクリックするだけで、ホイールがランダムに回転します。停止すると、「はい」または「いいえ」に着地します。",
    es: 'Simplemente haz clic en el botón "Girar la rueda" y la rueda girará aleatoriamente. Cuando se detenga, caerá en "Sí" o "No".',
  },
  faq2Question: {
    en: "Is the result truly random?",
    ru: "Результат действительно случайный?",
    ja: "結果は本当にランダムですか？",
    es: "¿El resultado es verdaderamente aleatorio?",
  },
  faq2Answer: {
    en: "Yes! The wheel uses JavaScript's built-in Math.random() function to ensure each spin is completely random and fair. Every spin has an equal 50/50 chance.",
    ru: "Да! Колесо использует встроенную функцию Math.random() для обеспечения полной случайности. Каждое вращение имеет равные шансы 50/50.",
    ja: "はい！ホイールはJavaScriptのMath.random()関数を使用して、完全にランダムで公平であることを保証します。",
    es: "¡Sí! La rueda utiliza la función Math.random() de JavaScript para garantizar que cada giro sea completamente aleatorio y justo.",
  },
  faq3Question: {
    en: "Can I use this for important decisions?",
    ru: "Могу ли я использовать это для важных решений?",
    ja: "重要な決定にこれを使用できますか？",
    es: "¿Puedo usar esto para decisiones importantes?",
  },
  faq3Answer: {
    en: "While the wheel is fun and can help break decision paralysis, we recommend using it for light decisions. For important life decisions, please consult with professionals.",
    ru: "Хотя колесо забавно, мы рекомендуем использовать его для легких решений. Для важных решений обратитесь к специалистам.",
    ja: "ホイールは楽しいですが、重要な決定には専門家に相談することをお勧めします。",
    es: "Si bien la rueda es divertida, recomendamos usarla para decisiones ligeras. Para decisiones importantes, consulta con profesionales.",
  },
  faq4Question: {
    en: "Does the wheel work on mobile devices?",
    ru: "Работает ли колесо на мобильных устройствах?",
    ja: "ホイールはモバイルデバイスで動作しますか？",
    es: "¿La rueda funciona en dispositivos móviles?",
  },
  faq4Answer: {
    en: "Yes! The wheel is fully responsive and works perfectly on smartphones, tablets, and desktop computers.",
    ru: "Да! Колесо полностью адаптивно и отлично работает на смартфонах, планшетах и компьютерах.",
    ja: "はい！ホイールは完全にレスポンシブで、スマートフォン、タブレット、デスクトップで完璧に動作します。",
    es: "¡Sí! La rueda es totalmente receptiva y funciona perfectamente en teléfonos, tabletas y computadoras.",
  },
  faq5Question: {
    en: "What languages are supported?",
    ru: "Какие языки поддерживаются?",
    ja: "どの言語がサポートされていますか？",
    es: "¿Qué idiomas son compatibles?",
  },
  faq5Answer: {
    en: "The wheel supports English, Russian, Japanese, and Spanish. Switch languages using the selector in the top-right corner.",
    ru: "Колесо поддерживает английский, русский, японский и испанский языки. Переключайте языки в правом верхнем углу.",
    ja: "ホイールは英語、ロシア語、日本語、スペイン語をサポートしています。右上のセレクターで切り替えられます。",
    es: "La rueda es compatible con inglés, ruso, japonés y español. Cambia de idioma usando el selector en la esquina superior derecha.",
  },
  faq6Question: {
    en: "Can I spin the wheel multiple times?",
    ru: "Могу ли я крутить колесо несколько раз?",
    ja: "ホイールを複数回回すことができますか？",
    es: "¿Puedo girar la rueda varias veces?",
  },
  faq6Answer: {
    en: "Yes! You can spin as many times as you want. Each spin is independent with the same 50/50 probability.",
    ru: "Да! Вы можете крутить сколько угодно раз. Каждое вращение независимо с вероятностью 50/50.",
    ja: "はい！何度でも回せます。各スピンは独立しており、同じ50/50の確率です。",
    es: "¡Sí! Puedes girar tantas veces como quieras. Cada giro es independiente con la misma probabilidad del 50/50.",
  },
  faq7Question: {
    en: "Is my data collected when using the wheel?",
    ru: "Собираются ли мои данные?",
    ja: "データは収集されますか？",
    es: "¿Se recopilan mis datos?",
  },
  faq7Answer: {
    en: "No! The wheel runs entirely in your browser. We do not collect, store, or transmit any of your decisions or personal information.",
    ru: "Нет! Колесо работает полностью в браузере. Мы не собираем и не храним ваши данные.",
    ja: "いいえ！ホイールはブラウザ内で完全に動作します。データは収集されません。",
    es: "¡No! La rueda se ejecuta completamente en tu navegador. No recopilamos ningún dato personal.",
  },
  footerText: {
    en: "All rights reserved.",
    ru: "Все права защищены.",
    ja: "全著作権所有。",
    es: "Todos los derechos reservados.",
  },
};

export function t(key: string, lang: LanguageType): string {
  return translations[key]?.[lang] || key;
}
