import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Asset } from '../asset/asset.entity';
import { Policy } from '../policy/policy.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @OneToMany(() => Asset, asset => asset.user)
  assets: Asset[];

  @OneToMany(() => Policy, policy => policy.user)
  policies: Policy[];
}
