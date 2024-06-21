import { Test, TestingModule } from '@nestjs/testing';
import { ChuckResolver } from './chuck.resolver';
import { ChuckService } from '../../application/services/chuck.service';

describe('ChuckResolver', () => {
  let resolver: ChuckResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChuckResolver, ChuckService],
    }).compile();

    resolver = module.get<ChuckResolver>(ChuckResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
