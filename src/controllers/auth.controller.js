const path = require('path');

module.exports = {

    login: (req, res) => {
        res.render(path.resolve( __dirname, '../views/auth/login.ejs'), {
            title: 'Login',
    });
    },
    doLogin: (req, res) => res.send('This is the LOGIN SUBMIT view'),
    register: (req, res) => {
        res.render(path.resolve( __dirname, '../views/auth/register.ejs'), {
            title: 'Registro',
    });
    },
    doSignUp: (req, res) => res.send('This is the para submitear un register view'),
    logout: (req, res) => res.send('This is the LOGOUT view'),
}