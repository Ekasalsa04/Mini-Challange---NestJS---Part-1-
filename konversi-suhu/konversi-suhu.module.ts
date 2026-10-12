
import { Module } from '@nestjs/common';
import { KonversiSuhuController } from './konversi-suhu.controller';
import { KonversiSuhuService } from './konversi-suhu.service';

@Module({
  controllers: [KonversiSuhuController],
  providers: [KonversiSuhuService],
})
export class KonversiSuhuModule {}
