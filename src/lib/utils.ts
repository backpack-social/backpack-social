import { get } from "svelte/store";
import { initLocale, locales } from "./locales";

export const getLocale = (navigatorLocale: string): string => {
    let loc: string = initLocale;
    const translationLocales = get(locales);
    if (translationLocales.some(i => i === navigatorLocale.toLowerCase())) loc = navigator.language;
    else if (translationLocales.some(i => i === navigatorLocale.slice(0, 2).toLowerCase())) loc = navigatorLocale.slice(0, 2);
    return loc
};