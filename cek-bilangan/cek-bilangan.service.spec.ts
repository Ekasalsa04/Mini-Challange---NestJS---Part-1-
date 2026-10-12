import { Test, TestingModule } from '@nestjs/testing';
import { CekBilanganService } from './cek-bilangan.service';

konversiSuhu(
    nilai: number,
    dari: string,
    ke: string,
  ): number {
    let celsius: number;

    // suhu asal ke celcius
    if (dari === 'celsius') {
      celsius = nilai;
    } else if (dari === 'fahrenheit') {
      celsius = (nilai - 32) * 5 / 9;
    } else {
      celsius = nilai - 273.15;
    }

    // celcius ke suhu tujuan 
    if (ke === 'celsius') {
      return celsius;
    } else if (ke === 'fahrenheit') {
      return (celsius * 9 / 5) + 32;
    } else {
      return celsius + 273.15;
    };
  }
function konversiSuhu(nilai: any, number: any, dari: any, string: any, ke: any, string1: any) {
  throw new Error('Function not implemented.');
}

