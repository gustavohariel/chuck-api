import { Module } from '@nestjs/common';
import { ChuckService } from 'src/application/services/chuck.service';
import { ChuckResolver } from '../../presenters/resolvers/chuck.resolver';

@Module({
  providers: [ChuckResolver, ChuckService],
})
export class ChuckModule {}
