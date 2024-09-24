import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable()
export class DiscordService {
  constructor(private httpService: HttpService) {}

  getUserData(id: string): Observable<any> {
    const endpointUrl = `https://discord.com/api/v9/users/${id}`;
    const headers = { Authorization: `Bot ${process.env.TOKEN}` };
    return this.httpService.get(endpointUrl, { headers });
  }

  getUserProfileData(id: string): Observable<any> {
    const endpointUrl = `https://discord.com/api/v9/users/${id}/profile`;
    const headers = { Authorization: `Bot ${process.env.TOKEN}` };
    return this.httpService.get(endpointUrl, { headers });
  }

  getAvatarUrl(userData: any): Observable<any> {
    const endpointUrl = `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}?size=2048`;
    return this.httpService.get(endpointUrl, { responseType: 'arraybuffer' });
  }

  getBannerUrl(userData: any): Observable<any> {
    const endpointUrl = `https://cdn.discordapp.com/banners/${userData.id}/${userData.banner}?size=2048`;
    return this.httpService.get(endpointUrl, { responseType: 'arraybuffer' });
  }

  getBadgeUrl(id: string): Observable<any> {
    const endpointUrl = `https://cdn.discordapp.com/badge-icons/${id}`;
    return this.httpService.get(endpointUrl, { responseType: 'arraybuffer' });
  }
}
