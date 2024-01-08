import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Violation } from './violation.model';
import { DataSource, Repository, Transaction } from 'typeorm';
import { StatusQuo } from './violation.model';
import { ViolationDto } from '../dto/ViolationDto';

@Injectable()
export class ViolationService {
  constructor(
    @InjectRepository(Violation)
    private dataSource: DataSource,
  ) {}

  async retrieveAllViolation(): Promise<Violation[]> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const violation = await queryRunner.manager.find(Violation);
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async retrieveViolationById(vio_id: string): Promise<Violation> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const violation = await queryRunner.manager.findOne(Violation, {
        where: {
          vio_id: vio_id,
        },
      });
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async retrieveViolationByQuizId(quiz_id: string): Promise<Violation[]> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const violation = await queryRunner.manager.find(Violation, {
        where: {
          quiz_id: quiz_id,
        },
      });
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async retrieveViolationByAuthId(auth_id: string): Promise<Violation[]> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const violation = await queryRunner.manager.find(Violation, {
        where: {
          auth_id: auth_id,
        },
      });
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async retrieveViolationByReportBy(report_by: string): Promise<Violation[]> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const violation = await queryRunner.manager.find(Violation, {
        where: {
          report_by: report_by,
        },
      });
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async createViolation(vioDto: ViolationDto): Promise<Violation> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const violation = new Violation();
      violation.quiz_id = vioDto.quiz_id;
      violation.auth_id = vioDto.auth_id;
      violation.report_by = vioDto.report_by;
      violation.detail = vioDto.detail;
      violation.status = StatusQuo.PENDING;
      await queryRunner.manager.save(violation);
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async solveViolation(vio_id: string): Promise<Violation> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const violation = await queryRunner.manager.findOne(Violation, {
        where: {
          vio_id: vio_id,
        },
      });
      violation.status = StatusQuo.SOLVED;
      await queryRunner.manager.save(violation);
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async rejectViolation(vio_id: string): Promise<Violation> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const violation = await queryRunner.manager.findOne(Violation, {
        where: {
          vio_id: vio_id,
        },
      });
      violation.status = StatusQuo.REJECTED;
      await queryRunner.manager.save(violation);
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async appealViolation(vio_id: string): Promise<Violation> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const violation = await queryRunner.manager.findOne(Violation, {
        where: {
          vio_id: vio_id,
        },
      });
      violation.status = StatusQuo.APPEALING;
      await queryRunner.manager.save(violation);
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async deleteViolation(vio_id: string): Promise<Violation> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const violation = await queryRunner.manager.findOne(Violation, {
        where: {
          vio_id: vio_id,
        },
      });
      await queryRunner.manager.remove(violation);
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async deleteViolationByQuizId(quiz_id: string): Promise<Violation[]> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const violation = await queryRunner.manager.find(Violation, {
        where: {
          quiz_id: quiz_id,
        },
      });
      await queryRunner.manager.remove(violation);
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async deleteViolationByAuthId(auth_id: string): Promise<Violation[]> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const violation = await queryRunner.manager.find(Violation, {
        where: {
          auth_id: auth_id,
        },
      });
      await queryRunner.manager.remove(violation);
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async deleteViolationByReporter(report_by: string): Promise<Violation[]> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const violation = await queryRunner.manager.find(Violation, {
        where: {
          report_by: report_by,
        },
      });
      await queryRunner.manager.remove(violation);
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async deleteAllViolation(): Promise<Violation[]> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const violation = await queryRunner.manager.find(Violation);
      await queryRunner.manager.remove(violation);
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async updateStatus(vio_id: string, status: StatusQuo): Promise<Violation> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const violation = await queryRunner.manager.findOne(Violation, {
        where: {
          vio_id: vio_id,
        },
      });
      violation.status = status;
      await queryRunner.manager.save(violation);
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async deleteAllViolationByStatus(status: string): Promise<Violation[]> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const status_q = StatusQuo[status];
      const violation = await queryRunner.manager.find(Violation, {
        where: {
          status: status_q,
        },
      });
      await queryRunner.manager.remove(violation);
      await queryRunner.commitTransaction();
      return violation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
