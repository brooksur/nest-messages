import { Injectable } from '@nestjs/common'
import { readFile, writeFile } from 'fs/promises'

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8')
    const messages = JSON.parse(contents)
    const message = messages[id]
    return message
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8')
    const messages = JSON.parse(contents)
    return messages
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8')
    const messages = JSON.parse(contents)
    const id = Math.floor(Math.random() * 999)
    const message = { id, content }
    messages[id] = message
    await writeFile('messages.json', JSON.stringify(messages))
    return message
  }
}
