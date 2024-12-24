import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prismsa.service';
import { NotificationsRepository } from 'src/application/repositories/notification-repository';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notification-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
