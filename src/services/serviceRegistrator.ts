import { container } from 'tsyringe';


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


export const RegisterService = () => {
  console.log('Регистрация сервисов экземпляр ')
  const mailService = new EmailService('EmailService');
  container.register('EmailService', { useValue:  mailService});
}