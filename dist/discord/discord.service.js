"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
let DiscordService = class DiscordService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getUserData(id) {
        const endpointUrl = `https://discord.com/api/v9/users/${id}`;
        const headers = { Authorization: `Bot ${process.env.TOKEN}` };
        return this.httpService.get(endpointUrl, { headers });
    }
    getUserProfileData(id) {
        const endpointUrl = `https://discord.com/api/v9/users/${id}/profile`;
        const headers = { Authorization: `Bot ${process.env.TOKEN}` };
        return this.httpService.get(endpointUrl, { headers });
    }
    getAvatarUrl(userData) {
        const endpointUrl = `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}?size=2048`;
        return this.httpService.get(endpointUrl, { responseType: 'arraybuffer' });
    }
    getBannerUrl(userData) {
        const endpointUrl = `https://cdn.discordapp.com/banners/${userData.id}/${userData.banner}?size=2048`;
        return this.httpService.get(endpointUrl, { responseType: 'arraybuffer' });
    }
    getBadgeUrl(id) {
        const endpointUrl = `https://cdn.discordapp.com/badge-icons/${id}`;
        return this.httpService.get(endpointUrl, { responseType: 'arraybuffer' });
    }
};
exports.DiscordService = DiscordService;
exports.DiscordService = DiscordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], DiscordService);
//# sourceMappingURL=discord.service.js.map