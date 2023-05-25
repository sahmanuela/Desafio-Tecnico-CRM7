import mongoose from "mongoose";

const URI = 'mongodb+srv://samanthamanuelaferri:eo9ku3y3IjIwhzDt@crm7.2vzdtdj.mongodb.net/?retryWrites=true&w=majority'

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    }
}

export default databaseConnection