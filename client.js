console.log('hello from js');
$(document).ready(onReady);

let employees = [];


function onReady(){
    console.log('hello from jq');
    $('#submitForm').on('click', submitForm);
    $('#employeeAdd').on('click', '.deleteBtn', deleteFunc);
}

function submitForm(){
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idNumber = $('#idNumber').val();
    let title = $('#title').val();
    let salary = $('#salary').val();
    let newEmployee = {
        firstName: firstName,
        lastName: lastName,
        idNumber: idNumber,
        title: title,
        salary: salary,
    }
    employees.push(newEmployee);
   
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#title').val('');
    $('#salary').val('');

    let ulAdd = $("#employeeAdd");
    ulAdd.empty(); //clear out ul to append fresh list
    for(let i = 0; i < employees.length; i++){
        ulAdd.append(`
        <tr>
        <td>${employees[i].firstName} 
        </td>
        <td>${employees[i].lastName}
        </td>
        <td>${employees[i].idNumber}
        </td>
        <td>${employees[i].title}
        </td>
        <td>${employees[i].salary}
        </td>
       <td> <button class="deleteBtn">DELETE</button></td>
        </tr>
        `);
    }
    monthlyCosts();

}

function deleteFunc(){
    console.log('delete');
    $(this).parent().parent().remove();
}

 function monthlyCosts(){
    let sum = 0;
    let ulMonthlyCosts = $("#monthlyCosts");
    for(let i = 0; i< employees.length; i++){
        sum += Number(employees[i].salary);
        
    } sum/=12;//divide annual costs to get monthly total
    ulMonthlyCosts.empty();
    ulMonthlyCosts.append(sum);   
 
    console.log('monthly cost is', sum); 
    
    if(sum >= Number(20000)){
    $("#monthlyCosts").addClass('redBackground');
     }
    
 } 

