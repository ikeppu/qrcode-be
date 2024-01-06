import { Injectable } from '@nestjs/common';
import { CreateConsumerInformationDto } from './dto/create-consumer-information.dto';
import { UpdateConsumerInformationDto } from './dto/update-consumer-information.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsumerInformation } from './entities/consumer-information.entity';

@Injectable()
export class ConsumerInformationService {
  constructor(
    @InjectRepository(ConsumerInformation)
    private readonly consumerInfoRepository: Repository<ConsumerInformation>,
  ) {}

  async create(createConsumerInformationDto: CreateConsumerInformationDto) {
    const consumerInfo = new ConsumerInformation();
    consumerInfo.title = createConsumerInformationDto.title;
    consumerInfo.subtitle = createConsumerInformationDto.subtitle;
    consumerInfo.details = createConsumerInformationDto.details;

    return await this.consumerInfoRepository.save(consumerInfo);
  }

  async findAll() {
    try {
      return await this.consumerInfoRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} consumerInformation`;
  }

  update(
    id: number,
    updateConsumerInformationDto: UpdateConsumerInformationDto,
  ) {
    return `This action updates a #${id} consumerInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} consumerInformation`;
  }
}
