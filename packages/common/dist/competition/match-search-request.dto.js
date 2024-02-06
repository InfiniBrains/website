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
exports.MatchSearchRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class MatchSearchRequestDto {
    constructor() {
        this.pageSize = 100;
        this.pageId = 0;
    }
}
exports.MatchSearchRequestDto = MatchSearchRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsString)({ message: 'error.invalidUsername: Username must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'error.invalidUsername: Username must not be empty.' }),
    (0, class_validator_1.MaxLength)(32, {
        message: 'error.invalidUsername: Username must be shorter than or equal to 32 characters.',
    }),
    (0, class_validator_1.IsAlphanumeric)('en-US', {
        message: 'error.invalidUsername: Username must be alphanumeric without any special characters.',
    }),
    __metadata("design:type", String)
], MatchSearchRequestDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 100 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'error.invalidPageSize: PageSize must not be empty.' }),
    (0, class_validator_1.IsNumber)({}, { message: 'error.invalidPageSize: PageSize must be a number.' }),
    (0, class_validator_1.Min)(1, {
        message: 'error.invalidPageSize: PageSize must be greater than or equal to 1.',
    }),
    (0, class_validator_1.Max)(100, {
        message: 'error.invalidPageSize: PageSize must be less than or equal to 100.',
    }),
    __metadata("design:type", Number)
], MatchSearchRequestDto.prototype, "pageSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 0 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'error.invalidPageId: PageId must not be empty.' }),
    (0, class_validator_1.IsNumber)({}, { message: 'error.invalidPageId: PageId must be a number.' }),
    (0, class_validator_1.Min)(0, {
        message: 'error.invalidPageId: PageId must be greater than or equal to 0.',
    }),
    __metadata("design:type", Number)
], MatchSearchRequestDto.prototype, "pageId", void 0);
//# sourceMappingURL=match-search-request.dto.js.map