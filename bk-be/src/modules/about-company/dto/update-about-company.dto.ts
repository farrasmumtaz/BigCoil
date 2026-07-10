import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutCompanyDto } from './create-about-company.dto';

export class UpdateAboutCompanyDto extends PartialType(CreateAboutCompanyDto) {}
