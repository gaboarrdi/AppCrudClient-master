import { Controller, Post, Body, Get, Param } from '@nestjs/common';

import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './entities/client.entity';
import { ClientService } from './client.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async createClient(
    @Body() createClientDto: CreateClientDto,
  ): Promise<Client> {
    return this.clientService.createClient(createClientDto);
  }

  @Get(':email')
  async findClientByEmail(
    @Param('email') email: string,
  ): Promise<Client | null> {
    return this.clientService.findClientByEmail(email);
  }
}
