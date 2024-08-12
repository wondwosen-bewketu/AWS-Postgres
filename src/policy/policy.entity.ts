import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Policy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  policyName: string;

  @ManyToOne(() => User, user => user.policies)
  user: User;
}
