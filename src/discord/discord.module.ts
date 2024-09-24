import { Module } from '@nestjs/common';
import { DiscordController } from './discord.controller';
import { DiscordService } from './discord.service';
import { BotService } from './bot.service';  // Import du service de bot
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [DiscordController],
  imports: [HttpModule],
  providers: [DiscordService, BotService],  // Ajouter BotService ici
})
export class DiscordModule {}
