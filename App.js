//this is a script file and no need to write script tags ,below i have declared and assigned age,name etc using object
var Employee = {Name:"Avinash", Age:25, Salary: 20000, Address:{City: "Hyderabad", State: "AndraPradesh", Pincode: 500048}};
//below code prints value in the console window
console.log("My Name is : "+Employee.Name ,",", "My Age is : "+Employee.Age ,",", "My Salary is : "+Employee.Salary,"&","live in : "+Employee.Address.City,"of state "+Employee.Address.State
	,"&","Pincode is "+Employee.Address.Pincode);