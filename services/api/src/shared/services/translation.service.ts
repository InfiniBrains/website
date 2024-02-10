import { Injectable } from '@nestjs/common';
import { isArray, isString, map } from 'lodash';
import { I18nService, type TranslateOptions } from 'nestjs-i18n';

import { EntityDto } from "../../dtos/entity.dto";
import { STATIC_TRANSLATION_DECORATOR_KEY } from "../../common/decorators";
import { type ITranslationDecoratorInterface } from "../../common/interfaces";
import { ContextProvider } from "../../common/providers";

@Injectable()
export class TranslationService {
  constructor(private readonly i18n: I18nService) {}

  async translate(key: string, options?: TranslateOptions): Promise<string> {
    return this.i18n.translate(`${key}`, {
      ...options,
      lang: ContextProvider.getLanguage(),
    });
  }

  async translateNecessaryKeys<T extends EntityDto>(dto: T): Promise<T> {
    await Promise.all(
      map(dto, async (value, key) => {
        if (isString(value)) {
          const translateDec: ITranslationDecoratorInterface | undefined =
            Reflect.getMetadata(STATIC_TRANSLATION_DECORATOR_KEY, dto, key);

          if (translateDec) {
            return this.translate(
              `${translateDec.translationKey ?? key}.${value}`,
            );
          }

          return;
        }

        if (value instanceof EntityDto) {
          return this.translateNecessaryKeys(value);
        }

        if (isArray(value)) {
          return Promise.all(
            map(value, (v) => {
              if (v instanceof EntityDto) {
                return this.translateNecessaryKeys(v);
              }
            }),
          );
        }
      }),
    );

    return dto;
  }
}
