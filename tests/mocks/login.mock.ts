const validPassword = '123456';
const validUsername = 'Hagar';
const invalidPassword = '123';
const invalidUsername = 'Ha';

const invalidPasswordLoginBody = {
  username: validUsername,
  password: invalidPassword,
};

const noUsernameLoginBody = {
  username: '',
  password: validPassword,
};
const noPasswordLoginBody = {
  username: validUsername,
  password: '',
};
const validLoginBody = {
  username: validUsername,
  password: validPassword,
};

const hashedPassword = '$2a$10$wz9Lik9CfnxJPczeR4Zw7uPNtS5s99nYWsB4WEg.0dPSG54jRExTq';
const existUser = {
  id: 1,
  username: validUsername,
  vocation: 'Guerreiro',
  level: 10,
  password: hashedPassword,
};

export default {
  validPassword,
  validUsername,
  noUsernameLoginBody,
  noPasswordLoginBody,
  validLoginBody,
  existUser,
  invalidPassword,
  invalidUsername,
  invalidPasswordLoginBody,
}