"use strict";

const person = {
  name: 'Vasya'
};

function info(phone, email) {
  console.log(`Name: ${this.name}, Tel: ${phone}, Email: ${email}`);
};

function bind(fn, context, ...rest) {
  return function(...args) {
    const uniqId = Date.now().toString();
    context[uniqId] = fn;
    const result = context[uniqId](...rest.concat(args));
    delete context[uniqId];
    return result;
  };
};

bind(info, person)("12345", "vasya@gmail.com");
bind(info, person, "54321")("vasya@gmail.com");
bind(info, person, "34512", "vasya@gmail.com")();