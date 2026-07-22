import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.prisma.company.create({
      data: createCompanyDto,
    });
  }

  findAll() {
    return this.prisma.company.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }
  findMain() {
    return this.prisma.company.findFirst({
      orderBy: {
        id: 'asc',
      },
    });
  }
  async findOne(id: number) {
    const company = await this.prisma.company.findUnique({
      where: {
        id,
      },
    });

    if (!company) {
      throw new NotFoundException('Company tidak ditemukan');
    }

    return company;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    await this.findOne(id);

    return this.prisma.company.update({
      where: {
        id,
      },
      data: updateCompanyDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.company.delete({
      where: {
        id,
      },
    });
  }
}
