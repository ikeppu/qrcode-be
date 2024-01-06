import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsumerInformationService } from './consumer-information.service';
import { CreateConsumerInformationDto } from './dto/create-consumer-information.dto';
import { UpdateConsumerInformationDto } from './dto/update-consumer-information.dto';

@Controller('consumer-information')
export class ConsumerInformationController {
  constructor(private readonly consumerInformationService: ConsumerInformationService) {}

  @Post()
  create(@Body() createConsumerInformationDto: CreateConsumerInformationDto) {
    return this.consumerInformationService.create(createConsumerInformationDto);
  }

  @Get()
  findAll() {
    return this.consumerInformationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consumerInformationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsumerInformationDto: UpdateConsumerInformationDto) {
    return this.consumerInformationService.update(+id, updateConsumerInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consumerInformationService.remove(+id);
  }
}
