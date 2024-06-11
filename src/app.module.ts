import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PasswordModule } from './password/password.module';
import { SiteModule } from './site/site.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, PasswordModule, SiteModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
