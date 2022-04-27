import { Injectable } from '@nestjs/common';
import { CampaignModel } from './campaign/campaign.model';
import { CampaignService } from './campaign/campaign.service';

@Injectable()
export class AppService {
  constructor(private campaignService: CampaignService) {}

  async findByShortUrl(shortUrl: string): Promise<CampaignModel> {
    return this.campaignService.findByShort(shortUrl);
  }

  async getKek() {
    return 'kek';
  }
}
