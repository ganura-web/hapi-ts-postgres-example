declare module '@hapi/glue' {
    import { Server, ServerOptions } from '@hapi/hapi';

    export interface IOptions {
        relativeTo: string;
        preConnections?: (Server: Server, next: (err: any) => void) => void;
        preRegister?: (Server: Server, next: (err: any) => void) => void;
    }

    export interface IPlugin {
        plugin:
            | string
            | {
                  register: string;
                  options?: any;
              };
        options?: any;
        routes?: any;
    }

    export interface IManifest {
        server: ServerOptions;
        register?: {
            plugins: string[] | IPlugin[] | Array<string | IPlugin>;
        };
    }

    export function compose(
        manifest: IManifest,
        options?: IOptions
    ): Promise<Server>;
}
