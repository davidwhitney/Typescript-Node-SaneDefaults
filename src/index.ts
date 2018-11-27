function greeter(person: string) {
    return "Hello, " + person;
}

const usr = "Jane User";

document.body.innerHTML = greeter(usr);