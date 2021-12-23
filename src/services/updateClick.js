const Urls = require('../models/Urls');

module.exports = async (req, res) => {
    const { id } = req.body;

    try {
        const clickHistory = await Urls.findOne({
            id
        });

        const newClicks = await Urls.updateOne({
            id
        }, {
            clicks: parseInt(clickHistory.clicks + 1)
        });

        return newClicks, res.status(200).send(newClicks);

    } catch (e) {
        return res.status(400).send({
            error: 'An error was occurred, try again.'
        });
    }
}
