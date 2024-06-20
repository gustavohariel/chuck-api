import { Resolver } from '@nestjs/graphql';
import { ChuckService } from 'src/application/services/chuck.service';


@Resolver()
export class ChuckResolver {
  constructor(private readonly chuckService: ChuckService) {}
}
