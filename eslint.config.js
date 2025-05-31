// eslint.config.js
import antfu from '@antfu/eslint-config'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'

export default antfu(
  {
    vue: true,
    typescript: true,
  },
  {
    settings: {
      entryPoint: './src/assets/main.css',
    },
    plugins: {
      'readable-tailwind': eslintPluginReadableTailwind,
    },
    rules: {
      ...eslintPluginReadableTailwind.configs.warning.rules,
      ...eslintPluginReadableTailwind.configs.error.rules,
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/operator-linebreak': ['error', 'before'],
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/block-lang': ['error', {
        script: {
          lang: 'ts',
        },
      }],
    },
  },
  {
    rules: {
      'style/semi': ['error', 'never'],
    },
  },
)
