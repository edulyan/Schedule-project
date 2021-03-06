import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ConfigPG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: 'schedule_subd',
  synchronize: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};
