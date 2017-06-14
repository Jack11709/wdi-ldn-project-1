const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, trim: true, unique: true },
  username: { type: String, trim: true, unique: true },
  image: { type: String },
  password: { type: String },
  facebookId: { type: Number }
});

userSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    if(this.image.match(/^http/)) return this.image;
    return `https://s3-eu-west-1.amazonaws.com/wdi-london-27/${this.image}`;
  });

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(this._passwordConfirmation && this._passwordConfirmation !== this.password) this.invalidate('passwordConfirmation', 'does not match');
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.pre('remove', function removeUserPosts(next) {
  this.model('Post')
    .remove({ createdBy: this.id })
    .then(() => {
      return this.model('Post').update(
        { 'comments.createdBy': this.id }, // this is the query
        { $pull: { comments: { createdBy: this.id } } } // this is the update
      );
    })
    .then(next)
    .catch(next);
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
