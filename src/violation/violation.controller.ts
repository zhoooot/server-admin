import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ViolationService } from './violation.service';
import { ViolationDto } from '../dto/ViolationDto';

@Controller('violation')
export class ViolationController {
  constructor(
    @Inject(ViolationService)
    private readonly violationService: ViolationService,
  ) {}

  @Get('/all')
  async retrieveAllViolation() {
    return await this.violationService.retrieveAllViolation();
  }

  @Get('/check/:quiz_id')
  async checkViolation(@Param('quiz_id') quiz_id: string) {
    return await this.violationService.checkViolation(quiz_id);
  }

  @Get('/status/:status')
  async retrieveAllViolationByStatus(@Param('status') status: string) {
    return await this.violationService.retrieveAllViolationByStatus(status);
  }

  @Get('/:vio_id')
  async retrieveViolationById(@Param('vio_id') vio_id: string) {
    return await this.violationService.retrieveViolationById(vio_id);
  }

  @Get('/quiz/:quiz_id')
  async retrieveViolationByQuizId(@Param('quiz_id') quiz_id: string) {
    return await this.violationService.retrieveViolationByQuizId(quiz_id);
  }

  @Get('/auth/:auth_id')
  async retrieveViolationByAuthId(@Param('auth_id') auth_id: string) {
    return await this.violationService.retrieveViolationByAuthId(auth_id);
  }

  @Get('/report/:report_by')
  async retrieveViolationByReportBy(@Param('report_by') report_by: string) {
    return await this.violationService.retrieveViolationByReportBy(report_by);
  }

  @Post('/create')
  async createViolation(@Body() vioDto: ViolationDto) {
    return await this.violationService.createViolation(vioDto);
  }

  @Patch('/solve/:vio_id')
  async solveViolation(@Param('vio_id') vio_id: string) {
    return await this.violationService.solveViolation(vio_id);
  }

  @Patch('/reject/:quiz_id')
  async rejectViolation(@Param('quiz_id') quiz_id: string) {
    return await this.violationService.rejectViolation(quiz_id);
  }

  @Patch('/appeal/:vio_id')
  async appealViolation(@Param('vio_id') vio_id: string) {
    return await this.violationService.appealViolation(vio_id);
  }

  @Delete('/delete/:vio_id')
  async deleteViolation(@Param('vio_id') vio_id: string) {
    return await this.violationService.deleteViolation(vio_id);
  }

  @Delete('/')
  async deleteAllViolation() {
    return await this.violationService.deleteAllViolation();
  }

  @Delete('/quiz/:quiz_id')
  async deleteAllViolationByQuizId(@Param('quiz_id') quiz_id: string) {
    return await this.violationService.deleteViolationByQuizId(quiz_id);
  }

  @Delete('/auth/:auth_id')
  async deleteAllViolationByAuthId(@Param('auth_id') auth_id: string) {
    return await this.violationService.deleteViolationByAuthId(auth_id);
  }

  @Delete('/report/:report_by')
  async deleteAllViolationByReportBy(@Param('report_by') report_by: string) {
    return await this.violationService.deleteViolationByReporter(report_by);
  }

  @Delete('/status/:status')
  async deleteAllViolationByStatus(@Param('status') status: string) {
    return await this.violationService.deleteAllViolationByStatus(status);
  }
}
