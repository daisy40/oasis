// @ts-check
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import withNuxt from './.nuxt/eslint.config.mjs'
import tseslint from 'typescript-eslint'

export default withNuxt(...tseslint.configs.recommended, eslintPluginPrettier)
