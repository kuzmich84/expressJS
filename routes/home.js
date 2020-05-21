const {Router} = require(`express`);
const router = Router();

router.get(`/`, (req, res) => {
    res.render(`index`, {
        title: `Главная страница`, // Добавляет title к странице
        isHome: true
    });  // рендерит страницу
});

module.exports = router;