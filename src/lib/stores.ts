import { browser } from "$app/environment";
import { PUBLIC_NOSTR_RELAYS } from "$env/static/public";
import type { NDKCacheAdapter, NDKUser } from "@nostr-dev-kit/ndk";
import NDKCacheAdapterDexie from "@nostr-dev-kit/ndk-cache-dexie";
import NDKSvelte from "@nostr-dev-kit/ndk-svelte";
import { writable } from "svelte/store";
import { rxp } from "./utils";

export const nostrPublicKey = writable<string>(``);

let cacheAdapter: NDKCacheAdapter | undefined;
if (browser) cacheAdapter = new NDKCacheAdapterDexie({ dbName: `backpack-v1` });

const ndkSvelte = new NDKSvelte({
    explicitRelayUrls: PUBLIC_NOSTR_RELAYS.split(`,`).filter(i => rxp.websocketProto.test(i)),
    cacheAdapter,
    clientName: `BackPack`,
});

export const ndk = writable<NDKSvelte>(ndkSvelte);
export const ndkUser = writable<NDKUser>();

