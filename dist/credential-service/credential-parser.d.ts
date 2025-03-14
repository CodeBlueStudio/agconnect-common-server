import { CredentialService } from './credential-service';
export interface UserDefinedGetClientSecret {
    (): string;
}
export declare class CredentialParser {
    private static AGC_CONFIG_ENV_VAR;
    static toCredential(filePath?: string, func?: UserDefinedGetClientSecret): CredentialService;
    static toCredentialWithContents(contents: string, func?: UserDefinedGetClientSecret): CredentialService;
    private static checkJsonFile;
}
