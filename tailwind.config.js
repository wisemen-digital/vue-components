/** @type {import('tailwindcss').Config} */

const { tailwindcssOriginSafelist } = require('@headlessui-float/vue')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  safelist: [...tailwindcssOriginSafelist],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },

    },
    fontSize: {
      hero: ['var(--font-size-hero)', {
        lineHeight: 'var(--font-line-height-hero',
      }],
      title: ['var(--font-size-title)', {
        lineHeight: 'var(--font-line-height-title',
      }],
      subtitle: ['var(--font-size-subtitle)', {
        lineHeight: 'var(--font-line-height-subtitle',
      }],
      heading: ['var(--font-size-heading)', {
        lineHeight: 'var(--font-line-height-heading',
      }],
      body: ['var(--font-size-body)', {
        lineHeight: 'var(--font-line-height-body',
      }],
      subtext: ['var(--font-size-subtext)', {
        lineHeight: 'var(--font-line-height-subtext',
      }],
      caption: ['var(--font-size-caption)', {
        lineHeight: 'var(--font-line-height-caption',
      }],
    },

    boxShadow: {
      DEFAULT: 'var(--shadow)',
      cardShadow: 'var(--shadow-card);',
      cardHoverShadow: 'var(--shadow-card-hover);',
      buttonShadow: 'var(--shadow-button);',
      buttonHoverShadow: 'var(--shadow-button-hover);',
      popoverShadow: 'var(--shadow-popover);',
      modalShadow: 'var(--shadow-modal);',
    },

    borderRadius: {
      DEFAULT: 'var(--radius)',
      card: 'var(--radius-card)',
      button: 'var(--radius-button)',
      modal: 'var(--radius-modal)',
      popover: 'var(--radius-popover)',
      full: 'var(--radius-full)',
    },

    colors: {
      transparent: 'transparent',
      black: 'hsl(var(--black))',
      white: 'hsl(var(--white))',

      border: 'hsl(var(--border))',
      ring: 'hsl(var(--ring))',

      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',

      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      warn: {
        DEFAULT: 'hsl(var(--warning))',
        foreground: 'hsl(var(--warning-foreground))',
      },
      success: {
        DEFAULT: 'hsl(var(--success))',
        foreground: 'hsl(var(--success-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },

      input: {
        DEFAULT: 'hsl(var(--input))',
        foreground: 'hsl(var(--input-foreground))',
        placeholder: 'hsl(var(--input-placeholder))',
        disabled: 'hsl(var(--input-disabled))',
        border: 'hsl(var(--input-border))',
        ring: 'hsl(var(--input-ring))',
      },

      neutral: {
        900: 'hsl(var(--neutral-900))',
        800: 'hsl(var(--neutral-800))',
        700: 'hsl(var(--neutral-700))',
        600: 'hsl(var(--neutral-600))',
        500: 'hsl(var(--neutral-500))',
        400: 'hsl(var(--neutral-400))',
        300: 'hsl(var(--neutral-300))',
        200: 'hsl(var(--neutral-200))',
        100: 'hsl(var(--neutral-100))',
      },
    },
  },
}
