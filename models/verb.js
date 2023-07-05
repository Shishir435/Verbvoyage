import { Schema, model, models } from 'mongoose';

const VerbSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  verb: {
    type: String,
    required: [true, 'verb is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Verb = models.Verb || model('Verb', VerbSchema);

export default Verb;