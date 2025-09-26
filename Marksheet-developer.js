
var username = prompt("Enter Your Name");
if (!isNaN(username)) { alert("Please , Your Name"); }
else {
    var clas = +prompt("Enter Your class (9-12)");
    if (isNaN(clas)) { alert("Enter correct class"); }
    else {
        if (clas > 12) { alert("Make Your Own Marksheet") }
        else {
            if (clas < 9) { alert("We have no program for class--->" + clas) }
            else {
                var rollNo = +prompt("Enter Your Roll No");
                if (isNaN(rollNo) || rollNo == 0) { alert("Enter correct Roll no"); }
                else {
                    if (clas == 9 || clas == 10) {
                        var sub1 = "English"
                        var sub2 = "Urdu"
                        var sub3 = "Maths"
                    }
                    if (clas == 11 || clas == 12) {
                        var sub1 = "Physics"
                        var sub2 = "Chemistry"
                        var sub3 = "Computer"
                    }
                    var subOne = +prompt("Enter " + sub1 + " Marks")
                    if (isNaN(subOne)) { alert("It is not a Number\n Enter Marks 0-100") }
                    else {
                        if (subOne > 100 || subOne < 0) { alert("It is incorrect Value        " + subOne + "\n\n Enter Marks  0 - 100") }
                        else {
                            var subTwo = +prompt("Enter " + sub2 + " Marks")
                            if (isNaN(subTwo)) { alert("It is not a Number\n Enter Marks 0-100") }
                            else {
                                if (subTwo > 100 || subTwo < 0) { alert("It is incorrect Value       " + subTwo + "\n\n Enter Marks  0 - 100") }
                                else {
                                    var subThree = +prompt("Enter " + sub3 + " Marks")
                                    if (isNaN(subThree)) { alert("It is not a Number\n Enter Marks 0-100") }
                                    else {
                                        if (subThree > 100 || subThree < 0) { alert("It is incorrect Value        " + subThree + "\n\ns Enter Marks  0 - 100") }
                                        else {
                                            var totMark = subOne + subTwo + subThree
                                            var percentage = parseInt(totMark / 300 * 100)
                                            if (percentage < 33) { var grade = "Fail" }
                                            if (percentage < 50 && percentage >= 33) { var grade = "D" }
                                            if (percentage < 60 && percentage >= 50) { var grade = "C" }
                                            if (percentage < 70 && percentage >= 60) { var grade = "B" }
                                            if (percentage < 80 && percentage >= 70) { var grade = "A" }
                                            if (percentage < 90 && percentage >= 80) { var grade = "A-One" }
                                            if (percentage < 100 && percentage >= 90) { var grade = "A-One +" }
                                            if (percentage >= 100) { var grade = "pro A-One + " }
                                            document.writeln(`
 <table class="  table table-info table-hover table-bordered fs-4 "  >
 <h3 class="bg-info  text-center">Marksheet</h3>
    <h3 class="bg-info theme-light text-center">Board of Intermediate & Secondary Education</h3>
  <thead>
  </thead>
  <tbody>
      <tr>
       <td class="text-center" style="width: 80px;">Name</td>
       <td class="text-center" style="width: 80px;">${username}</td>
       <td class="text-center" style="width: 80px;">Class</td>
       <td class="text-center" style="width: 80px;">${clas}</td>
       <td class="text-center" style="width: 80px;">Roll No</td>
       <td class="text-center" style="width: 80px;" >${rollNo}</td>
       </tr>
       <tr style="height:5vh;"><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr >
    <td></td>
    <td class="text-center" >Subjects</td>
    <td class="text-center">Marks</td>
    <td class="text-center" colspan="2">Progress</td>
    <td></td>
    
    </tr>
    <tr><td></td>
       <td class="text-center">${sub1}</td>
       <td class="text-center">${subOne}</td>
       <td class="">Total Marks</td>
       <td class="text-center">300</td>
       <td></td>
    </tr>
    <tr><td></td>
       <td class="text-center">${sub2}</td>
       <td class="text-center">${subTwo}</td>
       <td>Obtained Marks</td>
       <td class="text-center">${totMark}</td>
       <td></td>
    </tr>
    <tr><td></td>
       <td class="text-center">${sub3}</td>
       <td class="text-center">${subThree}</td>
       <td>Percentage</td>
       <td class="text-center">${percentage} %</td>
       <td></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
       <td >Grade</td>
       <td class="text-center">${grade}</td>
       <td></td>
    </tr>
    <tr>
    </tr>
  </tbody>
</table>`)

                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}




// var username = "junaid"
// var clas = 10
// var rollNo = 123
// var sub1 = "abcd"
// var sub2 = "abcd"
// var sub3 = "abcd"
// var subOne = 100
// var subTwo = 100
// var subThree = 100
// var totMark = 100
// var percentage = 100
// var grade = "a-one"

// document.writeln("Name................"+username)
// document.writeln("Class..............."+clas)
// document.writeln("Roll No............."+rollNo)
// document.writeln("English............."+subOne)
// document.writeln("Urdu................"+subTwo)
// document.writeln("Maths..............."+subThree)
// document.writeln("Total Marks........."+300)
// document.writeln("Obtained Marks......"+totMark)
// document.writeln("Percentage.........."+parseInt(percentage)+"%")
// document.writeln("Grade..............."+grade)









