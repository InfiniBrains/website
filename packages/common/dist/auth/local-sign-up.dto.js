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
exports.LocalSignUpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class LocalSignUpDto {
}
exports.LocalSignUpDto = LocalSignUpDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ message: 'error.invalidUsername: Username must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'error.invalidUsername: Username must not be empty.' }),
    (0, class_validator_1.MaxLength)(32, {
        message: 'error.invalidUsername: Username must be shorter than or equal to 32 characters.',
    }),
    (0, class_validator_1.IsAlphanumeric)('en-US', {
        message: 'error.invalidUsername: Username must be alphanumeric without any special characters.',
    }),
    __metadata("design:type", String)
], LocalSignUpDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ message: 'error.invalidEmail: Email must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'error.invalidEmail: Email must not be empty.' }),
    (0, class_validator_1.IsLowercase)({ message: 'error.invalidEmail: Email must be lowercase.' }),
    (0, class_validator_1.IsEmail)({}, {
        message: 'error.invalidEmail: It must be a valid email address.',
    }),
    __metadata("design:type", String)
], LocalSignUpDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsStrongPassword)({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }, {
        message: 'error.weakPassword: Password is too weak. It must have at least 8 characters, including 1 lowercase, 1 uppercase, 1 number, and 1 symbol.',
    }),
    __metadata("design:type", String)
], LocalSignUpDto.prototype, "password", void 0);
//# sourceMappingURL=local-sign-up.dto.js.map