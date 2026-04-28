import { ArrayElement } from '@battis/typescript-tricks';
import * as Templates from '@msar/canvas-import/dist/Templates/index.js';
import { Data } from '@msar/types.import';

type Options = {
  layout?: number;
  body:
    | Data['BulletinBoard']
    | ArrayElement<NonNullable<Data['Topics']>>['Content'];
};

export async function render({ body, layout = 0 }: Options) {
  if (body) {
    return await Templates.render(Templates.Podium.Page, {
      instance_url: '/',
      course_id: '#',
      page: body,
      layout
    });
  }
}
