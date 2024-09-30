"use strict";

let user = {
    name: "John",
    age: "30"
};

user.surname = "Smith";

user.name = "Pete";

delete user.name;

for (key in user) {
    print(key + ": " + user[key]);
}