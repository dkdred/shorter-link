import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Prop } from '@typegoose/typegoose';

export interface CampaignModel extends Base {}
export class CampaignModel extends TimeStamps {
  @Prop()
  dest_url: string;

  @Prop()
  campaign_name: string;

  @Prop()
  src: string;

  @Prop({ unique: true })
  shorted_url: string;

}
