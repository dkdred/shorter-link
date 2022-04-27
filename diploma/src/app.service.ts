import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CampaignModel } from './campaign/campaign.model';
import { CampaignService } from './campaign/campaign.service';

@Injectable()
export class AppService {
  constructor(
    // @Inject(forwardRef(() => CampaignService))
    // private campaignService: CampaignService,
  ) {}

}
