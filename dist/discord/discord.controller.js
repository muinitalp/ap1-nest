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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordController = void 0;
const common_1 = require("@nestjs/common");
const discord_service_1 = require("./discord.service");
const express_1 = require("express");
const rxjs_1 = require("rxjs");
let DiscordController = class DiscordController {
    constructor(discordService) {
        this.discordService = discordService;
    }
    async user(id) {
        const userData = (await (0, rxjs_1.firstValueFrom)(this.discordService.getUserProfileData(id))).data;
        delete userData.mutual_guilds;
        return userData;
    }
    async avatar(id, response) {
        const userData = await this.getUserData(id);
        const avatar = await (0, rxjs_1.firstValueFrom)(this.discordService.getAvatarUrl(userData));
        response.setHeader('Content-Type', avatar.headers['content-type']);
        return response.send(avatar.data);
    }
    async banner(id, response) {
        const userData = await this.getUserData(id);
        const banner = await (0, rxjs_1.firstValueFrom)(this.discordService.getBannerUrl(userData));
        response.setHeader('Content-Type', banner.headers['content-type']);
        return response.send(banner.data);
    }
    async badge(id, response) {
        const badge = await (0, rxjs_1.firstValueFrom)(this.discordService.getBadgeUrl(id));
        response.setHeader('Content-Type', badge.headers['content-type']);
        return response.send(badge.data);
    }
    async getUserData(id) {
        const response = await (0, rxjs_1.firstValueFrom)(this.discordService.getUserData(id));
        return response.data;
    }
};
exports.DiscordController = DiscordController;
__decorate([
    (0, common_1.Get)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DiscordController.prototype, "user", null);
__decorate([
    (0, common_1.Get)('/avatar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], DiscordController.prototype, "avatar", null);
__decorate([
    (0, common_1.Get)('/banner/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], DiscordController.prototype, "banner", null);
__decorate([
    (0, common_1.Get)('/badge/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], DiscordController.prototype, "badge", null);
exports.DiscordController = DiscordController = __decorate([
    (0, common_1.Controller)('v1'),
    __metadata("design:paramtypes", [discord_service_1.DiscordService])
], DiscordController);
//# sourceMappingURL=discord.controller.js.map