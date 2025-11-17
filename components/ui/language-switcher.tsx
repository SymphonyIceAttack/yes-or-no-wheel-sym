"use client";

import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type Language, languageNames } from "@/lib/lang";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = pathname.split("/")[1] as Language;

  const changeLanguage = (newLang: Language) => {
    if (!pathname.startsWith(`/${currentLang}`)) {
      router.push(`/${newLang}`);
    } else {
      const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`);
      router.push(newPathname);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          {languageNames[currentLang]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languageNames).map(([lang, name]) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => changeLanguage(lang as Language)}
            className={currentLang === lang ? "bg-accent" : ""}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
