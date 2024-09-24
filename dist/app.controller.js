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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
let AppController = class AppController {
    index() {
        return {
            status: 200,
            message: 'Welcome, this is a Discord API proxy service that allows you to fetch user profile data, avatar, banner, and badge icons.',
            endpoints: [
                {
                    path: '/v1/user/:id',
                    description: 'Get user profile data'
                },
                {
                    path: '/v1/avatar/:id',
                    description: 'Get user avatar image'
                },
                {
                    path: '/v1/banner/:id',
                    description: 'Get user banner image'
                },
                {
                    path: '/v1/badge/:id.png',
                    description: 'Get badge icon image'
                }
            ]
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "index", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map