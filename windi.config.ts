import { defineConfig } from '@windicss/plugin-utils'
import { codePointAt } from 'core-js/core/string'
import colors from 'windicss/colors'

export default defineConfig({
  mode:'jit',
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
   theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        blue: colors.sky,
        rose: colors.rose,
        pink: colors.fuchsia,
        neutral:colors.neutral,
        gray:colors.gray,
        red:colors.red,
        green:colors.green
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  attributify: true,
})
