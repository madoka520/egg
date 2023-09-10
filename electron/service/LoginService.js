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
        return loginDao.query(args).then(res=>{
            return res
        })
    }
}

LoginService.toString = () => '[class LoginService]';
module.exports = LoginService