import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Policy } from './policy.entity';

@Injectable()
export class PolicyService {
  constructor(
    @InjectRepository(Policy)
    private policyRepository: Repository<Policy>,
  ) {}

  async createPolicy(policyName: string, userId: number): Promise<Policy> {
    const policy = new Policy();
    policy.policyName = policyName;
    policy.user = { id: userId } as any;
    return this.policyRepository.save(policy);
  }
}
