export class User {

    static instance
    constructor(user) {
        if (!User.instance) {
            User.instance = user;
        }
        return User.instance;
    }

    static iniciarSesion = (user) => {
        if (!this.user) {
            this.user = user;
            console.log(`Inicio de sesión exitoso para ${user.nameUser}`);
        } else {
            console.log('Ya hay un usuario iniciado sesión.');
        }
    }
    static cerrarSesion() {
        if (this.user) {
            console.log(`Sesión cerrada para ${this.user.name}`);
            this.user = null;
        } else {
            console.log('No hay ningún usuario iniciado sesión.');
        }
    }

    static obtenerUsuario() {
        return this.user;
    }

}