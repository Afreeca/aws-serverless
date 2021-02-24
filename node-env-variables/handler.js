'use strict';

module.exports.hello = async (event) => {
  console.log("Hi there");
  let name = process.env.MY_NAME
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello-world ${name}`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your fun  ction executed successfully!', event };
};
