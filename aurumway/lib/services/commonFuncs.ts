import { send } from "@emailjs/browser";

//submit the form element
export function onSubmit(event:any) {

}

export function sendEmail(firstName: string, lastName: string, email: string, message: string): Promise<any> {
    let result = new Promise<any>((resolve, reject) => {
            fetch("https://us-central1-aurumway-c85f5.cloudfunctions.net/AurumwayAPI/getAPIKey")
            .then(response => {
                response.text().then(val => {
                    send('contact_service', 'contact_form', {
                            from_name: firstName + " " + lastName,
                            from_email: email,
                            message: message
                        }, val).then((res) => {
                            resolve(res);
                        })
                        .catch((err) => {
                            reject(err);
                        })
                })
                .catch((err) => {
                    reject(err);
                })
            })
            .catch((err) => {
                reject(err);
            })
    });
    return result;
}