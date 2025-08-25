/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'color-hex-length': 'long',
    'declaration-empty-line-before': 'never',
    'font-family-name-quotes': 'always-unless-keyword',
    'scss/at-rule-conditional-no-parentheses': null,
  },
};
