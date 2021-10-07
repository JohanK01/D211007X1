exports.app = (req, res) => {
    res.sendfile ('public/data/app.html');
};

// exports.app = (req, res) => {
//     const data = require('../public/data/exercise1.json')
//     res.json(data);
// }