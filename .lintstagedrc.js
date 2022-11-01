module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --fix --cache', () => 'tsc -p tsconfig.json --noEmit'],
    '*.{js,jsx,ts,tsx}': 'stylelint --fix --cache',
    '*': 'prettier --ignore-unknown --write --cache',
  };