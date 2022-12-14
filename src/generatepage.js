function managerAdd(managerQuestions) {
return `<div class="card col-sm">
    <div class="card-header bg-primary text-white">
        <h3>${managerQuestions.name}</h3>
        <h3>Manager</h3>
    </div>
    <div class="card-body">
        <div>
            <p>Id: ${managerQuestions.id}</p>
        </div>
        <div>
            <p>Email: <a href = "mailto:${managerQuestions.email}">${managerQuestions.email}</a></p>
        </div>
        <div>
            <p>Office Number: ${managerQuestions.officeNumber}</p>
        </div>
    </div>
</div>`
};

function engineerAdd(engineerQuestions) {
return `<div class="card col-sm">
    <div class="card-header bg-primary text-white">
        <h3>${engineerQuestions.name}</h3>
        <h3>Engineer</h3>
    </div>
    <div class="card-body">
        <div>
            <p>Id: ${engineerQuestions.id}</p>
        </div>
        <div>
            <p>Email: <a href = "mailto:${engineerQuestions.email}">${engineerQuestions.email}</a></p>
        </div>
        <div>
            <p>Github: <a href= "https://github.com/${engineerQuestions.github}">${engineerQuestions.github}</a></p>
        </div>
    </div>
</div>`
};

function internAdd(internQuestions) {
return `<div class="card col-sm">
    <div class="card-header bg-primary text-white">
        <h3>${internQuestions.name}</h3>
        <h3>Intern</h3>
    </div>
    <div class="card-body">
        <div>
            <p>Id: ${internQuestions.id}</p>
        </div>
        <div>
            <p>Email: <a href = "mailto:${internQuestions.email}">${internQuestions.email}</a></p>
        </div>
        <div>
            <p>School: ${internQuestions.school}</p>
        </div>
    </div>
</div>`
};

module.exports =  teamArray => {   
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel = "stylesheet" href = "style.css">
    <title>Team Page</title>
</head>
<body>
    <header class="jumbotron bg-danger text-white text-center">
        <h1>My Team</h1>
    </header>

    <div class="container">
        <div class="row">
             ${teamArray.filter(employee => employee.getRole() === "Manager").map(manager => managerAdd(manager))}
             ${teamArray.filter(employee => employee.getRole() === "Engineer").map(manager => engineerAdd(manager))}
            ${teamArray.filter(employee => employee.getRole() === "Intern").map(manager => internAdd(manager))}

   
        </div>
    </div>
</body>
</html>`
};


