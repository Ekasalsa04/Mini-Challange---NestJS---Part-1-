
import {
  Controller,
  Get,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { GeneratorDeretBilanganService } from './generator-deret-bilangan.service';

@Controller('deret')
export class GeneratorDeretBilanganController {
  constructor(
    private readonly service: GeneratorDeretBilanganService,
  ) {}

  @Get()
  getDeret(
    @Query('jenis') jenis: string,
    @Query('jumlah', ParseIntPipe) jumlah: number,
    @Query('urutan', new DefaultValuePipe('asc'))
    urutan: string,
  ) {
    return this.service.getDeret(jenis, jumlah, urutan);
  }
}
