import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
@Injectable()
export class MessageRepository {
  async findMessage(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async getMessages() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    console.log(messages);
    return messages;
  }

  async addMessage(content: string) {
    const message = await readFile('messages.json', 'utf8');
    const res = JSON.parse(message);
    const id = Math.floor(Math.random() * 999);
    res[id] = { id, content };
    await writeFile('messages.json', JSON.stringify(res));
  }
}
