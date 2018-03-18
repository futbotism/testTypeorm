import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Pattern {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(type => User, user => user.patterns, { cascadeAll: true })
  user: User;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  intent: string;

  @Column()
  mindset: string;

  @Column('simple-json')
  weekDaysOccurring: {
    mo: string,
    tu: string
    we: string
    th: string
    fr: string
    sa: string
    su: string
  };
}
