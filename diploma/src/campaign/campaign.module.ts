import { Module } from '@nestjs/common';
import { CampaignController } from './campaign.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { CampaignModel } from './campaign.model';
import { CampaignService } from './campaign.service';

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
    ]),
  ],
  providers: [CampaignService],
})
export class CampaignModule {}
