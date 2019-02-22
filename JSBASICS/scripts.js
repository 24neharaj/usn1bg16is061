//variables
/*
var age=18;
if(age<18){
    console.log("minor");

}else if(age>18){
    console.log("major");
}
age<=18?console.log("major"):console.log("minor");
*/
/*
//function
function neha(fname,lname){
    console.log(fname+' '+lname);

}
neha('kru','shastry');
*/
/*
//array
var names=["neha",'miths','harsh'];
console.log(names[2]);
console.log(names.length);

names.push("miths");
names.unshift("harsh");
names.pop();
console.log(names);
*/
//challenge2
var b1=124;
var b2=48;
var b3=268;
var tip=[];
var to1;
var t1;
var total=[];
function tipcal(bill){
    if(bill<50){
    t1=bill*0.2;
    tip.push(t1);
    to1=bill+t1;
    total.push(to1);
}
else if(bill>50&&bill<200){
    t1=bill*0.15;
    tip.push(t1);
    to1=bill+t1;
    total.push(to1);
}
else if(bill>=200){
    t1=bill*0.1;
    tip.push(t1);
    to1=bill+t1;
    total.push(to1);
}
}
tipcal(b1);
tipcal(b2);
tipcal(b3);
console.log(tip);
console.log(total);
/*

 var mydetails={
     fname:"neha",
     lname:"rajeev",
     dob: 1998,
     family:['sheela','rajeev'],
     calcAge:function(birthyear){
         return 2019-birthyear;
     }
 };
 console.log(mydetails.fname);
 var z='dob';
 console.log(mydetails[z]);

 mydetails.dob=1981;
 console.log(mydetails);

//new object

var shiva = new Object();
shiva.fname='miths';
console.log(shiva);

console.log('neha is '+mydetails.calcAge(1998)+' years old');
*/