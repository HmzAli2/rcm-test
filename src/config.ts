import 'dotenv/config'
import { AppConfig } from './models/app-config';

export const appConfig: AppConfig = {
    storageFilePath: process.env.STORAGE_FILE_PATH || ''
}