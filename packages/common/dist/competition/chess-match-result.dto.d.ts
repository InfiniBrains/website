export declare enum ChessGameResultReason {
    CHECKMATE = "CHECKMATE",
    STALEMATE = "STALEMATE",
    INSUFFICIENT_MATERIAL = "INSUFFICIENT_MATERIAL",
    FIFTY_MOVE_RULE = "FIFTY_MOVE_RULE",
    THREEFOLD_REPETITION = "THREEFOLD_REPETITION",
    INVALID_MOVE = "INVALID_MOVE",
    NONE = "NONE"
}
export declare enum ChessGameResult {
    GAME_OVER = "GAME_OVER",
    DRAW = "DRAW",
    NONE = "NONE"
}
export declare class ChessMatchResultDto {
    players: string[];
    moves: string[];
    winner: string;
    draw: boolean;
    result: ChessGameResult;
    reason: ChessGameResultReason;
    cpuTime: number[];
    finalFen: string;
    eloChange: number[];
    elo: number[];
    createdAt: Date;
}
