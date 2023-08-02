document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var address = document.getElementById("addresss").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var foodList = document.getElementsByName("food");
    var foods = [];
    for (var i = 0; i < foodList.length; i++) {
      if (foodList[i].checked) {
        foods.push(foodList[i].value);
      }
    }
    if(foods.length<2){
        alert(" Food : Must choose atleast 2 out of 5");
        document.getElementsByName("food").reset();
    }
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    
    var table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    var row = table.insertRow(table.rows.length);
    
    var cell1 = row.insertCell(0);
    cell1.innerHTML = firstName;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = lastName;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = address;
    var cell4 = row.insertCell(3);
    cell4.innerHTML = pincode;
    var cell5 = row.insertCell(4);
    cell5.innerHTML = gender;
    var cell6 = row.insertCell(5);
    cell6.innerHTML = foods.join(", ");
    var cell7 = row.insertCell(6);
    cell7.innerHTML = state;
    var cell8 = row.insertCell(7);
    cell8.innerHTML = country;
    
    document.getElementById("form").reset();
  });