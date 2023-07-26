import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
