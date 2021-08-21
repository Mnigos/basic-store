import { Message } from './message'

export interface Room {
  _id: string
  uuid: string
  users: string[]
  messages: Message[]
  createdAt?: Date
}
