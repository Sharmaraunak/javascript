let name = "bob";
//injecting a variable from outside in log.
console.log(`hi ${name}`);

/* let sentence = `a set of words 
    that is complete in itself,
    typically containing a 
    subject and predicate, 
    conveying a statement, 
    question, exclamation,
    or command, 
    and consisting of a 
    main clause and sometimes 
    one or more subordinate 
 
    clauses.`;

console.log(sentence); */

function getReasonCount() {
  return 2;
}

let interpolation = `Give me ${
  getReasonCount() == 1 ? "one good reason" : "a few reasons"
} to try this`;

console.log(interpolation);
