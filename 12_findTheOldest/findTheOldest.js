const getAge = (birth, death = new Date().getFullYear()) => death - birth;

const findTheOldest = (people) =>
  people.reduce((oldest, currentPerson) =>
    getAge(oldest.yearOfBirth, oldest.yearOfDeath) <
    getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
      ? currentPerson
      : oldest
  );

// Do not edit below this line
module.exports = findTheOldest;
