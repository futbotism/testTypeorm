"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_entity_1 = require("./category.entity");
exports.categoryProviders = [{
        provide: 'CategoryRepositoryToken',
        useFactory: (connection) => connection.getRepository(category_entity_1.Category),
        inject: ['DbConnectionToken'],
    }];
//# sourceMappingURL=category.providers.js.map