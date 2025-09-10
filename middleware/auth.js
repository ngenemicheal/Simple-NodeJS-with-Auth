// Authentication middleware

// Check if user is authenticated
const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    res.redirect('/login');
};

// Check if admin is authenticated
const isAdmin = (req, res, next) => {
    if (req.session.admin) {
        return next();
    }
    res.redirect('/admin/login');
};

// Check if user is not authenticated (for login/register pages)
const isNotAuthenticated = (req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    res.redirect('/user/dashboard');
};

module.exports = {
    isAuthenticated,
    isAdmin,
    isNotAuthenticated
};