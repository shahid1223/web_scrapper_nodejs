var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');

// code for unsplash
// var unpsplashImages = [];
// request('https://unsplash.com/s/photos/cat', function (err, res, body) {
//     console.log("unpsplashImages")
//     if (!err && res.statusCode === 200) {
//         var $ = cheerio.load(body);
//         $('img').each(function () {
//             var img = $(this).attr('src');
//             unpsplashImages.push(img)
//         });

//         fs.mkdirSync('unpsplash_images');
//         for (var i = 0; i < unpsplashImages.length; i++) {
//             request(unpsplashImages[i]).pipe(fs.createWriteStream('unpsplash_images/cat' + i + '.jpg'))
//         }
//         console.log(unpsplashImages)
//     }
// })
// code for unsplash end

//code for google images
// var googleImages = [];
// request('https://www.google.com/search?q=cars&sxsrf=ALiCzsZIUZ7zwKtV4vTihIAitlm7X9ICGQ:1657805010092&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjZjO71vPj4AhXZt1YBHXSMD1gQ_AUoAXoECAIQAw&biw=1182&bih=714&dpr=1.25', function (err, res, body) {
//     if (!err && res.statusCode === 200) {
//         console.log("hello")
//         var $ = cheerio.load(body);
//         $('img').each(function () {
//             var img = $(this).attr('src');
//             googleImages.push(img)
//         });

//         console.log("bhad gaya")
//         googleImages.shift()

//         fs.mkdirSync('google_images');
//         for (var i = 0; i < googleImages.length; i++) {
//             request(googleImages[i]).pipe(fs.createWriteStream('google_images/car' + i + '.jpg'))
//         }
//         console.log(googleImages)
//     }
// })
//code for google images end


//code for yahoo images
var yahoo = [];
request('https://in.images.search.yahoo.com/search/images;_ylt=AwrKAh1hLNBiDwgqY4m7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=mobile&fr2=piv-web&fr=sfp#id=0&iurl=https%3A%2F%2Fwww.sitejabber.com%2Fimg%2Fcategories%2F1025%2Fpicture.1409852059.jpg&action=click', function (err, res, body) {
    if (!err && res.statusCode === 200) {
        console.log("hello")
        var $ = cheerio.load(body);
        console.log("$ =>> ", $)
        $('img', 'div.grad left', 'div.iholder').each(function () {
            var img = $(this).attr('src');
            console.log("img =>> ", img)
            yahoo.push(img)
        });

        console.log("bhad gaya")
        yahoo.shift()

        // fs.mkdirSync('yahoo_images');
        // for (var i = 0; i < yahoo.length; i++) {
        //     request(yahoo[i]).pipe(fs.createWriteStream('yahoo_images/car' + i + '.jpg'))
        // }
        console.log(yahoo)
    }
})
//code for yahoo images end
