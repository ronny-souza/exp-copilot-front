let employees = [];

document.addEventListener('DOMContentLoaded', () => {
    displayEmployees();
});

document.addEventListener('submit', (e) => {
    e.preventDefault();
    addEmployee();
});

document.getElementById('deleteAll').addEventListener('click', () => {
    deleteAllEmployees();
});

function addEmployee() {
    let employee = {
        name: '',
        email: '',
        address: '',
        phone: ''
    };
    employee.name = document.getElementById('name').value;
    employee.email = document.getElementById('email').value;
    employee.address = document.getElementById('address').value;
    employee.phone = document.getElementById('phone').value;

    employees.push(employee);
    clearForm();
    displayEmployees();
};

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
};

function displayEmployees() {
    let tableBody = document.getElementById('employeesTableBody');
    let divEmptyData = document.getElementById('noEmployessMessage');
    let data = '';
    if (employees.length) {
        for (let i = 0; i < employees.length; i++) {
            data += `<tr>
                        <td><input type="checkbox" name="check" id="check"></td>
                        <td>${employees[i].name}</td>
                        <td>${employees[i].email}</td>
                        <td>${employees[i].address}</td>
                        <td>${employees[i].phone}</td>
                        <td>
                            <button class="btn btn-warning text-white me-2"><i class="bi bi-pencil-fill"></i></button>
                            <button class="btn btn-danger" onclick="deleteEmployee(${i})"><i class="bi bi-trash-fill"></i></button>
                            </td>
                    </tr>`;
        }
        tableBody.innerHTML = data;
        divEmptyData.innerHTML = '';
    } else {
        data = `<i class="bi bi-exclamation-triangle-fill fs-1"></i>
        <h3>No Employees</h3>`;

        divEmptyData.innerHTML = data;
        tableBody.innerHTML = '';
    }
};

function deleteAllEmployees() {
    employees = [];
    displayEmployees();
};

function deleteEmployee(index) {
    employees.splice(index, 1);
    displayEmployees();
}