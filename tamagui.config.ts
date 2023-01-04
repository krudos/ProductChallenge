import {shorthands} from '@tamagui/shorthands';

import {themes, tokens} from '@tamagui/theme-base';

import {createFont, createTamagui} from 'tamagui';
export default createTamagui({
  themes,

  tokens,

  shorthands,

  fonts: {
    body: createFont({
      family: 'Arial',

      size: {
        4: 14,
      },

      lineHeight: {
        4: 16,
      },
    }),
  },
});
