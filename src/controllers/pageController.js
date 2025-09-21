// Basic page controller for EJS views
exports.home = (req, res) => {
    res.render('home', { title: 'Home' });
};

exports.about = (req, res) => {
    res.render('about', { title: 'About' });
};

exports.services = (req, res) => {
    res.render('services', { title: 'Services' });
};

exports.gallery = (req, res) => {
    res.render('gallery', { title: 'Gallery' });
};

exports.team = (req, res) => {
    res.render('team', { title: 'Team' });
};

exports.portfolio = (req, res) => {
    res.render('portfolio', { title: 'Portfolio' });
};

exports.blog = (req, res) => {
    res.render('blog', { title: 'Blog' });
};

exports.contact = (req, res) => {
    res.render('contact', { title: 'Contact' });
};