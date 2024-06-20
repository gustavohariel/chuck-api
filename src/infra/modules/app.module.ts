import { Module } from '@nestjs/common';
import { ChuckModule } from './chuck.module';


@Module({
  imports: [ChuckModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
