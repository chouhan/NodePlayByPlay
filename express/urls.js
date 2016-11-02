/**
 * Created by rakeshchouhan on 10/30/16.
 */
var urls = (function(){
    return {
        operations: {
            main : '/',
            getUserURL: '/getUser',
            postUserURL: '/updateUser',
            putUserURL: '/addUser',
            deleteUserURL: '/deleteUser'
        },
        config: {
            rootcontext: ''
        }
    }
})();

module.exports = urls;