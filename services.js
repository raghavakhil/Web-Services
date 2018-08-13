var http=require('http');
var express=require('express');
var exp=express();
var cors=require('cors');
var fs=require('fs');
var parser=require('body-parser');

exp.use(cors())



exp.get("/rest/api/load",cors(),(req,res)=>{
    console.log('Load Invoked');
    res.send({msg:'Give some rest to World'});
});

exp.route('/rest/api/get',cors()).get((req,res)=>{
    console.log('GET Invoked');
    var data=fs.readFileSync('demo1.json');
  
    console.log(data);
    res.send({msg:'World'});
  }

);
exp.use(parser.json());
exp.route('/rest/api/post',cors()).post((req,res)=>{
console.log('POST Invoked');
    console.log(req.body);
    fs.writeFileSync('demo.json',JSON.stringify(req.body));
    res.status(201).send(req.body);
   }

);

exp.route('/rest/api/get/:name').get((req,res)=>{
res.send("Hello World"+req.params['name']);
}
);
exp.route('/rest/api/del').delete((req,res)=>{
    console.log('DELETE Invoked');
  }
);
exp.route('/rest/api/put').put((req,res)=>{
   console.log('PUT Invoked');
});
 exp.use(cors()).listen(3000,()=>console.log('RUNNING........'))