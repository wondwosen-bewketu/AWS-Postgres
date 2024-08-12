import { Controller, Post, UploadedFile, UseInterceptors, FileInterceptor, Param } from '@nestjs/common';
import { AssetService } from './asset.service';
import { Asset } from './asset.entity';

@Controller('assets')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Post('upload/:userId')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Param('userId') userId: number): Promise<Asset> {
    return this.assetService.createAsset(file, userId);
  }
}
