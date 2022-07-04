const COLORS = {

};

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  safelist: [
    {
      pattern: /.*-cs-.*/
    }
  ],
  theme: {
    extend: {
      boxShadow: {
        'cs-elv-0': 'var(--cs-shadow-elv-0)',
        'cs-elv-1': 'var(--cs-shadow-elv-1)',
        'cs-elv-2': 'var(--cs-shadow-elv-2)',
        'cs-elv-3': 'var(--cs-shadow-elv-3)',
        'cs-elv-4': 'var(--cs-shadow-elv-4)',
        'cs-elv-5': 'var(--cs-shadow-elv-5)',
      },
      colors: {
        'cs-background': 'var(--cs-background)',
        'cs-background-on-high': 'var(--cs-background-on-high)',
        'cs-background-on-medium': 'var(--cs-background-on-medium)',
        'cs-background-on-low': 'var(--cs-background-on-low)',
        'cs-surface': 'var(--cs-surface)',
        'cs-surface-on-high': 'var(--cs-surface-on-high)',
        'cs-surface-on-medium': 'var(--cs-surface-on-medium)',
        'cs-surface-on-low': 'var(--cs-surface-on-low)',
        'cs-primary': 'var(--cs-primary)',
        'cs-primary-on': 'var(--cs-primary-on)',
      },
      fontSize: {
        xxs: '0.625rem',
      },
      opacity: {
        'cs-elv-0': 'var(--cs-overlayOpacity-elv-0)',
        'cs-elv-1': 'var(--cs-overlayOpacity-elv-1)',
        'cs-elv-2': 'var(--cs-overlayOpacity-elv-2)',
        'cs-elv-3': 'var(--cs-overlayOpacity-elv-3)',
        'cs-elv-4': 'var(--cs-overlayOpacity-elv-4)',
        'cs-elv-5': 'var(--cs-overlayOpacity-elv-5)',
      },
    },
  },
  plugins: [],
};
