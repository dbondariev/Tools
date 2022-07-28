/**
 * @jest-environment jsdom
 */

import { createCheckBox, createListItem } from '../rendererTask';

it('create html element checkbox ', () => {
  const elem = createCheckBox({ done: true });
  expect(elem.outerHTML).toBe('<input type="checkbox" class="list-item__checkbox">');
});

it('create html element checkbox ', () => {
  const elem = createCheckBox({ done: false });
  expect(elem.outerHTML).toBe('<input type="checkbox" class="list-item__checkbox">');
});

it('create html element li ', () => {
  const elem = createListItem({ text: 'task1', done: true, id: 1 });
  expect(elem.outerHTML).toBe(
    '<li class="list-item list__item list-item_done" data-id="1"><input type="checkbox" class="list-item__checkbox"><span class="list-item__text">task1</span><button class="list-item__delete-btn"></button></li>'
  );
});
