import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ClickModel } from '../campaign/click.model';
import { Model } from 'mongoose';

@Injectable()
export class ClickService {
  constructor(
    @InjectModel(ClickModel)
    private clickModel: Model<ClickModel>,
  ) {}


}
