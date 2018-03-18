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
const entries_controller_1 = require("./entries.controller");
const entries_service_1 = require("./entries.service");
const entry_providers_1 = require("./entry.providers");
let EntriesModule = class EntriesModule {
};
EntriesModule = __decorate([
    common_1.Module({
        modules: [db_module_1.DBModule],
        controllers: [entries_controller_1.EntriesController],
        components: [
            ...entry_providers_1.entryProviders,
            entries_service_1.EntriesService,
        ],
        exports: [entries_service_1.EntriesService],
    })
], EntriesModule);
exports.EntriesModule = EntriesModule;
//# sourceMappingURL=entries.module.js.map