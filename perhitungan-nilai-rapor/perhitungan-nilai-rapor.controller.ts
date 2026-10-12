
import { Controller, Post, Body } from '@nestjs/common';
import { PerhitunganNilaiRaporService } from './perhitungan-nilai-rapor.service';
import { HitungNilaiRaporDto } from './dto/hitung-nilai-rapor.dto';

@Controller('perhitungan-nilai-rapor')
export class PerhitunganNilaiRaporController {
  constructor(
    private readonly service: PerhitunganNilaiRaporService,
  ) {}

  @Post()
  hitungNilai(@Body() dto: HitungNilaiRaporDto) {
    return this.service.hitungNilai(
      dto.nama,
      dto.tugas,
      dto.uts,
      dto.uas,
    );
  }
}
