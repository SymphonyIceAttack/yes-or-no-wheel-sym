import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { type LanguageType, t } from "@/lib/translations";

interface FAQProps {
  language: LanguageType;
}

export function FAQ({ language }: FAQProps) {
  const faqs = [
    {
      question: t("faq1Question", language),
      answer: t("faq1Answer", language),
    },
    {
      question: t("faq2Question", language),
      answer: t("faq2Answer", language),
    },
    {
      question: t("faq3Question", language),
      answer: t("faq3Answer", language),
    },
    {
      question: t("faq4Question", language),
      answer: t("faq4Answer", language),
    },
    {
      question: t("faq5Question", language),
      answer: t("faq5Answer", language),
    },
    {
      question: t("faq6Question", language),
      answer: t("faq6Answer", language),
    },
    {
      question: t("faq7Question", language),
      answer: t("faq7Answer", language),
    },
  ];

  return (
    <section className="mb-16">
      <Card className="p-8 bg-card/80 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {t("faqTitle", language)}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-pretty">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </section>
  );
}
