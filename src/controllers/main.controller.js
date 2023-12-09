module.exports = {

    home: (req, res) => {
        res.render('index', {
            title: 'Home',
        });
    },
    contact: (req, res) => res.send('This is the CONTACT view'),
    about: (req, res) => res.send('This is the ABAUT view'),
    faqs: (req, res) => res.send('This is the FACS view')
}