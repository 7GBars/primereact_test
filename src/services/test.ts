import { container, singleton, injectable, inject } from 'tsyringe';


export const test = () => {

// Example services with dependencies
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

// Example component that uses services with dependency injection
  @injectable()
  class Services {
    private apiService: ApiService;
    private loggerService: LoggerService;

    constructor(

      @inject('ApiService') apiService: ApiService,
      @inject('LoggerService') loggerService: LoggerService
    ) {
      this.apiService = apiService;
      this.loggerService = loggerService;
    }

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
  container.register('ApiService', {useClass: ApiService});
  container.register('LoggerService', {useClass: LoggerService});
  container.register('Services', {useClass: Services});

// Resolving the component from the container
  const myComponent = container.resolve<Services>('Services');

// Using the resolved component
  myComponent.fetchData();
}