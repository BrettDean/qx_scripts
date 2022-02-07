/源url：https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20live.js
//匹配：api.live.bilibili.com/xlive/app-room/v1/index/getInfoByRoom\?access_key
let body = $response.body
body=JSON.parse(body)
body['data']['activity_banner_info']=null
body=JSON.stringify(body)
$done({body})
