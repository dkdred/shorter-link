import { Injectable, Scope } from '@nestjs/common';
import { CampaignModel } from './campaign.model';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { InjectModel } from 'nestjs-typegoose';
import { Model } from 'mongoose';
import { ClickModel } from './click.model';
import {allVirtualoptions} from "@typegoose/typegoose/lib/internal/utils";

@Injectable({ scope: Scope.REQUEST })
export class CampaignService {
  constructor(
    @InjectModel(CampaignModel)
    private campaignModel: Model<CampaignModel>,
    @InjectModel(ClickModel)
    private clickModel: Model<ClickModel>,
  ) {}

  async create(dto: CreateCampaignDto): Promise<CampaignModel> {
    // const camp = this.campaignModel.create(dto);
    const camp = new this.campaignModel(dto);
    return camp.save();
  }

  async findByShort(shortUrl: string): Promise<CampaignModel> {
    return this.campaignModel.findOne({ shorted_url: shortUrl });
  }

  getAllCampaign(): Promise<CampaignModel[]> {
    return this.campaignModel.find().exec();

  }

  async createClick(id: any): Promise<ClickModel> {
    console.log(id);
    const click = new this.clickModel({ campaign_id: id });
    return click.save();
  }

  async getAllClick(): Promise<ClickModel[]> {
    return this.clickModel.find().populate('campaign_id').exec();
  }
}
