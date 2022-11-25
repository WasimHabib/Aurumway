
import * as express from 'express';
import * as functions from 'firebase-functions';
import * as cors from 'cors';
const app = express();
var corsOptions = {
    origin: ['https://www.aurumway.us', 'https://aurumway-c85f5.firebaseapp.com', 'https://aurumway-c85f5.web.app', 'https://aurumway.us', 'https://aurumway.us/'],
    optionsSuccessStatus: 200
  }
app.use(cors(corsOptions));
   app.get('/getAPIKey', (req: any, res:any) => {
            res.send(process.env.API_KEY);
    });


export const AurumwayAPI = functions.runWith({secrets: ["API_KEY"]}).https.onRequest(app);