import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
  Scope,
} from '@nestjs/common';
import { CampaignModel } from './campaign.model';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { CampaignService } from './campaign.service';
import { Response } from 'express';

@Controller({
  path: '',
  scope: Scope.REQUEST,
})
export class CampaignController {
  constructor(private campaignService: CampaignService) {}

  @Get('campaign/getCampaignAll')
  async getCampaign() {
    return this.campaignService.getAllCampaign();
  }

  @Post('campaign/create')
  async create(@Body() dto: CreateCampaignDto) {
    return this.campaignService.create(dto);
  }

  @Patch('campaign/:id')
  async patch(@Param('id') id: string, @Body() dto: CampaignModel) {}

  @Get(':short_url')
  async redirectTo(
    @Param('short_url') short_url: string,
    @Res() res: Response,
  ): Promise<any> {
    try {
      console.log(short_url);
      const url = await this.campaignService.findByShort(short_url);
      console.log(url._id);
      if (url) {
        await this.campaignService.createClick(url._id);
        // this.createClick(url._id);
        return res.redirect(HttpStatus.PERMANENT_REDIRECT, url.dest_url);
      } else {
        return res.status(HttpStatus.NOT_FOUND).json('Not found');
      }
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json('Error');
    }
  }

  @Get('click/getAll')
  async getAllClick() {
    return this.campaignService.getAllClick();
  }
}
