
import { Controller, Post, Body } from '@nestjs/common';
import { KasirTokoService } from './kasir-toko.service';
import { CheckoutKasirDto } from './dto/checkout.dto';

@Controller('kasir-toko')
export class KasirTokoController {
  constructor(
    private readonly service: KasirTokoService,
  ) {}

  @Post('checkout')
  checkout(@Body() dto: CheckoutKasirDto) {
    return this.service.checkout(
      dto.member,
      dto.metode,
      dto.items,
    );
  }
}
