const Urls = require('../models/Urls');

module.exports = async (req, res) => {
    const { id } = req.params;
    
    try {
        const { url } = await Urls.findOne({
            id
        });
        
        return res.status(200).send(url);
    
    } catch(e) {
        return res.status(400).send({
            error: 'URL/ID not founded on database.'
        });

    }
}
