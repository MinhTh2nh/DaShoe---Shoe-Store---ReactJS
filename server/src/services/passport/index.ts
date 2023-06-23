import passport = require("koa-passport");

export function initialize() {
    return passport.initialize();
}

export function session() {
    return passport.session();
}
