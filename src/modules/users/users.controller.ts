import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('create')
  async createUser(@Body() userData: Prisma.UserCreateInput): Promise<User> {
    try {
      return await this.userService.create(userData);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new HttpException(
            'An user with this email is already registerd.',
            400,
          );
        }

        throw new HttpException(error.message, 400);
      }

      if (error instanceof Prisma.PrismaClientValidationError) {
        throw new HttpException(
          'Request did not pass database client validation. What may have occurred: - An required field is missing. - Wrong type on a required field.',
          400,
        );
      }

      throw new HttpException(error.message, 500);
    }
  }
}
