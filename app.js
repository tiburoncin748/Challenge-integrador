const express = require('express');
const app = express();

/* ROUTES IMPORTS */

const mainRoutes = require ('./src/routes/main.routes');
const shopRoutes = require ('./src/routes/shop.routes');
const adminRoutes = require ('./src/routes/admin.routes');
const authRoutes = require ('./src/routes/auth.routes');


const PORT = 3004;

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);


app.listen(PORT, () => console.log(`Esta pagina está siendo escuchada en ✨http://localhost:${PORT}`))