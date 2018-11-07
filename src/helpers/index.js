export function randomstring(length){
    const values = 'abcdefghijklmnopqrestuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

    let randomstring = '';

    for (let t=0; t < length; t++) {
        const randIndex = Math.floor(Math.random() * values.length);

        randomstring += values[randIndex]; 
    }

    return randomstring;
}