import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
export declare class DiscordService {
    private httpService;
    constructor(httpService: HttpService);
    getUserData(id: string): Observable<any>;
    getUserProfileData(id: string): Observable<any>;
    getAvatarUrl(userData: any): Observable<any>;
    getBannerUrl(userData: any): Observable<any>;
    getBadgeUrl(id: string): Observable<any>;
}
