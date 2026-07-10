import { IsInt, IsOptional } from 'class-validator';

export class CreateProductTechnologyDto {
  @IsInt()
  productId!: number;

  @IsInt()
  technologyId!: number;

  @IsOptional()
  @IsInt()
  sortOrder?: number;
}
