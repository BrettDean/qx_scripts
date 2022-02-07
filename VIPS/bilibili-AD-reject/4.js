//原404: https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20view%20relate.js
//匹配：https://app.bilibili.com/x/v2/view\?access_key
let body = $response.body
body=JSON.parse(body)
body['data']['relates'].forEach((element, index)=> {
   if(element.hasOwnProperty('is_ad')||!element.hasOwnProperty('aid')){      
      body['data']['relates'].splice(index,1)  
    }
})
delete body['data']['cms']
body=JSON.stringify(body)
$done({body})
