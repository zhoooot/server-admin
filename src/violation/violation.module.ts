import { Module } from '@nestjs/common';
import { ViolationController } from './violation.controller';
import { ViolationService } from './violation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Violation } from './violation.model';

@Module({
  imports: [TypeOrmModule.forFeature([Violation])],
  controllers: [ViolationController],
  providers: [ViolationService],
})
export class ViolationModule {}
