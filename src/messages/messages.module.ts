import { Module } from '@nestjs/common';
import { MessagesController } from './controller/messages.controller';
import { MessageRepository } from './repository/message-repository';
import { MessageService } from './service/message-service';

@Module({
  controllers: [MessagesController],
  providers: [MessageService,MessageRepository]
})
export class MessagesModule {}
