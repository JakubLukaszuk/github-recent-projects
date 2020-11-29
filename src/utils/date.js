export const prepearDateFromResponse = (dateFromResponse) =>{
    const dateArr = dateFromResponse.split('T');
    return dateArr[0]+' '+dateArr[1].split('Z')[0];
}