/**
 * Created by rakeshchouhan on 2/20/17.
 */
// https://www.npmjs.com/package/google-translate-api

// cd thirdparty/
// npm install google-translate-api --prefix google-translate
const translate = require('google-translate-api');


// From automatic language detection to English:
/*translate('Ik spreek Engels', {to: 'en'})
    .then(res => {
        console.log(res.text);
        //=> I speak English
        console.log(res.from.language.iso);
        //=> nl
        console.log(translate.languages);
        console.log("------------------------------");
    }).catch(err => {
        console.error(err);
});*/


// From English to Dutch with a typo:
translate(['I spea Dutch!', 'I spea Dutch!'], {from: 'en', to: 'nl'})
    .then(res => {
        console.log(res.text);
        //=> Ik spreek Nederlands!
        console.log(res.from.text.autoCorrected);
        //=> true
        console.log(res.from.text.value);
        //=> I [speak] Dutch!
        console.log(res.from.text.didYouMean);
        //=> false
        console.log("------------------------------");
    }).catch(err => {
        console.error(err);
})

// Sometimes, the API will not use the auto corrected text in the translation:
/*translate('I spea Dutch!', {from: 'en', to: 'nl'})
    .then(res => {
        console.log("------------------------------");
        console.log(res);
        console.log(res.text);
        //=> Ik spea Nederlands!
        console.log(res.from.text.autoCorrected);
        //=> false
        console.log(res.from.text.value);
        //=> I [speak] Dutch!
        console.log(res.from.text.didYouMean);
        //=> true
    }).catch(err => {
        console.error(err);
});*/
