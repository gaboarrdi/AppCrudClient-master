// client.service.ts
import { Injectable } from '@nestjs/common';

import { CreateClientDto } from './dto/create-client.dto';
import { PrismaClient } from '@prisma/client';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createClient(createClientDto: CreateClientDto): Promise<Client> {
    const createdClient = await this.prisma.client.create({
      data: createClientDto,
    });
    return createdClient;
  }

  async findClientByEmail(email: string): Promise<Client | null> {
    return this.prisma.client.findUnique({
      where: { email },
    });
  }

  async getAllClients(): Promise<Client[]> {
    return this.prisma.client.findMany();
  }
}
