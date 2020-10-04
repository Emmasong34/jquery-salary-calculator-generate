console.log('hello from js');
$(document).ready(onReady);

let employees = [];

function onReady(){
    console.log('hello from jq');
    $('#submitForm').on('click', submitForm);
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
        <li>${employees[i].firstName} 
        </li>
        <li>${employees[i].lastName}
        </li>
        <li>${employees[i].idNumber}
        </li>
        <li>${employees[i].title}
        </li>
        <li>${employees[i].salary}
        </li>
        `);
    }
    }
