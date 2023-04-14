function getObjectKeys(obj) {
    const keys = [];
    for (let key in obj) {
      keys.push(key);
    }
    return keys;
  }
  const person = {
    name: "ShahMeer",
    age: 23,
    occupation: "developer"
  };
  const keys = getObjectKeys(person);
  console.log(keys); 
  