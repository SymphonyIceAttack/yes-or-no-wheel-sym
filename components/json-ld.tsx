"use client";

import { useEffect } from "react";

interface JsonLdProps {
  data: object | object[];
}

export function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "json-ld-schema";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("json-ld-schema");
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [data]);

  return null;
}
