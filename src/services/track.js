const Urls = require('../models/Urls');

module.exports = async (req, res) => {
    const { tracked } = req.params;

    try {
        const trackResult = await Urls.findOne({
            id: tracked.indexOf('http') !== -1 ? tracked.split('/')[1] : tracked
        });

        if (trackResult) {
            return res.status(200).send(trackResult);

        } else {
            return res.status(400).send({
                error: 'URL/ID not founded on database.'
            });

        }

    } catch (e) {
        return res.status(400).send({
            error: 'An error was occured, try again.'
        });

    }
}
