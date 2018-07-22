/** @format */

import GraphQLCompiler from './compiler'

Plugin.registerCompiler(
  {
    extensions: ['gql', 'graphql', 'graphqls']
  },
  () => new GraphQLCompiler()
)
