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
exports.ChessMoveRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ChessMoveRequestDto {
}
exports.ChessMoveRequestDto = ChessMoveRequestDto;
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
], ChessMoveRequestDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsString)({ message: 'error.invalidFen: Fen must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'error.invalidFen: Fen must not be empty.' }),
    (0, class_validator_1.MaxLength)(255, {
        message: 'error.invalidFen: Fen must be shorter than or equal to 255 characters.',
    }),
    __metadata("design:type", String)
], ChessMoveRequestDto.prototype, "fen", void 0);
//# sourceMappingURL=chess-move-request.dto.js.map