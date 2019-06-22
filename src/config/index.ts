import rc from 'rc';
export interface Config {
    database: string;
    username: string;
    password: string;
}
const config: Config = rc('env') as Config;

export default config;
