            // SMIT LOGIN
//  alert("       SMIT      \n"+"         MIT      \n"+"            IT      \n"+"             T      \n")
//  var username=  prompt("Enter Your Name")
//  var age=       prompt("Enter Your age")
//  var course=    prompt("Enter Your course")
//  var batch=     prompt("Enter Your Batch")
//   alert("                                         welcome to Smit\n\n"+"username :  "+username+"\n\nAge          :  "+age+"\n\nCourse     :  "+course+"\n\nBatch       :  "+batch)


//              ATM
// var a = +prompt("Enter amount")
// var th=a/1000
// var lth=a%1000
// var fh=lth/500
// var lfh=lth%500
// var hd=lfh/100
// var lhd=lfh%100
// var ft=lhd/50
// var lft=lhd%50
// var tn=lft/10
// document.writeln("<div notes><pre>start")
// document.writeln("</br>Amount Entered-------" +parseInt(a))
// document.writeln("</br>Thousand Notes-------" +parseInt(th))
// document.writeln("</br>Five Hundres Notes---" +parseInt(fh))
// document.writeln("</br>One Hundred Notes----" +parseInt(hd))
// document.writeln("</br>Fifty Notes----------" +parseInt(ft))
// document.writeln("</br>Ten Notes------------" +parseInt(tn))
// document.writeln("</br>end</pre></div>")




document.writeln("<br/><pre><h1>       Marksheet<br/><br/>")
var username = prompt("Enter Your Name");
if(!isNaN(username)) {alert("Please , Your Name");}
else{var clas = +prompt("Enter Your class");
if(isNaN(clas)) {alert("Enter correct class");}
else{
if(clas>12) {alert("Make Your Own Marksheet")}
else{
if(clas<9) {alert("We have no program for class--->"+clas )}
else{
var rollNo = +prompt("Enter Your Roll No");
if(isNaN(rollNo) || rollNo==0) {alert("Enter correct Roll no");}
else{
if(clas==9 || clas==10){
var subEng = +prompt("Enter English Marks")
if(isNaN(subEng)) {alert("It is not a Number\n Enter Marks 0-100")}
else{
if(subEng>100 || subEng<0) {alert("It is incorrect Value        " +subEng+ "\n\n Enter Marks  0 - 100")}
else{
var subUrdu = +prompt("Enter Urdu Marks")
if(isNaN(subUrdu)) {alert("It is not a Number\n Enter Marks 0-100")}
else{
if(subUrdu>100 || subUrdu<0) {alert("It is incorrect Value       " +subUrdu+ "\n\n Enter Marks  0 - 100")}
else{
var subMath = +prompt("Enter Maths Marks")
if(isNaN(subMath)) {alert("It is not a Number\n Enter Marks 0-100")}
else{
if(subMath>100 || subMath<0) {alert("It is incorrect Value        " +subMath+ "\n\ns Enter Marks  0 - 100")}
var subOne = subEng
var subTwo = subUrdu
var subThree = subMath
}}}}}}
if(clas==11 || clas==12){
var subPhy = +prompt("Enter Physics Marks")
if(isNaN(subPhy)) {alert("It is not a Number\n Enter Marks 0-100")}
else{
if(subPhy>100 || subPhy<0) {alert("It is incorrect Value        " +subPhy+ "\n\n Enter Marks  0 - 100")}
else{
var subChem = +prompt("Enter Chemistry Marks")
if(isNaN(subChem)) {alert("It is not a Number\n Enter Marks 0-100")}
else{
if(subChem>100 || subChem<0) {alert("It is incorrect Value       " +subChem+ "\n\n Enter Marks  0 - 100")}
else{
var subComp = +prompt("Enter Computer Marks")
if(isNaN(subComp)) {alert("It is not a Number\n Enter Marks 0-100")}
else{
if(subComp>100 || subComp<0) {alert("It is incorrect Value        " +subComp+ "\n\ns Enter Marks  0 - 100")}
var subOne = subPhy
var subTwo = subChem
var subThree = subComp
}}}}}}
}}}}}
var totMark = subOne+subTwo+subThree
var percentage = totMark/300*100
if(percentage<33) {var grade = "Fail"}
if(percentage<60 && percentage>=50) {var grade = "C"}
if(percentage<70 && percentage>=60) {var grade = "B"}
if(percentage<80 && percentage>=70) {var grade = "A"}
if(percentage<90 && percentage>=80) {var grade = "A One"}
if(percentage<100 && percentage>=90) {var grade = "A One +"}
document.writeln("Name................"+username)
document.writeln("Class..............."+clas)
document.writeln("Roll No............."+rollNo)
document.writeln("English............."+subOne)
document.writeln("Urdu................"+subTwo)
document.writeln("Maths..............."+subThree)
document.writeln("Total Marks........."+300)
document.writeln("Obtained Marks......"+totMark)
document.writeln("Percentage.........."+parseInt(percentage)+"%")
document.writeln("Grade..............."+grade)


