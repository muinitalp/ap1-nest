import { Controller, Get, Param, Res } from '@nestjs/common';
import { DiscordService } from './discord.service';
import { Response } from 'express';
import { firstValueFrom } from 'rxjs';

@Controller('v1')
export class DiscordController {
  constructor(private readonly discordService: DiscordService) {}

  @Get('/user/:id')
  async user(@Param('id') id: string) {
    const userData = (await firstValueFrom(this.discordService.getUserProfileData(id))).data;
    delete userData.mutual_guilds;
    return userData;
  }

  @Get('/avatar/:id')
  async avatar(@Param('id') id: string, @Res() response: Response) {
    const userData = await this.getUserData(id);
    const avatar = await firstValueFrom(this.discordService.getAvatarUrl(userData));
    response.setHeader('Content-Type', avatar.headers['content-type']);
    return response.send(avatar.data);
  }

  @Get('/banner/:id')
  async banner(@Param('id') id: string, @Res() response: Response) {
    const userData = await this.getUserData(id);
    const banner = await firstValueFrom(this.discordService.getBannerUrl(userData));
    response.setHeader('Content-Type', banner.headers['content-type']);
    return response.send(banner.data);
  }

  @Get('/badge/:id')
  async badge(@Param('id') id: string, @Res() response: Response) {
    const badge = await firstValueFrom(this.discordService.getBadgeUrl(id));
    response.setHeader('Content-Type', badge.headers['content-type']);
    return response.send(badge.data);
  }

  async getUserData(id: string) {
    const response = await firstValueFrom(this.discordService.getUserData(id));
    return response.data;
  }
}
