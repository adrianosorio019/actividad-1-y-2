const fetchDataButton = document.getElementById("fetchDataButton");
fetchDataButton.addEventListener("click", fetchEmployeeData);

/* Function to get employee data */
function fetchEmployeeData() {
  const employeeName = document.getElementById("employeeName").value;
  const apiURL = http//10.0.2.15/api/resource/Employee?fields= ["employee_name","cell_number","emergency_phone_number"];

  /* API consumption by fetch */
  fetch(apiURL, {
    headers: {
      Authorization: "Token dc5906dbc5180ac:472cbe03e1f24cf",
    },
    });
    then((response) => response.json())
    .then((data) => {
      const employee = data.data.find(
        (emp) => emp.employee_name === employeeName
      );
      if (employee) {
        document.getElementById("name").textContent =
          employee.employee_name;
        document.getElementById("cellNumber").textContent =
          employee.cell_number;
        document.getElementById("emergencyPhoneNumber").textContent =
          employee.emergency_phone_number;
        document.getElementById("employeeTable").style.display = "block";
      } else {
        alert("Employee not found");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}