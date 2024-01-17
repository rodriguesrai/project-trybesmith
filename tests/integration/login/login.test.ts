import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /login', function () { 
  const messageEmptyUsernameOrPassword = '"username" and "password" are required';
  const messageInvalidUsernameOrPassword = 'Username or password invalid';
  beforeEach(function () { sinon.restore(); });

  it('ao não receber username, retorna um erro', async function () { 
    const httpRequestBody = loginMock.noUsernameLoginBody

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body.message).to.be.deep.equal(messageEmptyUsernameOrPassword);
   })
   it('ao receber password inválido, retorna um erro', async function () { 
    const httpRequestBody = loginMock.invalidPasswordLoginBody
    sinon.stub(UserModel, 'findOne').resolves(null);

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body.message).to.be.deep.equal(messageInvalidUsernameOrPassword);
    })
});
