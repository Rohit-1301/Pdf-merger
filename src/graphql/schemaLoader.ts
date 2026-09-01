import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import path from 'path';
import { resolvers } from './resolvers';

const typesArray = loadFilesSync(path.join(__dirname, 'schema/**/*.graphql'));
const typeDefs = mergeTypeDefs(typesArray);

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
export { typeDefs };
