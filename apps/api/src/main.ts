import "dotenv/config";
import "reflect-metadata";
import { env } from "./config/env";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT);
}

void bootstrap();
