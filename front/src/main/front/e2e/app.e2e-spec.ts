import { AngularBootPage } from './app.po';

describe('angular-boot App', () => {
  let page: AngularBootPage;

  beforeEach(() => {
    page = new AngularBootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
