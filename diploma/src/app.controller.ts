import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  async kek() {
    console.log('kek');
    return this.appService.getKek();
  }

  @Get(':short_url')
  async redirectTo(
    @Param('short_url') short_url: string,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const url = await this.appService.findByShortUrl(short_url);

      if (url) {
        return res.redirect(HttpStatus.PERMANENT_REDIRECT, url.dest_url);
      } else {
        return res.status(HttpStatus.NOT_FOUND).json('Not found');
      }
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json('Error');
    }
  }
}
