const Urls = require('../models/Urls');
const randomUrl = require('random-url-string');

module.exports = async (req, res) => {
    const { url } = req.body;
    const id = randomUrl(6, 'ln');

    try {
        const findUrl = await Urls.findOne({
            id
        });

        if (!findUrl) {
            const newUrl = await Urls.create({
                url,
                id,
                create: new Date().toLocaleString('en-US')
            });

            return newUrl, res.status(200).send(newUrl);
        
        } else {
            return res.status(400).send({
                error: 'Invalid ID, try again.'
            });

        }
    } catch (e) {
        return res.status(400).send({
            error: 'An error was occurred, try again.'
        });

    }
}
