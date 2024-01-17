import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock'

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('ao receber body válido, retorna SUCCESSFUL', async () => { 
    const mockCreateReturn = ProductModel.build(productMock.validProductBody)
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

    const httpResponse = await chai
    .request(app)
    .post('/products')
    .send(productMock.validProductBody);

    expect(httpResponse.status).to.be.equal(201);
    expect(httpResponse.body).to.be.deep.equal(productMock.validProductBody);
   })
});
