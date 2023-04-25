import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import { UserService } from "../../user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "hello"
    });
  }

  async validate(payload: any) {
    const user = await this.userService.getUserByEmail(payload.email)
    return {
      userId: user.id,
      email: user.email,
      username: user.username,
      roles: user.roles
    }
  }
}