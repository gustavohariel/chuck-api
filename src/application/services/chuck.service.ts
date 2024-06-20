import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Joke } from 'src/domain/entities/chuck/joke.entity';

@Injectable()
export class ChuckService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  private readonly apiUrl = this.configService.get<string>('CHUCK_API_URL');

  getRandomJoke(
    category?: string,
    name?: string,
  ): Observable<AxiosResponse<Joke>> {
    let url = `${this.apiUrl}/jokes/random`;

    if (category) {
      url += `?category=${category}`;
    }

    if (name) {
      url += `${category ? '&' : '?'}name=${name}`;
    }

    return this.httpService.get(url);
  }

  getJokeCategories(): Observable<AxiosResponse<String>> {
    return this.httpService.get(this.apiUrl + '/jokes/categories');
  }
}
