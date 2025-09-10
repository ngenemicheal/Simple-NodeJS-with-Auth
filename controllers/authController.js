const db = require('../models/db');

// Display login page
const getLoginPage = (req, res) => {
    if (req.session.user) return res.redirect('/user/dashboard');
    res.render('auth/login', { error: null });
};

// Display register page
const getRegisterPage = (req, res) => {
    if (req.session.user) return res.redirect('/user/dashboard');
    res.render('auth/register', { error: null });
};

// Handle login form submission
const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const [rows] = await db.execute(
            "SELECT * FROM users WHERE username = ? AND password = ?",
            [username, password]
        );

        if (rows.length > 0) {
            req.session.user = rows[0];
            res.redirect('/user/dashboard');
        } else {
            res.render('auth/login', { error: 'Invalid credentials' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Handle register form submission
const register = async (req, res) => {
    const { username, email, password, fullName } = req.body;

    try {
        const [existing] = await db.execute(
            "SELECT * FROM users WHERE username = ? OR email = ?",
            [username, email]
        );

        if (existing.length > 0) {
            return res.render('auth/register', {
                error: 'Username or email already taken',
            });
        }

        await db.execute(
            "INSERT INTO users (username, email, password, fullName) VALUES (?, ?, ?, ?)",
            [username, email, password, fullName]
        );

        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Handle logout
const logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};

module.exports = {
    getLoginPage,
    getRegisterPage,
    login,
    register,
    logout
};