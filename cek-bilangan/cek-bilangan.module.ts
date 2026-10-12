
import { Module } from '@nestjs/common';
import { CekBilanganController } from './cek-bilangan.controller';
import { CekBilanganService } from './cek-bilangan.service';

@Module({
  controllers: [CekBilanganController],
  providers: [CekBilanganService],
})
export class CekBilanganModule {}
