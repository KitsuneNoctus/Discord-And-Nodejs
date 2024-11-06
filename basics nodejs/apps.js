let user = {
  name: "Hank",
  age: 25,
  hobbies: ["hiking","reading","swiming"]
}

let members = [
  {
    id: 2345345,
    joinedTimestamp: 8324823843284
  },
  {
    id: 129537,
    joinedTimestamp: 7849303848303
  },
  {
    id: 9974856,
    joinedTimestamp: 1234567897947
  }
]

console.log(user.name);

console.log(members.id);

for (let i = 0; i < members.length; i++) {
  console.log(members[i].id);
}