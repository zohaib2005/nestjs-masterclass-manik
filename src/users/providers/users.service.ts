import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-params.dto';

// All business logic should be written in services like database queries
@Injectable()
export class UsersService {
  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Alice',
        email: 'alice@doe.com',
      },
    ];
  }
}
