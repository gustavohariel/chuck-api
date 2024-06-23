import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {}

  validateApiKey(apiKey: string) {
    const apiKeys: string = 'Bearer ' + this.configService.get('AUTHORIZATION');
    return apiKeys === apiKey;
  }
}
