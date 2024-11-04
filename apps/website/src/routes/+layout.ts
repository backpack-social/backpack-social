import { loadingTranslations, loadTranslations, locale } from '$lib/locales';
import { nostrPublicKey } from '$lib/stores';
import { getLocale, kv, kv_cfg } from '$lib/utils';
import { nostr } from '$lib/utils/nostr-tool';
import type { LayoutLoad, LayoutLoadEvent } from './$types';

export const prerender = true;
export const ssr = false;
export const trailingSlash = 'always';

export const load: LayoutLoad = async ({ url }: LayoutLoadEvent) => {
    try {
        const loc = getLocale(navigator.language).toLowerCase();
        locale.set(loc);
        await loadTranslations(loc, url.pathname);
        await loadingTranslations.toPromise();
        const localSessionNostrKey = await kv.get(kv_cfg.nostrKey);
        if (localSessionNostrKey) {
            nostrPublicKey.set(nostr.derivePublicKey(localSessionNostrKey));
        }
    } catch (e) {
        console.log(`(layout) error `, e)
    } finally {
        return {};
    };
};
