 document.writeln("<pre>\n                                 SMIT LOGIN\n")
 document.writeln("\n                                  SMIT      \n"+"\n                                   MIT\n"+"\n                                    IT\n"+"\n                                     T\n</pre>")
 var username =  prompt("Enter Your Name")
 var age = prompt("Enter Your age")
 var course = prompt("Enter Your course")
 var batch = prompt("Enter Your Batch")
 alert("                                         welcome to Smit\n\n"+"username :  "+username+"\n\nAge          :  "+age+"\n\nCourse     :  "+course+"\n\nBatch       :  "+batch)



document.writeln("<pre>\n\n\n\n                                                     ATM NOTE VALIDATOR\n")
var a = +prompt("Enter amount")
var th=a/1000
var lth=a%1000
var fh=lth/500
var lfh=lth%500
var hd=lfh/100
var lhd=lfh%100
var ft=lhd/50
var lft=lhd%50
var tn=lft/10
document.writeln("                                               ---------------------------\n")
document.writeln("                                               ------------start----------\n")
document.writeln("                                               ---------------------------\n")
document.writeln("\n                                                Thousand Notes-------" +parseInt(th))
document.writeln("\n                                                Five Hundres Notes---" +parseInt(fh))
document.writeln("\n                                                One Hundred Notes----" +parseInt(hd))
document.writeln("\n                                                Fifty Notes----------" +parseInt(ft))
document.writeln("\n                                                Ten Notes------------" +parseInt(tn))
document.writeln("\n                                               ---------------------------\n")
document.writeln("                                                Amount Entered-------" +parseInt(a))
document.writeln("\n                                               ---------------------------\n")
document.writeln("                                               ------------end------------\n")
document.writeln("                                               ---------------------------\n</pre>")