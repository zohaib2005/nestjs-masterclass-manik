import { Module } from '@nestjs/common';
import { MetaOptionsController } from './meta-options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOption } from './meta-option.entity';

@Module({
  controllers: [MetaOptionsController],
  // below line add entity table to database pgadmin
  imports: [TypeOrmModule.forFeature([MetaOption])],
})
export class MetaOptionsModule {}
