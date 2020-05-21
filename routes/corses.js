const {Router} = require(`express`);
const router = Router();

router.get(`/courses`, (req, res) => {
    res.render(`courses`, {
        title: `Курсы`,
        isCourse: true
    });
});

module.exports = router;