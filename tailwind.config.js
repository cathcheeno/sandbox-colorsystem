const COLORS = {

};

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  safelist: [
    {
      pattern: /.*-role-.*/
    }
  ],
  theme: {
    extend: {
      boxShadow: ((() => {
        const ret = {};
        const roles = ['elv-0', 'elv-1', 'elv-2', 'elv-3', 'elv-4', 'elv-5'];
        roles.forEach((role) => {
          ret[`role-${role}`] = `var(--ref-shadow-${role})`;
        });
        return ret;
      })()),
      colors: ((() => {
        const ret = {};
        const roles = ['background', 'background-on-high', 'background-on-medium', 'background-on-low', 'surface', 'surface-on-high', 'surface-on-medium', 'surface-on-low', 'primary', 'primary-on'];
        roles.forEach((role) => {
          ret[`role-${role}`] = `var(--ref-${role})`;
        });
        return ret;
      })()),
      fontSize: {
        xxs: '0.625rem',
      },
      opacity: ((() => {
        const ret = {};
        const roles = ['elv-0', 'elv-1', 'elv-2', 'elv-3', 'elv-4', 'elv-5'];
        roles.forEach((role) => {
          ret[`role-${role}`] = `var(--ref-overlayOpacity-${role})`;
        });
        return ret;
      })()),
    },
  },
  plugins: [],
};
