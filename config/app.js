// Application configuration

module.exports = {
    // Server configuration
    port: process.env.PORT || 3000,
    
    // Session configuration
    session: {
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false } // set to true if using HTTPS
    },
    
    // View engine configuration
    viewEngine: 'ejs',
    views: './views'
};