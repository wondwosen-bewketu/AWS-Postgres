import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './asset.entity';
import { AssetService } from './asset.service';
import { AssetController } from './asset.controller';
import { S3Service } from '../aws/s3.service';

@Module({
  imports: [TypeOrmModule.forFeature([Asset])],
  providers: [AssetService, S3Service],
  controllers: [AssetController],
})
export class AssetModule {}
