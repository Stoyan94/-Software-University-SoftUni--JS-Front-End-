function solve(input) {
    input
    .map(name => ({ name, personalNumber: name.length }))
        .forEach(employee => console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`))
}

function solve2(employeeNames) {
    const employees = [];

    for (const name of employeeNames) {
        const currEmp = {name, personalNumber: name.length}
        employees.push(currEmp)       
    }
    
    employees.forEach(employee => console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`))
}

solve2([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );