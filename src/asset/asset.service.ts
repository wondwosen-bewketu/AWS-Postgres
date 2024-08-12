import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asset } from './asset.entity';
import { S3Service } from '../aws/s3.service';

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(Asset)
    private assetRepository: Repository<Asset>,
    private s3Service: S3Service,
  ) {}

  async createAsset(file: Express.Multer.File, userId: number): Promise<Asset> {
    const uploadResult = await this.s3Service.uploadFile(file);
    const asset = new Asset();
    asset.assetName = file.originalname;
    asset.assetUrl = uploadResult.Location;
    asset.user = { id: userId } as any;
    return this.assetRepository.save(asset);
  }
}
