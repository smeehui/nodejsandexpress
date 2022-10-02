import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://smeenguyen:smee99123@cluster0.fsnqc.mongodb.net/business?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        );
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}
