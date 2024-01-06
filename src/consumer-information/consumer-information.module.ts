import { Module } from '@nestjs/common';
import { ConsumerInformationService } from './consumer-information.service';
import { ConsumerInformationController } from './consumer-information.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumerInformation } from './entities/consumer-information.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConsumerInformation])],
  controllers: [ConsumerInformationController],
  providers: [ConsumerInformationService],
})
export class ConsumerInformationModule {}
