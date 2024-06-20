import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Joke } from './joke.entity';

@ObjectType()
export class JokeSearchResult {
  @Field(() => Int)
  total?: number;

  @Field(() => [Joke], { nullable: true })
  result: Joke[];
}
