import rc from 'rc';
interface IConfig {
    database: string;
    username: string;
    password: string;
}
const config: IConfig = rc('env') as IConfig;

export default config;
