import { Controller, Post, Body, Param } from '@nestjs/common';
import { PolicyService } from './policy.service';
import { Policy } from './policy.entity';

@Controller('policies')
export class PolicyController {
  constructor(private readonly policyService: PolicyService) {}

  @Post('create/:userId')
  async createPolicy(@Body('policyName') policyName: string, @Param('userId') userId: number): Promise<Policy> {
    return this.policyService.createPolicy(policyName, userId);
  }
}
