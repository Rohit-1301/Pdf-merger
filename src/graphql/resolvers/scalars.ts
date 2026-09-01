import { GraphQLDateTime, GraphQLJSON, GraphQLURL } from 'graphql-scalars';
import { GraphQLUpload } from 'graphql-upload-ts';

export const scalarResolvers = {
  DateTime: GraphQLDateTime,
  JSON: GraphQLJSON,
  URL: GraphQLURL,
  Upload: GraphQLUpload,
};
