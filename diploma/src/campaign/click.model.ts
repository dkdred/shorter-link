import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Prop } from '@typegoose/typegoose';

import { CampaignModel } from './campaign.model';
import * as mongoose from 'mongoose';

export interface ClickModel extends Base {}
export class ClickModel extends TimeStamps {
  @Prop()
  user_id: number;
  @Prop({ type: mongoose.Types.ObjectId, ref: CampaignModel })
  campaign_id: mongoose.Types.ObjectId;
  @Prop()
  browser: string;
  @Prop()
  OS: string;
  @Prop()
  city: string;
}
