import { Prop } from '@typegoose/typegoose';

export class CreateCampaignDto {
  @Prop()
  dest_url: string;

  @Prop()
  campaign_name: string;

  @Prop()
  src: string;

  @Prop({ unique: true })
  shorted_url: string;
}
