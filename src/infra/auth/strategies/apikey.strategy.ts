import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '@application/services/auth.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'ApiKeyAuth',
) {
  constructor(private readonly authService: AuthService) {
    super(
      { header: 'Authorization', prefix: '' },
      true,
      async (apikey, done) => {
        if (this.authService.validateApiKey(apikey)) {
          return done(null, true);
        }
        done(new UnauthorizedException(), null);
      },
    );
  }
}
