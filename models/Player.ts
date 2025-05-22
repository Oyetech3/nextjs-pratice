import mongoose, { Schema, models, model } from 'mongoose';

interface IPlayer {
  name: string;
  position: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const playerSchema = new Schema<IPlayer>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    position: {
      type: String,
      required: [true, 'Position is required'],
    },
  },
  { 
    timestamps: true 
  }
);

const Player = models.Player || model<IPlayer>('Player', playerSchema);

export default Player;