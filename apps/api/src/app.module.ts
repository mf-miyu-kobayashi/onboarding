import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KimarijiModule } from './onboarding-backend/kimariji/kimariji.module';
import { PrefecturesModule } from './onboarding-backend/prefectures/prefectures.module';
import { UsersController } from './onboarding-backend/users.controller';
import { UsersService } from './onboarding-backend/users.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrefecturesModule,
    KimarijiModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
