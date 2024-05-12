var json = {
    "name": "Nishanthan",
    "age": 30,
    "occupation": "Software Engineer",
    "skills": ["JavaScript", "PHP", "Java", "HTML", "CSS"],
    "experience": {
        "company": "Apptimus",
        "years": 1
    }
};

// Using for loop
console.log("Using for loop:");
for (var key in json) {
    console.log(key + ": " + json[key]);
}

console.log("****************************************************");

// Using for in loop
console.log("Using for in loop:");
for (var key in json) {
    if (json.hasOwnProperty(key)) {
        console.log(key + ": " + json[key]);
    }
}

console.log("****************************************************");

// Using for of loop for arrays
console.log("Using for of loop:");
for (var value of json.skills) {
    console.log(value);
}

console.log("****************************************************");

// Using forEach for arrays
console.log("Using forEach:");
json.skills.forEach(function(skill) {
    console.log(skill);
});
