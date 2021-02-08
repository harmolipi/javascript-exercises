let findTheOldest = function (people) {
    return (people.reduce(ages));
}

let ages = function (oldestPerson, currentPerson) {
    let oldestYear;
    let currentYear;
    let date = new Date().getFullYear();
    oldestPerson.yearOfDeath !== undefined ? oldestYear = oldestPerson.yearOfDeath : oldestYear = date;
    currentPerson.yearOfDeath !== undefined ? currentYear = currentPerson.yearOfDeath : currentYear = date;
    return (oldestYear - oldestPerson.yearOfBirth) > (currentYear - currentPerson.yearOfBirth) ? oldestPerson : currentPerson;
}

module.exports = findTheOldest
