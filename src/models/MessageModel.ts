class MessageModel {
  title: string
  question: string
  id?: number
  userEmail?: string
  adminEmail?: string
  response?: string
  closed?: boolean

  constructor(title: string, question: string) {
    this.question = question
    this.title = title
  }
}

export default MessageModel
