
var sname = prompt("Enter Your name");
if (!isNaN(sname)) { alert("Please , Your name"); }
else {
  var fname = prompt("Enter Your Father's name");
  if (!isNaN(fname)) { alert("Please , Your Father name"); }
else{
  var attempt = prompt("Enter Your attempt");
  if (!isNaN(group)) { alert("Please , Your attempt"); }
else{
   var group = prompt("Enter Your Group");
  if (!isNaN(group)) { alert("Please , Your Group"); }
else{
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
                                            var obtainedMarks = subOne + subTwo + subThree
                                            var percentage = parseInt(obtainedMarks / 300 * 100)
                                            if (percentage < 33) { var grade = "Fail" }
                                            if (percentage < 50 && percentage >= 33) { var grade = "D" }
                                            if (percentage < 60 && percentage >= 50) { var grade = "C" }
                                            if (percentage < 70 && percentage >= 60) { var grade = "B" }
                                            if (percentage < 80 && percentage >= 70) { var grade = "A" }
                                            if (percentage < 90 && percentage >= 80) { var grade = "A-One" }
                                            if (percentage < 100 && percentage >= 90) { var grade = "A-One +" }
                                            if (percentage >= 100) { var grade = "pro A-One + " }
                                           

// var sname = "a"
// var fname = "a"
// var clas = "a"
// var  rollNo = "a"
// var attempt = "a"
// var group = "a"
// var sub1  = "a"
// var sub2 = "a"
// var sub3 = "a"
// var subOne = "a"
// var subTwo = "a"
// var subThree = "a"
// var obtainedMarks= "a"
// var percentage = 10
// var grade = "a"


document.writeln(`
    
        <div class="row mt-5">
             <div class="col col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 mb-5">
                                
 <div class="row">
                         <div class="col col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3">
                            <img class="img-fluid" src="./logo-university.jpeg" alt="Logo">
                         </div>

                         <div class="col col-lg-8 col-md-8 col-sm-8 col-xs-8 col-6">
                             <div class="text-center">
                             <h5>SINDH UNIVERSITY OF</h5>
                             <h5>TECHNOLOGY AND MANAGEMENT</h5>
                             <h6>Report Card</h6>
                             </div>
                         </div>
                          <div class="col col-lg-2 col-md-2 col-sm-1 col-xs-1 col-3">
                              <img class="img-fluid" src="./logo-student.png" alt="Student Pic">
                         </div>
  </div>

 <div class="row mt-5">

         <div class="col col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12 ms-10">
         <table>
                <tr class="mb-5">
                    <td class="w-35">Name</td>
                    <td class="w-1"> : </td>
                    <td class="w-50 border-bottom border-dark fw-bold">${sname}</td>
                    <td class="w-100"></td>
                </tr>
                <tr>
                    <td>Father's Name</td>
                    <td>:</td>
                    <td class="border-bottom border-dark fw-bold">${fname}</td>
                </tr>
                <tr>
                    <td>Class</td>
                    <td>:</td>
                    <td class="border-bottom border-dark fw-bold">${clas}</td>
                </tr>
            </table>
        </div>

        <div class="col col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12"></div>

        <div class="col col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12 ms-10">
         <table>
                <tr>
                    <td class="w-35">Roll No</td>
                    <td class="w-1">:</td>
                    <td class="w-50 border-bottom border-dark fw-bold">${rollNo}</td>
                    <td class="w-100"></td>
                </tr>
                <tr>
                    <td>Group</td>
                    <td>:</td>
                    <td class="border-bottom border-dark fw-bold">${group}</td>
                </tr>
                <tr>
                    <td>Attempt</td>
                    <td>:</td>
                    <td class="border-bottom border-dark fw-bold">${attempt}</td>
                </tr>
        </table>
        </div>
 </div>
 
 <div class="row mt-5">
     <div class="col col-lg-12 col-md-12 col-sm-12 col-12 text-center btd">
                <table class="w-75 m-auto">
                  <tr>
                    <td class="text-primary w-10">S.no</td>
                    <td class="text-primary w-35"> Subject Name</td>
                    <td class="text-primary w-10">Max</td>
                    <td class="text-primary w-10">Obtained</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td class="text-success">${sub1}</td>
                    <td>100</td>
                    <td class="fw-bold">${subOne}</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td class="text-success">${sub2}</td>
                    <td>100</td>
                    <td class="fw-bold">${subTwo}</td>
                  </tr>

                   <tr>
                    <td>3</td>
                    <td class="text-success">${sub3}</td>
                    <td>100</td>
                  <td class="fw-bold">${subThree}</td>
                  </tr>
                    <tr>
                    <td colspan=2 class="w-20 text-success">Total Marks</td>
                    <td colspan=2 class="w-20 fw-bold">300</td>
                  </tr>
                  <tr>
                    <td colspan=2 class="text-success">Obtained Marks</td>
                    <td class="fw-bold w-20" colspan=2>${obtainedMarks}</td>
                  </tr>
                  <tr>
                    <td colspan=2 class="text-success" >Percentage</td>
                    <td class="fw-bold  w-20" colspan=2>${percentage}</td>
                  </tr>
                  <tr>
                    <td colspan=2 class="text-success">Grade</td>
                    <td class="fw-bold w-20 text-warning" colspan=2>${grade}</td>
                  </tr>
                 </table>        
     </div>
 </div>

 <div class="row">
    <div class="col col-lg-2 col-md-2 col-sm-2 col-2 "></div>
     <div class="col col-lg-4 col-md-4 col-sm-4 col-4 mt-4 ms-auto">
 <img class="img-fluid w-50 h-75 ms-auto" src="./logo-qr.jpg" alt="">
     </div>
     <div class="col col-lg-4 col-md-4 col-sm-4 col-4 justify-content-center">
 <img class="img-fluid mt-4 w-50 ms-5" src="./logo-sign.png" alt="">
 <h6 class="border-top border-primary">Signature</h6>
     </div>
     <div class="col col-lg-2 col-md-2 col-sm-2 col-2 "></div>
 </div>

 <div class="row mt-5 text-center">
     <div class="col col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
         <p>This marksheet is generated online</p>
         <p>more details: http://www.UTM.com</p>
         <p></p>
     </div>
 </div>

 <!-- <div class="row">
     <div class="col col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
     <p></p>
     </div>
     </div>  -->

                
             </div>
         </div>
     </div>
 `);
    
      

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

}}}


    