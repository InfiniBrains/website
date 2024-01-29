
import { Column, Entity, OneToMany } from 'typeorm';
import { CompetitionMatchEntity } from './competition.match.entity';
import { CompetitionRunSubmissionReportEntity } from './competition.run.submission.report.entity';
import {EntityBase} from "../../common/entities/entity.base";

export enum CompetitionRunState {
  NOT_STARTED = 'NOT_STARTED',
  RUNNING = 'RUNNING',
  FINISHED = 'FINISHED',
  FAILED = 'FAILED',
}

@Entity()
export class CompetitionRunEntity extends EntityBase {
  @Column({
    enum: CompetitionRunState,
    default: CompetitionRunState.NOT_STARTED,
  })
  state: CompetitionRunState;

  @OneToMany(
    () => CompetitionMatchEntity,
    (competitionMatch) => competitionMatch.run,
  )
  matches: CompetitionMatchEntity[];

  @OneToMany(() => CompetitionRunSubmissionReportEntity, (c) => c.run)
  reports: CompetitionRunSubmissionReportEntity[];
}
