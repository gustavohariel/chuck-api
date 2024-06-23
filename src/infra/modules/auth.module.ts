import { AuthService } from '@application/services/auth.service';
import { ApiKeyStrategy } from '@infra/auth/strategies/apikey.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule],
  providers: [AuthService, ApiKeyStrategy],
  exports: [AuthService],
})
export class AuthModule {}
