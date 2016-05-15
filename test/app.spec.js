import './setup';
import {App} from '../src/app';

describe('the App module', () => {
   var app;
   var mockedRouter;

   beforeEach(() => {
      mockedRouter = new RouterStub();
      app = new App();
      app.configureRouter(mockedRouter, mockedRouter);
   });

   it('contains a router property', () => {
      expect(app.router).toBeDefined();
   });
});

class RouterStub {
  configure(handler) {
    handler(this);
  }

  map(routes) {
    this.routes = routes;
  }
}