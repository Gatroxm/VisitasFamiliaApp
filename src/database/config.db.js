const mongoose = require("mongoose")


const dbConection = async() => {

    try {

        await mongoose.connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected to Mongo");

    } catch (error) {
        console.error(error)
        throw new Error(`Could not connect to Mongo`);
    }

}

module.exports = {
    dbConection
};