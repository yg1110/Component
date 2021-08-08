// Profile.js
export class Profile {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    hello() {
        return `Name : ${this.name} \nEmail : ${this.email}`;
    }

    msgAfterTimeout(timeout) {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.hello()), timeout);
        });
    }
}
