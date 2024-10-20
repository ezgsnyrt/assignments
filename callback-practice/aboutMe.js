function myName(callback, name) {
    console.log(name);
    setTimeout(callback, 1000);
}

function myAge(age, callback) {
    console.log(age);
    setTimeout(callback, 2000);
}

function birthPlace(hometown, callback) {
    console.log(hometown);
    setTimeout(callback, 2000);
}

function currentResidence(home, callback) {
    console.log(home);
    setTimeout(callback, 2000);
}

function myHobies(hobby) {
    console.log(hobby)
}

myName(
    () => myAge('I am 31 years old.',
        ()  => birthPlace('I was born in Giresun, which is a small city in the Black Sea region of Turkey.',
            () => currentResidence('I live in Gothenburg, Sweden.',
                () => myHobies("I enjoy spending time outdoors by hiking and exploring new places, reading about my interests, hanging out with friends, and learning new things."))
        )
    ),
    "My name is Ezgi."
);