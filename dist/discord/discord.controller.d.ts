import { DiscordService } from './discord.service';
import { Response } from 'express';
export declare class DiscordController {
    private readonly discordService;
    constructor(discordService: DiscordService);
    user(id: string): Promise<any>;
    avatar(id: string, response: Response): Promise<any>;
    banner(id: string, response: Response): Promise<any>;
    badge(id: string, response: Response): Promise<any>;
    getUserData(id: string): Promise<any>;
}
