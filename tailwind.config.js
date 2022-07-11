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
          ret[`role-${role}`] = `var(--role-shadow-${role})`;
        });
        return ret;
      })()),
      colors: ((() => {
        const ret = {};
        const roles = ['background', 'background-on-high', 'background-on-medium', 'background-on-low', 'surface', 'surface-on-high', 'surface-on-medium', 'surface-on-low', 'accent', 'accent-on', 'shadow'];
        roles.forEach((role) => {
          ret[`role-${role}`] = `var(--role-color-${role})`;
        });
        return ret;
      })()),
      fontFamily: ((() => {
        const ret = {};
        const roles = ['general'];
        roles.forEach((role) => {
          ret[`role-${role}`] = `var(--role-fontFamily-${role})`;
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
          ret[`role-${role}`] = `var(--role-opacity-${role})`;
        });
        return ret;
      })()),
      borderRadius: ((() => {
        const ret = {};
        const roles = ['full'];
        roles.forEach((role) => {
          ret[`role-${role}`] = `var(--role-borderRadius-${role})`;
        });
        return ret;
      })()),
    },
  },
  plugins: [],
};
