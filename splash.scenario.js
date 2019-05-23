const _ = require('lodash');

module.exports = {
  afterResponse
};

let i = 0;

function afterResponse(requestParams, response, context, ee, next) {
  if(response.error) {
    console.error('#' + i, response.error, context);
    return next();
  }
  i++;
  console.log(context.vars.medias)
  return next();
}