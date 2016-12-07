import { Turismo1Page } from './app.po';

describe('turismo1 App', function() {
  let page: Turismo1Page;

  beforeEach(() => {
    page = new Turismo1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
