import 'reflect-metadata';
import { container } from 'tsyringe';
import {EmailService} from './EmailService';



export const RegisterService = () => {
  console.log('Регистрация сервисов ')
  const mailService = new EmailService('EmailService');
  container.register('EmailService', { useValue:  mailService});
}