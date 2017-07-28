'use strict';

module.exports.motivation = (event, context, callback) => {
  var insults = require('./insults-all.json'); 
  var index = Math.floor(Math.random() * insults.length);
  const response = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: insults[index],
      },
      shouldEndSession: false,
    },
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};