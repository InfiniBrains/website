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
exports.ChessMatchResultDto = exports.ChessGameResult = exports.ChessGameResultReason = void 0;
const swagger_1 = require("@nestjs/swagger");
var ChessGameResultReason;
(function (ChessGameResultReason) {
    ChessGameResultReason["CHECKMATE"] = "CHECKMATE";
    ChessGameResultReason["STALEMATE"] = "STALEMATE";
    ChessGameResultReason["INSUFFICIENT_MATERIAL"] = "INSUFFICIENT_MATERIAL";
    ChessGameResultReason["FIFTY_MOVE_RULE"] = "FIFTY_MOVE_RULE";
    ChessGameResultReason["THREEFOLD_REPETITION"] = "THREEFOLD_REPETITION";
    ChessGameResultReason["INVALID_MOVE"] = "INVALID_MOVE";
    ChessGameResultReason["NONE"] = "NONE";
})(ChessGameResultReason || (exports.ChessGameResultReason = ChessGameResultReason = {}));
var ChessGameResult;
(function (ChessGameResult) {
    ChessGameResult["GAME_OVER"] = "GAME_OVER";
    ChessGameResult["DRAW"] = "DRAW";
    ChessGameResult["NONE"] = "NONE";
})(ChessGameResult || (exports.ChessGameResult = ChessGameResult = {}));
class ChessMatchResultDto {
}
exports.ChessMatchResultDto = ChessMatchResultDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'array', items: { type: 'string' } }),
    __metadata("design:type", Array)
], ChessMatchResultDto.prototype, "players", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'array', items: { type: 'string' } }),
    __metadata("design:type", Array)
], ChessMatchResultDto.prototype, "moves", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ChessMatchResultDto.prototype, "winner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ChessMatchResultDto.prototype, "draw", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ChessGameResult }),
    __metadata("design:type", String)
], ChessMatchResultDto.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ChessGameResultReason }),
    __metadata("design:type", String)
], ChessMatchResultDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'array', items: { type: 'number' } }),
    __metadata("design:type", Array)
], ChessMatchResultDto.prototype, "cpuTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ChessMatchResultDto.prototype, "finalFen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'array', items: { type: 'number' } }),
    __metadata("design:type", Array)
], ChessMatchResultDto.prototype, "eloChange", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'array', items: { type: 'number' } }),
    __metadata("design:type", Array)
], ChessMatchResultDto.prototype, "elo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ChessMatchResultDto.prototype, "createdAt", void 0);
//# sourceMappingURL=chess-match-result.dto.js.map