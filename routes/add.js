const {Router} = require(`express`);
const router = Router();

router.get(`/add`, (req, res) => {
    res.render(`add`, {
        title: `Добавить курс`,
        isAdd: true
    });
});


module.exports = router;