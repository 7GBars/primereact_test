import 'reflect-metadata';
import { container, singleton, injectable, inject } from 'tsyringe';

export const test = () => {

  @singleton()
  class ApiService {
    getData(): Promise<any> {
      // Perform API request and return data
      return Promise.resolve(null); // Replace with actual API request
    }
  }

  @singleton()
  class LoggerService {
    log(message: string): void {
      console.log(message);
    }
  }

  @injectable()
  class Services {
    constructor(
      @inject('ApiService') private apiService: ApiService,
      @inject('LoggerService') private loggerService: LoggerService
    ) {}

    fetchData(): void {
      this.apiService.getData()
        .then((data) => {
          // Handle the data
        })
        .catch((error) => {
          this.loggerService.log(`Error: ${error}`);
        });
    }
  }

  // Registering dependencies
  container.registerSingleton<ApiService>('ApiService', ApiService);
  container.registerSingleton<LoggerService>('LoggerService', LoggerService);
  container.registerSingleton<Services>('Services', Services);

  // Resolving the component from the container
  const myComponent = container.resolve<Services>('Services');

  // Using the resolved component
  myComponent.fetchData();
}