
import * as express from 'express';
import * as functions from 'firebase-functions';
import * as cors from 'cors';
const app = express();
var corsOptions = {
    origin: ['https://www.aurumway.us', 'https://aurumway-c85f5.firebaseapp.com', 'https://aurumway-c85f5.web.app'],
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
            if(err == null){
                res.send("Email Sent Successfully");
            }
            else{
                res.send("failed to send email: " + err);
            }
    });
});
    



});

export const AurumwayAPI = functions.runWith({secrets: ["HOST", "USER", "App_Password_Mailbox"]}).https.onRequest(app);