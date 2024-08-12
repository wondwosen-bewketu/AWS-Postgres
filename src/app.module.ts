import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Policy } from './policy/policy.entity';
import { Asset } from './asset/asset.entity';
import { UserModule } from './user/user.module';
import { PolicyModule } from './policy/policy.module';
import { AssetModule } from './asset/asset.module';
import { AwsModule } from './aws/aws.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'nestjs_project',
      entities: [User, Policy, Asset],
      synchronize: true,
    }),
    UserModule,
    PolicyModule,
    AssetModule,
    AwsModule,
  ],
})
export class AppModule {}
