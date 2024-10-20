function deneme(age: 14) {
    if (age > 15) {
        return "cem";
    } else {
        console.log("age: ", age) -- 14
        age += 1 -- 15
        return deneme(age: 15) => {
            if (age > 15) {
                return "cem";
            } else {
                console.log("age: ", age)
                age += 1 --
                return deneme(age: 16) => {
                    if (age > 15) {
                        return "cem"; --
                    } else {
                        console.log("age: ", age)
                        age += 1
                        return deneme(age)
                    }
                }
            }
        }
    }
}