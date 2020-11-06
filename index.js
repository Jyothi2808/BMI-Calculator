const exp=require("express");
const bp=require("body-parser");
app=exp();
app.use(bp.urlencoded({extend:true}));
app.get("/",function(request,response){
  response.sendFile(__dirname +"/index.html");
});
app.get("/bmicalculator",function(request,response){
  response.sendFile(__dirname +"/bmicalculator.html");
});
app.post("/",function(req,res){
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var tot=n1+n2;
  res.send("The result is " + tot);
});
app.post("/bmicalculator",function(req,res){
  var n1=parseFloat(req.body.weight);
  var n2=parseFloat(req.body.height);
  var bmi=n1/(n2*n2);
  res.send("Your BMI is " + bmi);
});
app.listen(3000,function(){
console.log("server has started");
});
