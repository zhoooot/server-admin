import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Violation } from './violation.model';
import { Repository } from 'typeorm';
import { StatusQuo } from './violation.model';
import { ViolationDto } from '../dto/ViolationDto';

@Injectable()
export class ViolationService {
    constructor(@InjectRepository(Violation) private readonly violationRepository: Repository<Violation>) { }

    async retrieveAllViolation(): Promise<Violation[]> {
        return await this.violationRepository.find();
    }

    async retrieveViolationById(vio_id: string): Promise<Violation> {
        return await this.violationRepository.findOne({
            where: {
                vio_id: vio_id
            }
        });
    }

    async retrieveViolationByQuizId(quiz_id: string): Promise<Violation[]> {
        return await this.violationRepository.find({
            where: {
                quiz_id: quiz_id
            }
        });
    }

    async retrieveViolationByAuthId(auth_id: string): Promise<Violation[]> {
        return await this.violationRepository.find({
            where: {
                auth_id: auth_id
            }
        });
    }

    async retrieveViolationByReportBy(report_by: string): Promise<Violation[]> {
        return await this.violationRepository.find({
            where: {
                report_by: report_by
            }
        });
    }

    async createViolation(vioDto: ViolationDto): Promise<Violation> {
        const violation = new Violation();
        violation.quiz_id = vioDto.quiz_id;
        violation.auth_id = vioDto.auth_id;
        violation.report_by = vioDto.report_by;
        violation.detail = vioDto.detail;
        violation.status = StatusQuo.PENDING;
        return await this.violationRepository.save(violation);
    }

    async solveViolation(vio_id: string): Promise<Violation> {
        const violation = await this.violationRepository.findOne({
            where: {
                vio_id: vio_id,
            }
        });
        violation.status = StatusQuo.SOLVED;
        return await this.violationRepository.save(violation);
    }

    async rejectViolation(vio_id: string): Promise<Violation> {
        const violation = await this.violationRepository.findOne({
            where: {
                vio_id: vio_id,
            }
        });
        violation.status = StatusQuo.REJECTED;
        return await this.violationRepository.save(violation);
    }

    async appealViolation(vio_id: string): Promise<Violation> {
        const violation = await this.violationRepository.findOne({
            where: {
                vio_id: vio_id,
            }
        });
        violation.status = StatusQuo.APPEALING;
        return await this.violationRepository.save(violation);
    }

    async deleteViolation(vio_id: string): Promise<Violation> {
        const violation = await this.violationRepository.findOne({
            where: {
                vio_id: vio_id
            }
        });
        return await this.violationRepository.remove(violation);
    }

    async deleteViolationByQuizId(quiz_id: string): Promise<Violation[]> {
        const violation = await this.violationRepository.find({
            where: {
                quiz_id: quiz_id
            }
        });
        return await this.violationRepository.remove(violation);
    }

    async deleteViolationByAuthId(auth_id: string): Promise<Violation[]> {
        const violation = await this.violationRepository.find({
            where: {
                auth_id: auth_id
            }
        });
        return await this.violationRepository.remove(violation);
    }
    
    async deleteViolationByReporter(report_by: string): Promise<Violation[]> {
        const violation = await this.violationRepository.find({
            where: {
                report_by: report_by
            }
        });
        return await this.violationRepository.remove(violation);
    }

    async deleteAllViolation(): Promise<Violation[]> {
        const violation = await this.violationRepository.find();
        return await this.violationRepository.remove(violation);
    }

    async updateStatus(vio_id: string, status: StatusQuo): Promise<Violation> {
        const violation = await this.violationRepository.findOne({
            where: {
                vio_id: vio_id
            }
        });
        violation.status = status;
        return await this.violationRepository.save(violation);
    }

    async deleteAllViolationByStatus(status: string): Promise<Violation[]> {
        const status_q = StatusQuo[status];
        const violation = await this.violationRepository.find({
            where: {
                status: status_q
            }
        });
        return await this.violationRepository.remove(violation);
    }
}
