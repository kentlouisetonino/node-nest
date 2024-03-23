import {
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id: id } });

    // Check if user does not exist.
    if (!user) {
      throw new NotFoundException('User ID does not exist.');
    }

    return user;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userRepo.findOne({ where: { email: email } });

    // Check if user does not exist.
    if (!user) {
      throw new NotFoundException('User email does not exist.');
    }

    return user;
  }

  async createUser(payload: CreateUserInput): Promise<User> {
    const user = await this.userRepo.findOne({
      where: { email: payload.email }
    });

    // Check if user already exist.
    if (!user) {
      throw new ConflictException(
        'Email already exist. Use a different email.'
      );
    }

    const encryptedPassword = this.jwtService.sign(payload.password, {
      secret: `${this.configService.get('AUTH_PASSWORD_SECRET')}`
    });

    const newUser = this.userRepo.create({
      ...payload,
      password: encryptedPassword
    });

    return await this.userRepo.save(newUser);
  }
}
