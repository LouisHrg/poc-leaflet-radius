import { IsNotEmpty, IsLatitude, IsLongitude } from 'class-validator';

export default class QueryParams {
  @IsLatitude()
  @IsNotEmpty()
  public lat: number

  @IsLongitude()
  @IsNotEmpty()
  public lon: number
}
