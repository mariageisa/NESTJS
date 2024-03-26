import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
// import { on } from "supertest/lib/test";

@Injectable()

export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect()
    }
    async enableShutdonwHooks (app: INestApplication) {
        process.on('beforeExit', async () => {
            await app.close()
        })
    }
}