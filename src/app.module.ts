import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DiscordModule } from './discord/discord.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Pour lire les variables d'environnement
    DiscordModule
  ],
  controllers: [AppController],
})
export class AppModule {}
