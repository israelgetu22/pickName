console.log("Practice interview Questions");

const users = [
  { id: 1, name: "Jack", inActive: true },
  { id: 2, name: "John", inActive: true },
  { id: 3, name: "Mike", inActive: false },
];

const names = [];
for (let i = 0; i < users.length; i++) {
  names.push(users[i].name);
}

console.log("names", names);
