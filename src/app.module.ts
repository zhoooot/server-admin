import { Module } from '@nestjs/common';
import { ViolationModule } from './violation/violation.module';
import { Violation } from './violation/violation.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'zhoot',
      password: 'pass',
      database: 'violation',
      entities: [Violation],
      synchronize: true,
    }),
    ViolationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
