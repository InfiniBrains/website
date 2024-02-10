import {
  type CallHandler,
  type ExecutionContext,
  Injectable,
  type NestInterceptor,
} from '@nestjs/common';
import { type Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { type EntityDto } from "../../dtos/entity.dto";
import { TranslationService } from "../../shared/services/translation.service";

// FIXME: add implementation
@Injectable()
export class TranslationInterceptor implements NestInterceptor {
  constructor(private readonly translationService: TranslationService) {}

  public intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<EntityDto> {
    return next
      .handle()
      .pipe(
        mergeMap((data) =>
          this.translationService.translateNecessaryKeys(data),
        ),
      );
  }
}
