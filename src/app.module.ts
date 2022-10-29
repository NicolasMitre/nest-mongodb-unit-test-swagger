import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { TrainerModule } from './trainer/trainer.module';
import { GymModule } from './gym/gym.module';

@Module({
  imports: [PokemonModule, TrainerModule, GymModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
