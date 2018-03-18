"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("./user.entity");
exports.userProviders = [{
        provide: 'UserRepositoryToken',
        useFactory: (connection) => connection.getRepository(user_entity_1.User),
        inject: ['DbConnectionToken'],
    }];
//# sourceMappingURL=user.providers.js.map