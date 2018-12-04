# Stellaris Insights API Core

## Deploying

1. Run `yarn`
1. Copy `env.yml.template` to `env.yml`
1. Configure values in `env.yml`
1. Make sure your aws creds are configured correctly
1. Run `yarn deploy` or `serverless deploy` or `sls deploy`
1. Test it out

## Serverless Framework

- Template: `https://github.com/serverless/serverless/tree/master/lib/plugins/create/templates/aws-nodejs-typescript`
- Docs: `https://serverless.com/framework/docs/`
- Dev flow: `https://github.com/dherault/serverless-offline`

## TODO

- Custom domain: `https://serverless.com/blog/serverless-api-gateway-domain/`
- GraphQL: `https://github.com/serverless/serverless-graphql`
