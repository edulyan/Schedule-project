import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ConfigPG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'edgar',
  password: '20012002',
  database: 'schedule_subd',
  synchronize: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};
