import { IsOptional, IsString } from 'class-validator';

export class CreateServiceCenterDto {
  @IsString()
  name!: string;

  @IsString()
  island!: string;

  @IsString()
  province!: string;

  @IsString()
  city!: string;

  @IsString()
  address!: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  mapsUrl?: string;
}
