// fix babel register doesn't transform TypeScript
//
// https://github.com/babel/babel/issues/8962#issuecomment-443135379

const register = require('@babel/register')

register({ extensions: ['.ts', '.js'] })
