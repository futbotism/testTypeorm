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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const slug = require("slug");
const create_category_dto_1 = require("./create-category.dto");
const categories_service_1 = require("./categories.service");
const entries_service_1 = require("../entries/entries.service");
let CategoriesController = class CategoriesController {
    constructor(categoriesService, entriesService) {
        this.categoriesService = categoriesService;
        this.entriesService = entriesService;
    }
    findAll() {
        return this.categoriesService.findAll();
    }
    create(createCategoryDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCategory = Object.assign({}, createCategoryDto, {
                id: slug(createCategoryDto.name, { lower: true }),
            });
            yield this.categoriesService.create(newCategory);
        });
    }
    delete(categoryId) {
        return this.categoriesService.deleteOne(categoryId);
    }
    findEntriesByCategory(categoryId) {
        return this.entriesService.findEntriesByCategory(categoryId);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "create", null);
__decorate([
    common_1.Delete(':categoryId'),
    __param(0, common_1.Param('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "delete", null);
__decorate([
    common_1.Get(':categoryId/entries'),
    __param(0, common_1.Param('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "findEntriesByCategory", null);
CategoriesController = __decorate([
    common_1.Controller('categories'),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService,
        entries_service_1.EntriesService])
], CategoriesController);
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map