import { PartialType } from '@nestjs/mapped-types';
import { CreateConsumerInformationDto } from './create-consumer-information.dto';

export class UpdateConsumerInformationDto extends PartialType(CreateConsumerInformationDto) {}
