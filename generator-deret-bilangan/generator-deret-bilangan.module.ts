
import { Module } from '@nestjs/common';
import { GeneratorDeretBilanganController } from './generator-deret-bilangan.controller';
import { GeneratorDeretBilanganService } from './generator-deret-bilangan.service';

@Module({
  controllers: [GeneratorDeretBilanganController],
  providers: [GeneratorDeretBilanganService],
})
export class GeneratorDeretBilanganModule {}
