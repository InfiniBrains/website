import { AccessTokenPayloadDto } from "@game-guild/common/dist/auth/access-token-payload.dto";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ApiConfigService } from "../../common/config.service";

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  "jwt-refresh-token"
) {
  constructor(configService: ApiConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      algorithms: ["RS256"],
      secretOrKey: configService.authConfig.refreshTokenPublicKey
    });
  }

  async validate(payload: AccessTokenPayloadDto) {
    return { id: payload.sub, email: payload.email };
  }
}
