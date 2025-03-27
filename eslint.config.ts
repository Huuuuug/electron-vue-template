import { ganghu } from '@ganghu/eslint-config'

export default ganghu(
  {
    typescript: {
      overrides: {
        'no-console': 'off',
      },
    },
    vue: true,
  },
  {
    languageOptions: {
      globals: {
        Electron: 'readonly',
        NodeJS: 'readonly',
      },
    },
    ignores: ['node_modules', 'dist'],
  },
)
