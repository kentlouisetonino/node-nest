import { IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/entities/User';

export class LoginOutput {
  @IsNotEmpty()
  @IsString()
  accessToken: string;
}

export class AuthorizeTokenOutput {
  @IsNotEmpty()
  @IsString()
  accessToken: string;

  @IsNotEmpty()
  currentUser: User;
}
