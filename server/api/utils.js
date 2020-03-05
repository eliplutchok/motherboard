const isAdmin = (req, res, next) => {
  // NEED TO UPDATE CONDITIONAL TO NOT ALLOW USERS WITHOUT ADMIN PROPERTY
  // RIGHT NOW THIS IS JUST REQUIRING LOGIN
  if (!req.user || req.user.isAdmin === false) {
    return next('Sorry, admins only!')
  }
  next()
}

module.exports = {
  isAdmin
}
