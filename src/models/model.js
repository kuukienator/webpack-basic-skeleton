class Model {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello ${this.name}. I heard you are ${this.age} years old.`
    }
}

export default Model;