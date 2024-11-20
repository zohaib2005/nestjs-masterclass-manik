import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class MetaOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'json',
    nullable: false,
  })
  metaValue: string;

  @CreateDateColumn()
  createDate: Date;

  @CreateDateColumn()
  updateDate: Date;
}
