/**
 * Created by Administrator on 2016/7/28.
 */

var JPush = require("../lib/JPush/JPush.js");
var client = JPush.buildClient('c94fcc07695b1098ce1d826f', '1c4dd3354907965b63db7f09');

client.push().setPlatform(JPush.ALL)
    .setAudience(JPush.ALL)
    .setNotification('异地登陆', JPush.android('你的账号在异地登陆了，请重新登陆。时间： ' + new Date().toLocaleString(), null, 1, {type: 'kick'}))
    .send(function(err, res) {
        if (err) {
            console.log(err.message);
        } else {
            console.log('Sendno: ' + res.sendno);
            console.log('Msg_id: ' + res.msg_id);
        }
    });

//client.push().setPlatform('android')
//    //.setAudience(JPush.tag('555', '666'), JPush.alias('666,777'))
//    .setAudience(JPush.ALL)
//    .setNotification('异地登陆', JPush.android('你的账号在异地登陆了，请重新登陆。时间： ' + new Date().toLocaleString(), null, 1, {type: 'kick'}))
//    .setMessage('您被踢下线了')//{"msg_content":"msg content 2"}
//    .setOptions(null, 24 * 60 * 60)// 保存的离线通知时间是24*60*60秒(一天)
//    .send(function (err, res) {
//        if (err) {
//            if (err instanceof JPush.APIConnectionError) {
//                console.log(err.message);
//                //Response Timeout means your request to the server may have already received, please check whether or not to push
//                console.log(err.isResponseTimeout);
//            } else if (err instanceof JPush.APIRequestError) {
//                console.log(err.message);
//            }
//        } else {
//            console.log('Sendno: ' + res.sendno);
//            console.log('Msg_id: ' + res.msg_id);
//        }
//    });