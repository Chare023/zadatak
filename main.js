var url = 'https://dummy.restapiexample.com/api/v1/employees';

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.response)
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}


load(url, function bla (response) {
    responseData = JSON.parse(response).data
    
    for (el of responseData) {
        let name = el.employee_name;
        let salary = el.employee_salary;
        var node = document.createElement('li');
        var button = document.createElement('button');
        button.id = `${el.id}`;
        button.addEventListener('click', myFunction);
        var textbtn = document.createTextNode('click');
        var textnode = document.createTextNode(`Name: ${name} Salary: ${salary}`);
        button.appendChild(textbtn);
        node.appendChild(textnode);
        node.append(button);
        document.getElementById("demo").appendChild(node);       
    }

    function myFunction() {
        var btnId = this.id;
        let menu = document.getElementById("demo");
        
        while(menu.firstChild){
            menu.removeChild(menu.firstChild);
        }

        for (el of responseData) {
            let id = el.id;
            let name = el.employee_name;
            let salary = el.employee_salary;
            let age = el.employee_age;
            var node = document.createElement('li');
            var button = document.createElement('button');
            var textbtn = document.createTextNode('back');
            var textnode = document.createTextNode(`Name: ${name} Salary: ${salary} Age: ${age}`);
            button.appendChild(textbtn);
            node.appendChild(textnode);
            node.append(button);
            
            if(btnId == id) {
                document.getElementById("demo").appendChild(node);
            }
            button.addEventListener('click', () => {
                menu.removeChild(menu.firstChild);
                load(url, bla);
            });
        }
    }
})
