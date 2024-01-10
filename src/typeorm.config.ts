import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Violation } from './violation/violation.model';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Violation],
  migrations: ['dist/migrations/*.js'],
  // synchronize: true,
  extra: {
    // ssl: {
    //   rejectUnauthorized: false,
    // },
    pool: {
      max: 3,
      idleTimeoutMillis: 10000,
    },
  },
};

export const dataSource = new DataSource(typeOrmConfig);
