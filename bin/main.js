/**
 * Created by Administrator on 2016/7/28.
 */

var JPush = require("../lib/JPush/JPush.js");
var client = JPush.buildClient('99bb4538bf4865858e1d4f33', '539de3fd2eed5e1a465dd2ca');


//client.push().setPlatform(JPush.ALL)
//    .setAudience(JPush.ALL)
//    .setNotification('Hi, JPush 3', JPush.ios('ios alert', 'happy.caf', 5))
//    .send(function(err, res) {
//        if (err) {
//            console.log(err.message);
//        } else {
//            console.log('Sendno: ' + res.sendno);
//            console.log('Msg_id: ' + res.msg_id);
//        }
//    });


client.push().setPlatform('ios', 'android')
    //.setAudience(JPush.tag('555', '666'), JPush.alias('666,777'))
    .setAudience(JPush.ALL)
    .setNotification('Hi, JPush 2', JPush.ios('ios alert'), JPush.android('android alert', null, 1))//可以传四个参数: alert title builder_id extra
    .setMessage('msg content 2')
    .setOptions(null, 60)
    .send(function (err, res) {
        if (err) {
            if (err instanceof JPush.APIConnectionError) {
                console.log(err.message);
                //Response Timeout means your request to the server may have already received, please check whether or not to push
                console.log(err.isResponseTimeout);
            } else if (err instanceof JPush.APIRequestError) {
                console.log(err.message);
            }
        } else {
            console.log('Sendno: ' + res.sendno);
            console.log('Msg_id: ' + res.msg_id);
        }
    });