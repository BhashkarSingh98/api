const data4=(req,res)=>{
    res.send([
      {
        _id:1,
        title:" jeket" ,
        desc: "test",
        img:"https://freepngimg.com/thumb/clothes/3-2-clothes-transparent.png",
        categories:["shart","men"],
        size:["M","S"] ,
        color:["green","red"],
        price:800
      }
        ]);
      }
module.exports.apicontroller4=data4;