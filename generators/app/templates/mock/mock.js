const Mock = require('mockjs')
exports.data = function (){
    return [
        {
            route:'/list',
            handle:function(req,res,next){
                res.writeHead(200,{
                    "Content-type":"application/json;charset=UTF-8"
                });
                let data = Mock.mock({
                    'list|10-20':[{
                        'id|+1':1,
                        'price|20-200.0-2':1
                    }]
                })
                res.write(JSON.stringify(data))
                res.end()
            }
        }
    ]
}