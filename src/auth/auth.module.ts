import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule], // Import UsersModule
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
