import { browser } from "$app/environment";
import { nostrPublicKey } from "$lib/stores";
import { get } from "svelte/store";
import { initLocale, locales } from "../locales";
import { nostr } from "./nostr-tool";

export let kv: Keyva;
if (browser) kv = new Keyva({ name: `backpack-v1` });

export const kv_cfg = {
    nostrKey: `*:nostr:key`
}

export const getLocale = (navigatorLocale: string): string => {
    let loc: string = initLocale;
    const translationLocales = get(locales);
    if (translationLocales.some(i => i === navigatorLocale.toLowerCase())) loc = navigator.language;
    else if (translationLocales.some(i => i === navigatorLocale.slice(0, 2).toLowerCase())) loc = navigatorLocale.slice(0, 2);
    return loc
};


export const createLocalKeypair = async (): Promise<void> => {
    try {
        const secretKey = nostr.genSecretKey();
        await kv.set(kv_cfg.nostrKey, secretKey);
        nostrPublicKey.set(nostr.derivePublicKey(secretKey));
    } catch (e) {
        console.log(`(error) createLocalKeypair `, e);
    }
};

export const deleteLocalKeypair = async (): Promise<void> => {
    try {
        await kv.delete(kv_cfg.nostrKey);
        nostrPublicKey.set(``);
    } catch (e) {
        console.log(`(error) deleteLocalKeypair `, e);
    }
};