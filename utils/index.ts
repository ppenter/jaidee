import {promises as fs} from 'fs';
export const getAppConfig = async () => {
    // use fs
    const config = await fs.readdir(`./src/apps/`);
    return config;
}