import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './tag.entity';

@Module({
  controllers: [TagsController],
  // below line add entity table to database pgadmin
  imports: [TypeOrmModule.forFeature([Tag])]
})
export class TagsModule {}
