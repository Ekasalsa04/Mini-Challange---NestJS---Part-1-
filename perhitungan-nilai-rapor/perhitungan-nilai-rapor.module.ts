
import { Module } from '@nestjs/common';
import { PerhitunganNilaiRaporController } from './perhitungan-nilai-rapor.controller';
import { PerhitunganNilaiRaporService } from './perhitungan-nilai-rapor.service';

@Module({
  controllers: [PerhitunganNilaiRaporController],
  providers: [PerhitunganNilaiRaporService],
})
export class PenghitungNilaiRaporModule {}
