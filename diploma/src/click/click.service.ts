import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ClickModel } from './click.model';
import { Model } from 'mongoose';

@Injectable()
export class ClickService {
  constructor(
    @InjectModel(ClickModel)
    private clickModel: Model<ClickModel>,
  ) {}

  async create(campaign_id: string): Promise<ClickModel> {
    const click = new this.clickModel({ campaign_id: campaign_id });
    return click.save();
  }
}
