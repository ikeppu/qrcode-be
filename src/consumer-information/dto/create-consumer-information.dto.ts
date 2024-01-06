import { IsNotEmpty, IsString } from 'class-validator';

export class CreateConsumerInformationDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  subtitle: string;
  @IsString()
  @IsNotEmpty()
  details: string;
  metadata?: Record<string, any>;
}
