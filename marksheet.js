
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
                                           
document.writeln(`
 <div class="container border border-primary">
        <div class="row mt-10">
             <div class="col col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                
                
 <div class="row">
                         <div class="col col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2  iimg">
                            <img class="img-fluid h-100" src="./logo-university.jpeg" alt="Logo">
                         </div>
                         <div class="col col-lg-8 col-md-8 col-sm-8 col-xs-8 col-8">
                             <div class="text-center">
                             <h5>SINDH UNIVERSITY OF</h5>
                             <h5>TECHNOLOGY AND MANAGEMENT</h5>
                             <h5>Report Card</h5>
                             </div>
                         </div>
                          <div class="col col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2  iimg">
                              <img class="img-fluid h-100" src="./logo-student.png" alt="Student Pic">
                         </div>
  </div>

 <div class="row mt-5">
         <div class="col col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 w-12 p-0 ml-10">
         <p >Name</p>
         <p>Father's Name</p>
         <p>Class</p>
     </div>
     <div style="width=10px; "class="col col-lg-1 col-md-1 col-sm-1 col-xs-1 col-1 w-1">
         <p>:</p>
         <p>:</p>
         <p>:</p>
         </div>
     <div class="col col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 w-12 p-0">
         <p class="border-bottom border-dark fw-bold">${sname}</p>
         <p class="border-bottom border-dark">${fname}</p>
         <p class="border-bottom border-dark">${clas}</p>
     </div>
    <div class="col col-lg-1 col-md-1 col-sm-1 col-xs-1 col-1 w-30 p-0">
    </div>
     <div class="col col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3 w-8 p-0">
         <p>Roll No</p>
         <p>Group</p>
         <p>Attempt</p>
     </div>
     <div class="col col-lg-1 col-md-1 col-sm-1 col-xs-1 col-1 w-1 p-0">
         <p>:</p>
         <p>:</p>
         <p>:</p>
         </div>
     <div class="col col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 w-12 p-0">
         <p class="border-bottom border-dark fw-bold">${rollNo}</p>
         <p class="border-bottom border-dark">${group}</p>
         <p class="border-bottom border-dark">${attempt}</p>
     </div>  
 </div>

 <div class="row mt-5">
     <div class="col col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                <table class="m-auto">
                  <tr>
                    <td style="width:150px;">S.no</td>
                    <td style="width:300px"> Subject Name</td>
                    <td style="width:200px;">Max</td>
                    <td style="width:200px;">Obtained</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>${sub1}</td>
                    <td>100</td>
                    <td class="fw-bold">${subOne}</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>${sub2}</td>
                    <td>100</td>
                    <td class="fw-bold">${subTwo}</td>
                  </tr>

                   <tr>
                    <td>3</td>
                    <td>${sub3}</td>
                    <td>100</td>
                  <td class="bf-bood">${subThree}</td>
                  </tr>
                    <tr>
                    <td colspan=2>Total Marks</td>
                    <td  colspan=2>300</td>
                  </tr>
                  <tr>
                    <td colspan=2>Obtained Marks</td>
                    <td class="fw-bold" colspan=2>${obtainedMarks}</td>
                  </tr>
                  <tr>
                    <td colspan=2>Percentage</td>
                    <td class="fw-bold" colspan=2>${percentage}</td>
                  </tr>
                  <tr>
                    <td colspan=2>Grade</td>
                    <td class="fw-bold" colspan=2>${grade}</td>
                  </tr>
                 </table>        
     </div>
 </div>

 <div class="row">
     <div class="col col-lg-6 col-md-6 col-sm-6 col-6 mt-5 ms-auto">
 <img class="img-fluid w-50 mt-5" src="./logo-qr.jpg" alt="">
     </div>
     <div class="col col-lg-6 col-md-6 col-sm-6 col-6">
 <img class="img-fluid border-bottom border-dark w-50 logsign" src="./logo-sign.png" alt="">
     </div>
 </div>

<div class="row">
     <div class="col col-lg-6 col-md-6 col-sm-6 col-6">
     </div>
     <div class="col col-lg-6 col-md-6 col-sm-6 col-6 mt-3 text-center">
      <h3>Signature</h3>
     </div>
 </div>

 <div class="row mt-5 text-center">
     <div class="col col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
         <p>This marksheet is generated online</p>
         <p>more details: http://www.UTM.com</p>
         <p></p>
     </div>
 </div>

 <div class="row">
     <div class="col col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
     <p></p>
     </div>
     </div>

                
             </div>
         </div>
     </div>`);
    
      

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


    