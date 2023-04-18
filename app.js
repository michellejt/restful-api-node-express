import express from "express";
import routes from "./src/routes/crmRoutes";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/CRMdb', {
	useNewUrlParser:true
});

//bodyPArser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//serving static files
app.use(express.static('public'));

routes(app);

//endpoint
app.get('/', (req, res) =>
	res.send(`Node and express server is running on port ${PORT}`)
)

app.listen(PORT, () => 
	console.log(`Your server is running on port ${PORT}`)
)