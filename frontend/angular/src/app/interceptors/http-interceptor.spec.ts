import { HttpInterceptor } from './http-interceptor';

describe('WithCredentialInterceptor', () => {
  it('should create an instance', () => {
    expect(new HttpInterceptor()).toBeTruthy();
  });
});
