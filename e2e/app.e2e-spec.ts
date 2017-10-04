import { TodoCrudPage } from './app.po';

describe('todo-crud App', () => {
  let page: TodoCrudPage;

  beforeEach(() => {
    page = new TodoCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
