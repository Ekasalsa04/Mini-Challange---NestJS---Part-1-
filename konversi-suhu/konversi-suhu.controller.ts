
import {
  Controller,
  Get,
  Query,
  ParseFloatPipe,
} from '@nestjs/common';
import { KonversiSuhuService } from './konversi-suhu.service';

@Controller('konversi-suhu')
export class KonversiSuhuController {
  constructor(
    private readonly service: KonversiSuhuService,
  ) {}

  @Get()
  konversi(
    @Query('nilai', ParseFloatPipe) nilai: number,
    @Query('dari') dari: string,
    @Query('ke') ke: string,
  ) {
    return {
      nilaiAsal: nilai,
      dari,
      ke,
      hasil: this.service.konversiSuhu(
        nilai,
        dari,
        ke,
      ),
    };
  }
}
