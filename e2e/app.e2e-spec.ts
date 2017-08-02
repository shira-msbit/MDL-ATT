import { MDLATTPage } from './app.po';

describe('mdl-att App', () => {
  let page: MDLATTPage;

  beforeEach(() => {
    page = new MDLATTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
