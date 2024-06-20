import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ChuckService } from 'src/application/services/chuck.service';
import { ChuckResolver } from 'src/presenters/resolvers/chuck.resolver';

@Module({
  imports: [HttpModule],
  providers: [ChuckResolver, ChuckService],
  exports: [ChuckService],
})
export class ChuckModule {}
