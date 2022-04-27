import { Module } from '@nestjs/common';
import { CampaignController } from './campaign.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { CampaignModel } from './campaign.model';
import { CampaignService } from './campaign.service';
import {ClickModel} from "./click.model";

@Module({
  controllers: [CampaignController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: CampaignModel,
        schemaOptions: {
          collection: 'Campaign',
        },
      },
      {
        typegooseClass: ClickModel,
        schemaOptions: {
          collection: 'Click',
        },
      },
    ]),
  ],
  providers: [CampaignService],
})
export class CampaignModule {}
