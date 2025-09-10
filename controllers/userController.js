// Display user dashboard
const getDashboard = (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    res.render('user/dashboard', { user: req.session.user });
};

module.exports = {
    getDashboard
};