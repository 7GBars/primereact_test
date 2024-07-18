
// Register the EmailService with the container
import {container} from "tsyringe";
import EmailService from "./EmailService";
import NotificationService from "./NotificationService";

container.register('EmailService', { useClass: EmailService });
// Resolve the NotificationService, which has a dependency on EmailService
const notificationService = container.resolve(NotificationService);
// Use the NotificationService to send a notification
// notificationService.sendNotification('Hello, Dependency Injection with TSyringe!');