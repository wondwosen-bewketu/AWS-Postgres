import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';

@Injectable()
export class S3Service {
  private s3: S3;

  constructor() {
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });
  }

  async uploadFile(file: Express.Multer.File): Promise<S3.ManagedUpload.SendData> {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: `assets/${file.originalname}`,
      Body: file.buffer,
    };
    return this.s3.upload(params).promise();
  }
}
