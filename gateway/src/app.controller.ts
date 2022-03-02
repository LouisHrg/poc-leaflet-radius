import { Controller, Get, Query, Request, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import QueryParams from './DTO/getClosestLocalityQueryParams';
import * as Redis from "ioredis";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getClosestLocality(
      @Query(new ValidationPipe()) params: QueryParams
    ) {

      const { lat, lon } = params;

      const redis = new Redis();

      const closestMatches = await redis.georadius("locality:geo", lat, lon, 100, "km", "WITHDIST", "WITHCOORD");

      redis.multi({pipeline: false});

      closestMatches.forEach((key, index) => {
          redis.hgetall(`locality:city:${key[0]}`);
      });

      const res = await redis.exec();

      const mappedRes = res.map(el => ({
        name: el[1][1],
        region: el[1][3],
        postalCode: el[1][5],
      }));

      return closestMatches.map((el, index) => ({
         key: el[0],
         ...mappedRes[index],
         dist: el[1],
         geo: {
           latitude: el[2][0],
           longitude: el[2][1],
         }
      }))
  }
}

