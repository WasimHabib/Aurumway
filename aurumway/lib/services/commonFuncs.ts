//submit the form element
export function onSubmit(event:any) {

}

export function sendEmail(firstName: string, lastName: string, email: string, message: string): boolean {
    let result = true;
    let bod = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
    }
    const response = fetch('', {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify(bod),
        headers: {
            'Content-Type': 'application/json'
            //'Content-Type': 'application/x-www-form-urlencoded',
          },

    }).then((res) => {
        result = true;
    })
    .catch((error) => {
        result = false;
    });
       
    return result;
}