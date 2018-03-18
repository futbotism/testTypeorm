"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const bodyParser = require("body-parser");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("./validation.pipe");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.ApplicationModule);
        app.use(bodyParser.json());
        app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
        app.setGlobalPrefix('api/v1');
        const port = parseInt(process.env.PORT, 10) || 3000;
        yield app.listen(port);
    });
}
bootstrap();
//# sourceMappingURL=server.js.map