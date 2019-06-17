import { ProductModuleModule } from './product-module.module';

describe('ProductModuleModule', () => {
  let productModuleModule: ProductModuleModule;

  beforeEach(() => {
    productModuleModule = new ProductModuleModule();
  });

  it('should create an instance', () => {
    expect(productModuleModule).toBeTruthy();
  });
});
