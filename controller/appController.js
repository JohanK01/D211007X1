exports.app = (req, res) => {
    res.sendfile ('public/data/app.html');
};

exports.edit = (req, res) => {
    res.sendfile ('public/data/edit.html');
};