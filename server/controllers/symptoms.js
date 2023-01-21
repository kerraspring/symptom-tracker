const Symptom = require('../models/Symptom');

module.exports = {
    getSymptom: async (req,res) => {
        try {
            const symptom = await Symptom.findById(req.params.id);
            //render with react
        } catch (err) {
            console.log(err);
        }
    }
}