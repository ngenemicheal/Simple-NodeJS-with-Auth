const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

// Import configuration
const appConfig = require('./config/app');

// Import routes
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

// Initialize Express app
const app = express();

// Set view engine
app.set('view engine', appConfig.viewEngine);
app.set('views', appConfig.views);

// Set up middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up session
app.use(session(appConfig.session));

// Use routes
app.use('/', indexRoutes);
app.use('/', authRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

// Start server
const PORT = appConfig.port;
app.listen(PORT, () => {
    console.log(`Server running on port {${PORT}}`);
});
