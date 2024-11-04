import { bytesToHex, hexToBytes } from '@noble/hashes/utils';
import { generateSecretKey, getPublicKey } from 'nostr-tools';

class NostrTool {
    private genKeyBytes(): Uint8Array {
        return generateSecretKey();
    };

    private getKeyHex(bytes: Uint8Array): string {
        return bytesToHex(bytes);
    };

    private getKeyBytes(hex: string): Uint8Array {
        return hexToBytes(hex);
    };

    public genSecretKey(): string {
        return this.getKeyHex(this.genKeyBytes());
    };

    public derivePublicKey(secretKeyHex?: string): string {
        if (!secretKeyHex) throw new Error(`Missing secret key`)
        return getPublicKey(this.getKeyBytes(secretKeyHex));
    }
}

export const nostr = new NostrTool();
