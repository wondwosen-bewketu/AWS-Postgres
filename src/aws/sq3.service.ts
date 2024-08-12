import { Injectable } from '@nestjs/common';
import { SQS } from 'aws-sdk';

@Injectable()
export class SqsService {
  private sqs: SQS;

  constructor() {
    this.sqs = new SQS({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });
  }

  async sendMessage(queueUrl: string, messageBody: string): Promise<SQS.SendMessageResult> {
    const params = {
      QueueUrl: queueUrl,
      MessageBody: messageBody,
    };
    return this.sqs.sendMessage(params).promise();
  }

  async receiveMessages(queueUrl: string, maxMessages: number = 10): Promise<SQS.Message[]> {
    const params = {
      QueueUrl: queueUrl,
      MaxNumberOfMessages: maxMessages,
    };
    const result = await this.sqs.receiveMessage(params).promise();
    return result.Messages || [];
  }
}
