"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const db_module_1 = require("../db/db.module");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const user_providers_1 = require("./user.providers");
const entries_module_1 = require("../entries/entries.module");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        modules: [db_module_1.DBModule, entries_module_1.EntriesModule],
        controllers: [user_controller_1.UserController],
        components: [
            ...user_providers_1.userProviders,
            user_service_1.UserService,
        ],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map