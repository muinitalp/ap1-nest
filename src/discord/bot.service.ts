import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, GatewayIntentBits, ActivityType } from 'discord.js';
import * as dotenv from 'dotenv';

@Injectable()
export class BotService implements OnModuleInit {
  private client: Client;

  constructor() {
    dotenv.config();

    this.client = new Client({
      intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
    });
  }

  async onModuleInit() {
    const token = process.env.TOKEN;

    if (!token) {
      throw new Error('Le token Discord est manquant dans les variables d\'environnement.');
    }

    await this.client.login(token);


    this.client.once('ready', () => {
      console.log(`${this.client.user.tag} est en ligne !`);


      this.client.user.setActivity('<3', {
        type: ActivityType.Streaming,
        url: 'https://twitch.tv/muinitalp',
      });
    });
  }
}
