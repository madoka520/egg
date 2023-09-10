'use strict';
const loginDao = require('../dao/loginDao')
const { Service } = require('ee-core');


class LoginService extends Service{
    constructor(ctx) {
        super(ctx);
    }

    /**
     * test
     */
    login(args){
        return loginDao.query(args)
    }
}

LoginService.toString = () => '[class LoginService]';
module.exports = LoginService