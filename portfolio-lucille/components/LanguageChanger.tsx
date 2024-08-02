"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"; // Assurez-vous que le chemin d'importation est correct

export default function LanguageMenu() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const currentPathname = usePathname();

  const [currentLocale, setCurrentLocale] = useState(i18n.language);

  useEffect(() => {
    setCurrentLocale(i18n.language);
  }, [i18n.language]);

  const changeLanguage = async (newLocale: string) => {
    setCurrentLocale(newLocale);

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (newLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      await router.push("/" + newLocale + currentPathname);
    } else {
      await router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="-col-start-3 sm:-col-start-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-lg lg:text-2xl">
              {currentLocale.toUpperCase()}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-3 px-6 py-2 w-fit">
                <li>
                  <NavigationMenuLink
                    className="cursor-pointer text-base lg:text-xl"
                    onClick={() => changeLanguage("en")}
                  >
                    EN
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    className="cursor-pointer text-base lg:text-xl"
                    onClick={() => changeLanguage("fr")}
                  >
                    FR
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
