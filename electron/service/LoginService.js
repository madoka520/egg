'use strict';
const loginDao = require('../dao/loginDao')
const { Service } = require('ee-core');
const fs = require('fs')

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

    setCookies(args){
        const cookies = {}
        Object.assign(cookies,args)
        if (args.remember === false){
            cookies.password = ""
        }
        console.log(cookies)
        let str = JSON.stringify(cookies,"","\t")
        fs.writeFile('./electron/service/json/cookies.json',str,err=>{
            if (err){
                console.error(err)
            }else {
                console.log('write success!')
            }
        })
    }

    getCookies() {
        return new Promise((resolve,reject)=>{
            fs.readFile('./electron/service/json/cookies.json', 'utf-8', (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(JSON.parse(data));
                }
            });
        })
    }

}

LoginService.toString = () => '[class LoginService]';
module.exports = LoginService