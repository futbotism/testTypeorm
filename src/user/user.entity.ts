import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsEmail } from 'class-validator';
import { Pattern } from '../pattern/pattern.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @IsEmail()
  @Column({ unique: true })
  email: string;

  @OneToMany(type => Pattern, pattern => pattern.user, { cascadeInsert: true, cascadeUpdate: true })
  patterns: Pattern[];

  @CreateDateColumn()
  created_at: Date;
}
