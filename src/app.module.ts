import { Module } from '@nestjs/common';
import { ViolationModule } from './violation/violation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeOrmConfig,
    }),
    ViolationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
