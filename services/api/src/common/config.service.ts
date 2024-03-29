import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { isNil } from 'lodash';
import * as path from 'path';

// import { UserSubscriber } from '../../entity-subscribers/user-subscriber';
import { SnakeNamingStrategy } from '../snake-naming.strategy';

// dotenv
// todo: remove dotenv 
import dotenv = require('dotenv');
import * as process from "process";

@Injectable()
export class ApiConfigService {
  constructor(@Inject(ConfigService) private service: ConfigService) {}

  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  get isTest(): boolean {
    return this.nodeEnv === 'test';
  }

  get nodeEnv(): string {
    return this.getString('NODE_ENV') || 'development';
  }

  get fallbackLanguage(): string {
    return this.getString('FALLBACK_LANGUAGE') || 'en';
  }

  get postgresConfig(): TypeOrmModuleOptions {
    const entities = [
      path.join(__dirname, '/../**/*.entity{.ts,.js}'),
      path.join(__dirname, '/../**/*.view-entity{.ts,.js}'),
    ];
    const migrations = [path.join(__dirname, '../../migrations/*{.ts,.js}')];

    return {
      entities,
      migrations,
      keepConnectionAlive: !this.isTest,
      dropSchema: this.isTest,
      type: 'postgres',
      name: 'default',
      host: this.getString('DB_HOST') || 'localhost',
      port: this.getNumber('DB_PORT') || 5432,
      username: this.getString('DB_USERNAME') || 'postgres',
      password: this.getString('DB_PASSWORD') || 'postgres',
      database: this.getString('DB_DATABASE') || 'postgres',
      // subscribers: [UserSubscriber],
      migrationsRun: true,
      logging: this.getBoolean('ENABLE_ORM_LOGS', false),
      namingStrategy: new SnakeNamingStrategy(),
    };
  }

  get documentationEnabled(): boolean {
    return this.getBoolean('ENABLE_DOCUMENTATION', true);
  }

  get authConfig() {
    return {
      accessTokenPrivateKey: this.getString('ACCESS_TOKEN_PRIVATE_KEY'),
      accessTokenPublicKey: this.getString('ACCESS_TOKEN_PUBLIC_KEY'),
      accessTokenAlgorithm: this.getString('ACCESS_TOKEN_ALGORITHM'),
      accessTokenExpiresIn: this.getString('ACCESS_TOKEN_EXPIRATION_TIME'),
      refreshTokenPrivateKey: this.getString('REFRESH_TOKEN_PRIVATE_KEY'),
      refreshTokenPublicKey: this.getString('REFRESH_TOKEN_PUBLIC_KEY'),
      refreshTokenAlgorithm: this.getString('REFRESH_TOKEN_ALGORITHM'),
      refreshTokenExpiresIn: this.getString('REFRESH_TOKEN_EXPIRATION_TIME'),
      emailVerificationTokenPrivateKey: this.getString(
        'EMAIL_VERIFICATION_TOKEN_PRIVATE_KEY',
      ),
      emailVerificationTokenPublicKey: this.getString(
        'EMAIL_VERIFICATION_TOKEN_PUBLIC_KEY',
      ),
      emailVerificationTokenAlgorithm: this.getString(
        'EMAIL_VERIFICATION_TOKEN_ALGORITHM',
      ),
      emailVerificationTokenExpiresIn: this.getString(
        'EMAIL_VERIFICATION_TOKEN_EXPIRATION_TIME',
      ),
      emailVerificationUrl: this.getString('EMAIL_VERIFICATION_URL'),
    };
  }

  get appConfig() {
    return {
      port: this.getString('PORT', '8080'),
    };
  }

  // get awsS3Config() {
  //     return {
  //         bucketRegion: this.getString('AWS_S3_BUCKET_REGION'),
  //         bucketApiVersion: this.getString('AWS_S3_API_VERSION'),
  //         bucketName: this.getString('AWS_S3_BUCKET_NAME'),
  //     };
  // }

  private getNumber(key: string): number {
    const value = this.get(key);

    try {
      return Number(value);
    } catch {
      throw new Error(key + ' environment variable is not a number');
    }
  }

  // get natsEnabled(): boolean {
  //     return this.getBoolean('NATS_ENABLED', false);
  // }

  // get natsConfig() {
  //     return {
  //         host: this.getString('NATS_HOST'),
  //         port: this.getNumber('NATS_PORT'),
  //     };
  // }

  private getBoolean(key: string, defaultValue: boolean): boolean {
    const value = this.get(key, defaultValue.toString());

    try {
      return Boolean(JSON.parse(value));
    } catch {
      throw new Error(key + ' env var is not a boolean');
    }
  }

  private getString(key: string, defaultValue = ''): string {
    const value = this.get(key, defaultValue);

    return value.replace(/\\n/g, '\n');
  }

  private get(key: string, defaultValue = ''): string {
    // todo: return to use the nest service. it is broken!!!
    // detenv can be unsafe
    //const value = this.service.get<string>(key, defaultValue);
    const value = process.env[key] || defaultValue;

    if (isNil(value)) {
      throw new Error(key + ' environment variable does not set'); // probably we should call process.exit() too to avoid locking the service
    }

    return value;
  }
}
