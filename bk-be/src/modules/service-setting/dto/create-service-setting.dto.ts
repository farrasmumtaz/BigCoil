import { IsNotEmpty, IsString } from 'class-validator';

export class CreateServiceSettingDto {
  @IsString()
  @IsNotEmpty()
  embedUrl!: string;
}
