import { Injectable } from '@nestjs/common';
import { MessageRepository } from '../repository/message-repository';
@Injectable()
export class MessageService {
  private messageRepository: MessageRepository;

  constructor(repo: MessageRepository) {
    this.messageRepository = repo;
  }

  findMessage(id: string) {
    return this.messageRepository.findMessage(id);
  }

  getMessages() {
    return this.messageRepository.getMessages();
  }

  addMessage(content: string) {
    return this.messageRepository.addMessage(content);
  }
}
