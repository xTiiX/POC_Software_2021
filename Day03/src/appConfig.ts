import * as env from 'env-var';

export const name = env.get('DB_NAME').required().asString();
export const url = env.get('DB_URL').required().asString();
export const entities = env.get('ENTITIES_FOLDER').required().asString();

export const db {
  user: env.get('DB_USER');
  password: env.get('DB_PASS');
  host: env.get('DB_HOST');
  port: env.get('DB_PORT');
  database: 'postgres';
};
