const Plants = require('./plants-model.js');


// Checks database for plant with matching id.
async function checkId(req, res, next) {
    const id = req.params.id;
    try {
        const plant = await Plants.findById(id);

        if (!plant) {
            res.status(404).json({ message: 'Plant ID not found' });
        } else {
            next();
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


// Checks payload for required fields.
async function checkPayload(req, res, next) {
    const payload = req.body;
    try {
        if (!payload.species ||
            !payload.nickname ||
            !payload.water_frequency ||
            !payload.plant_id) {
            res.status(400).json({ message: 'Payload is missing.' });
        } else {
            next()
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}




module.exports = {
    checkId,
    checkPayload
}