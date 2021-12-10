
// INSTAMOJO payments
// https://docs.instamojo.com/docs/get-list-of-payment-requests
const axios = require('axios');

const X_API_KEY = 'f49b6ba60ee03dc48a786266657cf90a'
const X_AUTH_TOKEN = '16bacbfa19cac4c308afd560b2ee310b'
const REDIRECT_URL = 'http://www.example.com/redirect/'

async function getListOfPaymentRequests(){

    var headers = { 'X-Api-Key': X_API_KEY, 'X-Auth-Token': X_AUTH_TOKEN}

    axios.get('/https://www.instamojo.com/api/1.1/payment-requests/d66cb29dd059482e8072999f995c4eef/',
            { headers: headers}
    ).then(function (response) {
        console.log(response);
        if(response.statusCode == 200){
            console.log(response);
        }
    })
    .catch(function (error) {
        console.log('error', error);
    });
}

async function createPaymentRequest(payload){

    var headers = { 'X-Api-Key': X_API_KEY, 'X-Auth-Token': X_AUTH_TOKEN}

    var paymentPayload = {
        purpose: payload.description,
        amount: payload.price,
        phone: payload.mobile,
        buyer_name: payload.name,
        redirect_url: 'http://www.example.com/redirect/',
        send_email: true,
        webhook: 'http://www.example.com/webhook/',
        send_sms: true,
        email: payload.email,
        allow_repeated_payments: false
    }

    return axios.post('https://www.instamojo.com/api/1.1/payment-requests/',
            {...paymentPayload}, 
            { headers: headers}
    ).then(function (response) {
        console.log('createPaymentRequest response.statusCode', response.statusCode);
        console.log('createPaymentRequest response', response);
        if(response.statusCode == 200) {
            return (response);
        } else {
            return (response);
        }
    })
    .catch(function (error) {
        console.log('createPaymentRequest error', error);
        throw new Error(error)
    });

}

module.exports = {
    getListOfPaymentRequests,
    createPaymentRequest
}