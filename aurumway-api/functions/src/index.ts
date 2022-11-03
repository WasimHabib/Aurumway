
import * as express from 'express';
import * as functions from 'firebase-functions';
import * as cors from 'cors';
//const functions = require('firebase-functions')
const app = express();
var corsOptions = {
    origin: ['https://www.aurumway.us', 'https://aurumway-c85f5.firebaseapp.com/', 'https://aurumway-c85f5.web.app/'],
    optionsSuccessStatus: 200 
  }
app.use(cors(corsOptions));
import('emailjs').then((emailjs) => {

  
   app.post('/sendEmail', (req: any, res:any) => {
    let body = req.body;
    let smtp = new emailjs.SMTPClient({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.App_Password_Mailbox,
        ssl: true
    });
    smtp.send(
        {
            text: body.message,
            from: body.email,
            to: process.env.USER!,
            subject: 'New Aurumway Contact',
    }, (err:any, message:any) => {
            res.send("failed to send email: " + err);
            return;
    });
});
    



});

export const AurumwayAPI = functions.runWith({secrets: ["HOST", "USER", "App_Password_Mailbox"]}).https.onRequest(app);
//const cors = require('cors');


// app.post('/sendEmail', (req: any, res:any) => {
//     //let body = JSON.parse(req.body);
//     let smtp = new SMTPClient({
//         host: 'smtp.gmail.com',
//         user: 'zohaib.wasim@gmail.com',
//         password: '12345',
//         ssl: true
//     });
//     console.log(smtp);
//     // smtp.send(
//     //     {
//     //         text: body.message,
//     //         from: body.email,
//     //         to: 'zohaib.wasim@gmail.com',
//     //         subject: 'New Aurumway Contact',
//     // }, (err:any, message:any) => {
//     //         res.send(false);
//     // });
//     res.send(true);
// });




// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request:any, response:any) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
