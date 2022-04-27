import { Injectable } from '@nestjs/common';
import { CampaignModel } from './campaign.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { InjectModel } from 'nestjs-typegoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CampaignService {
  constructor(
    @InjectModel(CampaignModel)
    private campaignModel: Model<CampaignModel>,
  ) {}

  async create(dto: CreateCampaignDto): Promise<CampaignModel> {
    // const camp = this.campaignModel.create(dto);
    const camp = new this.campaignModel(dto);
    return camp.save();
  }

  async findByShort(shortUrl: string): Promise<CampaignModel> {
    return this.campaignModel.findOne({ shorted_url: shortUrl });
  }

  getCampaign(): Promise<CampaignModel[]> {
    return this.campaignModel.find().exec();
  }
}
