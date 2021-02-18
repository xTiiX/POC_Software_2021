import { createDatabase } from 'pg-god';
import {
  createConnection, Connection, getConnection, getConnectionOptions,
} from 'typeorm';
import {
  name, db, entities, url,
} from './appConfig';

let conn: Connection | undefined;

export async function dbInitialize(): Promise<Connection> {
  if (conn) return conn;
  try {
    conn = await createConnection(name);
    return conn;
  } catch (error) {
    if (error.code === '3D000') {
      await createDatabase(
        { databaseName: name },
        {
          user: db.user,
          port: db.port,
          host: db.host,
          password:
            (typeof db.password === 'undefined') ? undefined
              : (typeof db.password === 'string') ? db.password
                : await db.password()
          ,
        },
      );
      return dbInitialize();
    }
    throw error;
  }
}
