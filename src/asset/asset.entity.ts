import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  assetName: string;

  @Column()
  assetUrl: string;

  @ManyToOne(() => User, user => user.assets)
  user: User;
}
