import { loadingTranslations, loadTranslations, locale } from '$lib/locales';
import { getLocale } from '$lib/utils';
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
    } catch (e) {
        console.log(`(layout) error `, e)
    } finally {
        return {};
    };
};
