'use strict';
const {Controller} = require('ee-core');
const Services = require('ee-core/services');

/**
 * 登录控制器
 */

class LoginController extends Controller {
    constructor(ctx) {
        super(ctx);
    }

    async loginCookies(){
        return await Services.get('loginService').getCookies()
    }

    async login(args) {
        await Services.get('loginService').setCookies(args)
        return await Services.get('loginService').login(args)
    }


}

LoginController.toString = () => '[class LoginController]';
module.exports = LoginController