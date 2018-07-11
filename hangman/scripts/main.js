(function (){
    const baseURL = 'https://od-api.oxforddictionaries.com/api/v1';
    const proxy = `http://localhost:1247/${baseURL}`;
    const appKey = '447c0a2df707ff2f24891347e9700526';
    const appId = 'afb1d991';


let buttonList = document.body.querySelector('[data-category=\'botany\']');

    buttonList.addEventListener('click', event => {
        event.preventDefault();

        let botany = "/wordlist/en/domains=botany";
        $.ajax(proxy + botany, {
            method: 'GET',
            headers: {
                'app_key': appKey,
                'app_id': appId
            }
        }).done(response => document.body.querySelector('#words').innerText = JSON.stringify(response, null, 2));
});


    document.body.querySelector('[data-category=\'fencing\']').addEventListener('click', event => {
        event.preventDefault();
        let fencing = '/wordlist/en/domains=fencing';
$.ajax(proxy + fencing, {
    method: 'GET',
    headers: {
        'app_key': appKey,
        'app_id': appId
    }
}).done(response => document.body.querySelector('#words').innerText = JSON.stringify(response, null, 2));
});

    document.body.querySelector('.economics').addEventListener('click', event => {
        event.preventDefault();
        let economics = "/wordlist/en/domains=economics";
$.ajax(proxy + economics, {
    method: 'GET',
    headers: {
        'app_key': appKey,
        'app_id': appId
    }
}).done(response => document.body.querySelector('#words').innerText = JSON.stringify(response, null, 2));
});


    document.body.querySelector('.narcotics').addEventListener('click', event => {
        event.preventDefault();
        let narcotics = "/wordlist/en/domains=narcotics";
$.ajax(proxy + narcotics, {
    method: 'GET',
    headers: {
        'app_key': appKey,
        'app_id': appId
    }
}).done(response => document.body.querySelector('#words').innerText = JSON.stringify(response, null, 2));
});


    document.body.querySelector('.phonetics').addEventListener('click', event => {
        event.preventDefault();
        let phonetics = "/wordlist/en/domains=phonetics";
$.ajax(proxy + phonetics, {
    method: 'GET',
    headers: {
        'app_key': appKey,
        'app_id': appId
    }
}).done(response => document.body.querySelector('#words').innerText = JSON.stringify(response, null, 2));
});

// let sourceLang = 'en';
// let wordId = 'hello';

})();
