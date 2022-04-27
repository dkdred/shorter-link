import {forwardRef, Module} from '@nestjs/common';
import { AppService } from './app.service';
import { CampaignModule } from './campaign/campaign.module';
import { ClickModule } from './click/click.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './configs/mongo.config';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    forwardRef(() => CampaignModule),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
