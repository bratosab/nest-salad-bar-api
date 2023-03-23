import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const controllerClass = context.getClass();
    const [req]: [Request] = context.getArgs();

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          this.logger.log(
            `Time spent on [${controllerClass.name}] ${req.originalUrl} : ${
              Date.now() - now
            }ms`,
          ),
        ),
      );
  }
}
