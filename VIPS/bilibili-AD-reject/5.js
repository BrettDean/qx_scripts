//原404: https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20reply.js
//匹配：https://api.bilibili.com/x/v2/reply/main\?access_key

let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})
