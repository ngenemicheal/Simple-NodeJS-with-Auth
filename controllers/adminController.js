const db = require('../models/db');

// Display admin login page
const getLoginPage = (req, res) => {
    if (req.session.admin) return res.redirect('/admin/dashboard');
    res.render('admin/login', { error: null });
};

// Handle admin login form submission
const login = async (req, res) => {
    const { username, password } = req.body;
    const [rows] = await db.execute(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password]
    );

    const admin = rows[0];
    if (admin && admin.password === password) {
        req.session.admin = admin;
        return res.json({ success: true });
    }

    res.json({ success: false, message: "Invalid credentials" });
};

// Display admin dashboard
const getDashboard = (req, res) => {
    if (!req.session.admin) return res.redirect('/admin/login');
    res.render('admin/dashboard', { admin: req.session.admin });
};

module.exports = {
    getLoginPage,
    login,
    getDashboard
};