import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Prop } from '@typegoose/typegoose';

export interface ClickModel extends Base {}
export class ClickModel extends TimeStamps {
  @Prop()
  user_id: number;
  @Prop()
  campaign_id: number;
  @Prop()
  browser: string;
  @Prop()
  OS: string;
  @Prop()
  city: string;
}
