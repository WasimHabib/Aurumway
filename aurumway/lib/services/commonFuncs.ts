//submit the form element
export function onSubmit(event:any) {

}

export function sendEmail(firstName: string, lastName: string, email: string, message: string): Promise<any> {
    let result = true;
    let bod = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
    }
    return fetch('https://us-central1-aurumway-c85f5.cloudfunctions.net/AurumwayAPI/sendEmail', {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify(bod),
        headers: {
            'Content-Type': 'application/json'
          },

    })
    // .then((res) => {
    //     result = true;
    // })
    // .catch((error) => {
    //     result = false;
    // });
       
    // return result;
}