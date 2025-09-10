import type { CodegenConfig } from '@graphql-codegen/cli'
// eslint-disable-next-line import/no-extraneous-dependencies

const config: CodegenConfig = {
  schema: `${process.env.NEXT_PUBLIC_CMS_URL}/graphql`,
  documents: [
    './components/**/*.ts',
    './app/**/*.ts',
    './queries/**/*.ts',
  ],
  generates: {
    './interfaces/types.ts': {
      plugins: ['typescript'],
      config: {
        avoidOptionals: true,
        maybeValue: 'T',
      },
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
}
export default config
