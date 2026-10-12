
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CekBilanganService } from './cek-bilangan.service';

@Controller()
export class CekBilanganController {
  constructor(
    private readonly service: CekBilanganService,
  ) {}

  @Get('bilangan/:angka')
  cekBilangan(
    @Param('angka', ParseIntPipe) angka: number,
  ) {
    return this.service.countBilangan(angka);
  }
}
