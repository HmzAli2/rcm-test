import { appConfig } from '../config/config';
import { Database } from 'arangojs';

export const db = new Database({
  url: appConfig.dbConfig.host,
  databaseName: appConfig.dbConfig.dbName,
  auth: {
    username: appConfig.dbConfig.username,
    password: appConfig.dbConfig.password,
  },
});

connect();

export function connect() {
  getRecord().then((v) => console.log(v));
}

async function getRecord() {
  return db
    .query({
      query: 'FOR p IN @@c RETURN p',
      bindVars: { '@c': 'rcm-charge-codeset' },
    })
    .then(function (result: any) {
      console.log('Charge code:');
      return result.forEach(function (codeset: any) {
        console.log(codeset);
      });
    })
    .catch(function (err: any) {
      console.error(err);
    });
}
