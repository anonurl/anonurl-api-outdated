const Reports = require('../models/Reports');

module.exports = async (req, res) => {
    const { message, contact } = req.body;

    const createReport = await Reports.create({
        message,
        contact
    });

    return createReport, res.status(200).send({
        message: 'Report sended, thanks for the collaboration!'
    });
}
