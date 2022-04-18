import { Injectable } from '@nestjs/common';
import { CampaignModel } from './campaign.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class CampaignService {
  constructor(
    @InjectModel(CampaignModel)
    private readonly campaignModel: ModelType<CampaignModel>,
  ) {}

  async create(dto: CreateCampaignDto) {
    return this.campaignModel.create(dto);
  }

  async get(id: string) {
    return this.get(id);
  }

  getCampaign(): string {
    return 'Hello Campaign';
  }
}
