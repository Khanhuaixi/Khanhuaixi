import { HEROES } from './mock-heroes';
//import { HEROES } from './heroes';

describe('HEROES', () => {
  it('should create an instance', () => {
    expect(new HEROES()).toBeTruthy();
  });
});
