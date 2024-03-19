export class User {
    static user = null
    constructor(user = {}) {
        console.log(user)

        if (!!User.user) {
            return User.user
        }
        this.user = user

        return this
    }
    static getUser() {
        return this.user
    }
}