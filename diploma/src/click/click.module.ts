import { Module } from '@nestjs/common';
import { ClickController } from './click.controller';
import { ClickService } from './click.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { ClickModel } from './click.model';

@Module({
  controllers: [ClickController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ClickModel,
        schemaOptions: {
          collection: 'Click',
        },
      },
    ]),
  ],
  providers: [ClickService],
})
export class ClickModule {}
