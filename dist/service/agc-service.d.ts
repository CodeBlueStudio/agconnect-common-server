import { AGCClient } from "../agc-client/agc-client";
export type factory = (...args: any) => AGCService;
export interface AGCService {
    initialize(client: AGCClient): void;
    getServiceName(): string;
}
