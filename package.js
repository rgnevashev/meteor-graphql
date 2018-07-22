/** @format */

const packages = ['ecmascript', 'isobuild:compiler-plugin@1.0.0']

Package.describe({
  name: 'rgnevashev:plugin-graphql',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Compiler plugin that supports GraphQL files in Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rgnevashev/meteor-graphql',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.registerBuildPlugin({
  name: 'compile-graphql',
  use: ['ecmascript'],
  sources: ['compiler.js', 'plugin.js'],
  npmDependencies: {
    graphql: '0.13.2',
    'graphql-tag': '2.9.2'
  }
})

Package.onUse(function(api) {
  api.versionsFrom('1.7.0.3')

  api.use(packages, ['server', 'client'])
})

Package.onTest(function(api) {
  api.use(packages, ['server', 'client'])
  api.use('rgnevashev:plugin-graphql')

  api.use(['meteortesting:mocha'])

  api.mainModule('specs/server.spec.js', 'server')
  api.mainModule('specs/client.spec.js', 'client')
})
