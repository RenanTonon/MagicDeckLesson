import { Module } from '@nestjs/common';
import { DeckController } from './controllers/deck.controllers';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controllers/user.controllers';
import { UserService } from './services/user.services';
import { UserSchema } from './Mongo/schemas/user.shema';
import { UserRepository } from './Mongo/repository/user.repository';
import { DeckService } from './services/deck.services';
import { DeckRepository } from './Mongo/repository/deck.repository';
import { DeckSchema } from './Mongo/schemas/deck.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constant';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';


@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/deck-lesson'),
    MongooseModule.forFeature([
      {name:'user', schema: UserSchema}
    ]),
    MongooseModule.forFeature([
      {name:'deck', schema: DeckSchema}
    ]),
    

  ],
  controllers: [DeckController,UserController,AuthController],
  providers: [UserService,UserRepository,DeckService,DeckRepository,AuthService]
})
export class AppModule {}
  