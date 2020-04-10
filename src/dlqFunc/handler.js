'use strict';

module.exports.dlqFunc = async event => {
  console.log(event.Records[0].Sns);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'This is dlq function!',
        input: event,
      },
      null,
      2
    ),
  };
};
