"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entry_entity_1 = require("./entry.entity");
exports.entryProviders = [{
        provide: 'EntryRepositoryToken',
        useFactory: (connection) => connection.getRepository(entry_entity_1.Entry),
        inject: ['DbConnectionToken'],
    }];
//# sourceMappingURL=entry.providers.js.map