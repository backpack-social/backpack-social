import i18n from '@sveltekit-i18n/base';
import type { Config } from '@sveltekit-i18n/parser-icu';
import parser from '@sveltekit-i18n/parser-icu';
import locales_keys from './locales.json';

type Locale = keyof typeof locales_keys;

type LanguageConfig = {
	default?: string;
	value?: string;
};

const translationsKeys: Record<Locale, any> = {
	en: { locales_keys },
};
export const initLocale: Locale = `en`;

const config: Config<LanguageConfig> = {
	initLocale,
	translations: translationsKeys,
	parser: parser(),
	loaders: [
		...Object.keys(translationsKeys).map((locale) => ({
			locale,
			key: `common`,
			loader: async () => (await import(`./${locale}/common.json`)).default
		})),
	]
};

export const {
	t,
	loading: loadingTranslations,
	locales,
	locale,
	translations,
	loadTranslations
} = new i18n(config);

loadingTranslations.subscribe(async ($loading) => {
	if ($loading) await loadingTranslations.toPromise();
});


