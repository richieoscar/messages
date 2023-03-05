import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageRequest } from '../dto/message.request';
import { MessageService } from '../service/message-service';

@Controller('messages')
export class MessagesController {
    
  private messageService: MessageService;

  constructor(messgeService:MessageService) {
    this.messageService = messgeService;
  }

  @Get('/all')
  getMessages() {
    return this.messageService.getMessages();
  }

  @Post('/store')
  createMessage(@Body() messageRequest: MessageRequest) {
    this.messageService.addMessage(messageRequest.body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.messageService.findMessage(id);
  }
}
