import { IcpFrontendPage } from './app.po';

describe('icp-frontend App', () => {
  let page: IcpFrontendPage;

  beforeEach(() => {
    page = new IcpFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
