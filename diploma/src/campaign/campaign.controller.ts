import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CampaignModel } from './campaign.model';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { CampaignService } from './campaign.service';

@Controller('campaign')
export class CampaignController {

  constructor(private campaignService: CampaignService) {
  }

  @Get('')
  async getKek() {
    return 'kek';
  }

  @Get('getCampaign')
  async getCampaign() {
    return this.campaignService.getCampaign();
  }

  @Post('create')
  async create(@Body() dto: CreateCampaignDto) {

    return this.campaignService.create(dto);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: CampaignModel) {}
}

