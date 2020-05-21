const express = require(`express`);
const exphbs = require(`express-handlebars`);
const homeRoutes = require(`./routes/home`);
const addRoutes = require(`./routes/add`);
const coursesRoutes = require(`./routes/corses`);

// запускает сервер
const app = express(); // аналог сервера

const hbs = exphbs.create({
    defaultLayout: `main`,
    extname: `hbs`
});

app.engine(`hbs`, hbs.engine); // регистрируем движок handlebars в express

app.set(`view engine`, `hbs`); // начинаем использовать handlebars


app.use(express.static('public')); // добавляем статичиские данные public
app.use(homeRoutes);
app.use(addRoutes);
app.use(coursesRoutes);

// Добавляем роуты


app.get(`/courses`, (req, res) => {
    res.render(`courses`, {
        title: `Курсы`,
        isCourse: true
    });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`Server is running ${PORT}`);
});