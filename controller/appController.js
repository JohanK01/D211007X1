exports.app = (req, res) => {
    res.sendfile ('public/data/app.html');
};

exports.edit = (req, res) => {
    res.sendfile ('public/data/edit.html');
};

exports.input = (req, res) => {
    console.log("data:" + req.body.txtID1);
    console.log("data:" + req.body.txtID2);
    res.sendfile('./public/data/edit.html');
};