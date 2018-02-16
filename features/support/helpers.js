'use strict'

class Helper {
    takeScreenshot() {
        browser.manage().window().setSize(1270, 1200).then(result =>
            browser.takeScreenshot().then(function (stream) {
                let decodedImage = new Buffer(stream.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
                scenario.attach(decodedImage, 'image/png');
                callback();
            }, function (err) {
                callback(err);
            }));
    }
}

module.exports = Helper;