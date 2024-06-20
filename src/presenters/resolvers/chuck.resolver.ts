import { Args, Query, Resolver } from '@nestjs/graphql';
import { firstValueFrom } from 'rxjs';
import { ChuckService } from 'src/application/services/chuck.service';
import { Joke } from 'src/domain/entities/chuck/joke.entity';

@Resolver()
export class ChuckResolver {
  constructor(private readonly chuckService: ChuckService) {}

  @Query(() => Joke)
  async randomJoke(
    @Args('category', { nullable: true }) category?: string,
    @Args('name', { nullable: true }) name?: string,
  ) {
    const response = await firstValueFrom(
      this.chuckService.getRandomJoke(category, name),
    );
    return response.data;
  }

  @Query(() => [String])
  async jokeCategories() {
    const response = await firstValueFrom(
      this.chuckService.getJokeCategories(),
    );
    return response.data;
  }
}
