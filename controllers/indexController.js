// Display home page
const getHomePage = (req, res) => {
    res.render('index');
};

// Display about page
const getAboutPage = (req, res) => {
    res.render('about');
};

module.exports = {
    getHomePage,
    getAboutPage
};