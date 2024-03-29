import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("cannot connect To MongoBD");
    }
}
async function disconnectfromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("cannot disconnect To MongoBD");
    }
}
export { connectToDatabase, disconnectfromDatabase };
//# sourceMappingURL=connection.js.map