//Chapter 21-25

//Q #1
var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
var fullName = firstName +" "+ lastName;
alert("Hello"+" "+ fullName);

//Q #2
var model = prompt("Enter your favorite mobile model:");
var len = model.length;

document.write("My favorite phone is:"+" "+ model +"<br>"+ "Length of string:"+" "+ len +"<br>"+"<br>");


//Q #3
var coun = "Pakistani";
var letter = coun.indexOf("n");
document.write("String:"+" "+ coun +"<br>"+"Index of 'n':"+" "+ letter +"<br>"+"<br>");

//Q #4
var msg = "Hello World";
var word = msg.lastIndexOf("l");
document.write("String:"+" "+ msg +"<br>"+ "Last index of 'l':"+" "+ word +"<br>"+"<br>");

//Q #5
var str = "Pakistani";
var char = str.charAt(3);
document.write("String:"+" "+ str +"<br>"+"Character at index 3:"+" "+ char +"<br>"+"<br>");

//Q #6
var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
var fullName = fullName.concat(firstName +" " + lastName);
alert("Hello"+" "+ fullName);

//Q #7
var word ="Hyderabad";
var rep = word.replace("Hyder","Islam");

document.write("City:"+" "+ word + "<br>"+ "After replacement:"+" "+ rep +"<br>"+"<br>");

//Q #8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var repMsg = message.replace(/and/g,"&");
document.write(repMsg +"<br>"+"<br>");

//Q #9
var strNum = "472";
var  int = parseInt("472");
document.write("Value:"+" "+ strNum +'<br>'+"Type:"+" "+ "String"+"<br>"+ "Value:"+" "+
 strNum +'<br>'+"Type:"+" "+ "Number"+"<br>"+"<br>");

//Q #10
var user = prompt("Enter any words");
var upp = user.toUpperCase();

document.write("User input:"+ " "+ user +"<br>"+ "Upper case:"+ " "+ upp +"<br>"+"<br>");




//Q #14
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var list = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?"+"\n");

if(list === "cake"){
    alert(items[0] +" " +"is available at index"+" "+ 0 +" "+ "in our bakery")
}
else if(list === "apple pie"){
    alert(items[1] +" " +"is available at index"+" "+ 1 +" "+ "in our bakery")
}
else if(list === "cookie"){
    alert(items[2]+" "+ "is available at index"+" "+ 2 +" "+ "in our bakery")
}
else if(list === "chips"){
    alert(items[3] +" " +"is available at index"+" "+ 3 +" "+ "in our bakery")
}
else if(list === "patties"){
    alert(items[4] +" " +"is available at index"+" "+ 4 +" "+ "in our bakery")
}
else {
    alert("We are sorry"+" "+ list +" "+"is not available in our bakery");
}


//Q #15


//Q #16
var university = "University of Karachi";
document.write(university[0]+"<br>"+university[1]+"<br>"+university[2]+"<br>"+university[3]+"<br>"
+university[4]+"<br>"+university[5]+"<br>"+university[6]+"<br>"+university[7]+"<br>"+university[8]+
"<br>"+university[9]+"<br>"+university[10]+"<br>"+university[11]+"<br>"+university[12]+"<br>"+university[13]+
"<br>"+university[14]+"<br>"+university[15]+"<br>"+university[16]+"<br>"+university[17]+"<br>"+university[18]+
"<br>"+university[19]+"<br>"+university[20]+"<br>"+"<br>"+"<br>");


//Q #17
var ownChar = prompt("Enter any character");
var lastChar = ownChar.charAt(ownChar.length-1);

document.write("User input:"+" "+ ownChar +"<br>"+"Last character of input:"+" "+ lastChar +"<br>"+"<br>");


//Q #18
var text = "The quick brown fox jumps over the lazy dog";
var  occu = 0;
for(var i=0 ; i<text.length ; i++){
    if(text.charAt(i) === "the"){
        occu++;
    }
}
// document.write("Text:"+" "+ text +"<br>"+"There are"+" "+ occu +" " +"occurence(s) of word 'the'"+"<br>"+"<br>");




//Chapter 26-30

//Q #1
var posInt = +prompt("Enter positive floating integers number");
var rnd = Math.round(posInt)
var flr = Math.floor(posInt)
var cl = Math.ceil(posInt)

document.write("number:"+" "+ posInt +"<br>"+"round off value:"+" "+ rnd +"<br>"+"floor value:"+" "+
 flr +"<br>"+"ceil value"+" "+ cl +"<br>"+"<br>" );


//Q #2
var negFlt = +prompt("Enter negative floating point number");
var rnd = Math.round(negFlt)
var flr = Math.floor(negFlt)
var cl = Math.ceil(negFlt)

document.write("number:"+" "+ negFlt +"<br>"+"round off value:"+" "+ rnd +"<br>"+"floor value:"+" "+
 flr +"<br>"+"ceil value"+" "+ cl +"<br>"+"<br>" );


//Q #3
var Num = -4;
var abslt = Math.abs(Num);

document.write("The absolute value of"+" "+ Num +" "+"is"+" "+ abslt +"<br>"+"<br>");

//Q #4
var dice = Math.floor(Math.random() * 10 ) + 1;
document.write("random dice value:"+" "+ dice +"<br>"+"<br>")


//Q #5
var heads = 0;
var tails = 0;

var x = Math.floor( Math.random() * 4 === 0);

if(x){
    document.write("2"+"<br>"+"random coin value:"+" "+"Heads"+"<br>"+"<br>")
}
else{
    document.write("1"+"<br>"+"random coin value:"+" "+"Tails"+"<br>"+"<br>")
}

//Q #6
var rand1 = Math.floor( Math.random() * 50)
document.write("random number between 1 and 100:"+" "+ rand1 +"<br>"+"<br>")

//Q #7
var userWeight = +prompt("Enter your weight in kilograms");
document.write("The weight of user is"+" "+ userWeight +" "+ "kilograms"+"<br>"+"<br>");


//Q #8
var secNum = 9
var secNum1 =+prompt("Enter any number (between 1 to 10)")
if (secNum1 === secNum){
    alert("Congratulations!")
}
else{
    alert("Try again!")
}




//Chapter 31-34

//Q #1
var crntDate = new Date();
document.write(crntDate +"<br>"+"<br>");

//Q #2
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

alert("Current month:"+" "+ months[crntDate.getMonth()])


//Q #3
var day_name = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

alert("Today is"+" "+ day_name[crntDate.getDay()])


//Q #4
var user =prompt("Enter day")
if(user === "saturday" || user === "sunday"){
    alert("It's Fun day")
}

//Q #5
var userDate =+prompt("Enter date")
if(userDate < 16){
    alert("First fifteen days of the month")
}
else{
    alert("Last days of the month")
}

//Q #6


//Q #7
var userNoon = prompt("Enter a time")
if(userNoon < 12){
    alert("It's AM")
}
else{
    alert("It's PM")
}

//Q #8
var laterDate = new Date(2020,11,31,0,0,0,0)
document.write("Later date:"+" "+ laterDate +"<br>"+"<br>")


//Q #9
var olddate = new Date ("june 18, 2015");
var currentdate = new Date("june 19, 2020");
var diff_time = currentdate.getTime() - olddate.getTime()
var diff_day = diff_time/(1000*60*60*24)
document.write(diff_day +" "+"days have passed since 1st ramadan, 2015"+"<br>"+"<br>")

// Q #10

var refdate = new Date("january 06, 2015");
var elpdate = new Date ("dec 05, 2015, 22:50:16");
var diff_time1 = elpdate.getTime() - refdate.getTime()
var diff_sec = maths.abs(refdate - elpdate)/ 1000;
document.write("on reference date "+" "+ elpdate +" , "+"<br>"+ diff_sec +" "+"seconds had passed since beginning of 2015")

// Q #11
var curntdate1 = new Date("june 20, 2020,13:15:25");
var hourago = new Date("june 20, 2020,12:15:25");
document.write("current date:"+" "+ curntdate1 +"<br>"+"1 hour ago,it was "+" "+ hourago +"<br>"+"<br>")