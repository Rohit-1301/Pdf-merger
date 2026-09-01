import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/graphql/schema/**/*.graphql",
  generates: {
    "src/graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-resolvers"
      ],
      config: {
        useIndexSignature: true,
        scalars: {
          DateTime: "string",
          JSON: "any",
          URL: "string",
          Upload: "Promise<any>"
        }
      }
    }
  }
};

export default config;
