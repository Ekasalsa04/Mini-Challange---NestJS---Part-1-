
import { Module } from '@nestjs/common';
import { KasirTokoController } from './kasir-toko.controller';
import { KasirTokoService } from './kasir-toko.service';

@Module({
  controllers: [KasirTokoController],
  providers: [KasirTokoService],
})
export class KasirTokoModule {}
