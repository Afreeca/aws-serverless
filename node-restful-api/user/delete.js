'use strict';

const users = [
  {
      id:'a3bb189e-8bf9-3888-9912-ace4e6543002',
      name: 'Toby',
      surname: 'Cosby',
      age: 56,
      departmentId: 3
  },
  {
      id:'bc11240d-d5ae-3614-9771-a5a9cc980fef',
      name: 'Kiza',
      surname: 'Muza',
      age: 22,
      departmentId: 1
  }
]

module.exports.delete = (event, context, callback) => {
  let userId = event.pathParameters.id;

  console.error("Searching for user with id: ", userId)
      
  const notExistent = userId !== users[0].id && userId !== users[1].id;

  if (notExistent) {
    console.error('Validation Failed');

    const message =  JSON.stringify({
      message:`Unable to delete user`,
      error: `User with id ${userId} not found`
    })

    callback(null, {
      statusCode: 404,
       headers: { 'Content-Type': 'application/json' },
      body: message
    });

    return;
  }

    const response = {
      statusCode: 200,
      body:  JSON.stringify({message:`User with id "${userId}" successful deleted` })
    };

    callback(null, response);
};
