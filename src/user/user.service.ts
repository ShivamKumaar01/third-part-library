import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { MailerService } from 'src/mailer/mailer.service';

const saltOrRounds = 10;

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,
  private readonly mailerService:MailerService) { }
  async create(createUserDto: CreateUserDto) {
    const user: User = new User()
    user.name = createUserDto.name
    user.email = createUserDto.email
    const password = createUserDto.password
    const hashPassword = await bcrypt.hash(password, 10);
    user.password = hashPassword
    user.age = createUserDto.age
    user.gender = createUserDto.gender
    this.mailerService.sendWelcomeEmail(createUserDto.email,createUserDto.name)
    this.userRepository.save(user)
    return { message: "user registerd successfully"};
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  findOneByEmail(email:string){
    return this.userRepository.findOne({where:{email:email}})
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
