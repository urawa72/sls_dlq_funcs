'use strict';

module.exports.failFunc = async event => {
  console.log(event);
  throw new Error('Erorr occured!!!!!!!!!');
};
