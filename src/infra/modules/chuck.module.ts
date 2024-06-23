import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ChuckService } from '@application/services/chuck.service';
import { ChuckResolver } from '@resolvers/chuck.resolver';

@Module({
  imports: [HttpModule],
  providers: [ChuckResolver, ChuckService],
  exports: [ChuckService],
})
export class ChuckModule {}
