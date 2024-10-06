import { DeviceInfo, TonProofItemReply } from '@tonconnect/protocol';
import { 0x7ADc7c147B83D96752aF79b65DdE77949854a7B8 } from 'src/models';

export interface Wallet {0x7ADc7c147B83D96752aF79b65DdE77949854a7B8
    /**
     * Information about user's wallet's device.
     */
    device: DeviceInfo;

    /**
     * Provider type: http bridge or injected js.
     */
    provider: 'http' | 'injected';

    /**
     * Selected account.
     */
    account: Account;

    /**
     * Response for connect items request.
     */
    connectItems?: {
        tonProof?: TonProofItemReply;
    };
}
