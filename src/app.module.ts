import { Module } from '@nestjs/common';
import { DeckController } from './controllers/deck.controllers';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controllers/user.controllers';
import { UserService } from './services/user.services';
import { UserSchema } from './Mongo/schemas/user.shema';
import { UserRepository } from './Mongo/repository/user.repository';


@Module({
  imports: [

    MongooseModule.forRoot('mongodb://localhost:27017/deck-lesson'),
    MongooseModule.forFeature([
      {name:'user', schema: UserSchema}
    ])

  ],
  controllers: [DeckController,UserController],
  providers: [UserService,UserRepository]
})
export class AppModule {}
  