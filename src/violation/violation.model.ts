import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum StatusQuo {
  SOLVED = 'solved',
  PENDING = 'pending',
  APPEALING = 'appealing',
  REJECTED = 'rejected',
}

@Entity()
export class Violation {
  @PrimaryGeneratedColumn('uuid')
  vio_id: string;

  @Column()
  quiz_id: string;

  @Column()
  auth_id: string;

  @Column()
  report_by: string;

  @Column()
  status: StatusQuo;

  @Column()
  detail: string;

  @Column({ default: new Date().toDateString() })
  created_at: string;
}
