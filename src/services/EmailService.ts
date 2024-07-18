import { injectable } from 'tsyringe';
@injectable()
export class EmailService {
  name: string
  constructor(name: string = 'EmailService') {
    this.name = name;
  }
  sendEmail(message: string) {
    console.log(`Email sent with message: ${message}`);
  }
}
