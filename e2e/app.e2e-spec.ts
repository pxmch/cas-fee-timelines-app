import { NewTimelinesPage } from './app.po';

describe('new-timelines App', function() {
  let page: NewTimelinesPage;

  beforeEach(() => {
    page = new NewTimelinesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
