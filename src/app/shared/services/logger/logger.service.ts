import { Injectable } from '@angular/core';
import { Logger } from './logger.interface';

@Injectable({
  providedIn: 'root',
})
export class LoggerService implements Logger {
  info(message: string): void {
    console.info(message);
  }
  warning(warning: string): void {
    console.warn(warning);
  }
  error(error: string): void {
    console.error(error);
  }
}
