document.addEventListener("DOMContentLoaded", function () {
    fetch(
      'http://10.0.2.15/api/resource/Employee?fields=["employee_name","date_of_birth"]&filters=[["Employee","date_of_birth","between",["1990-11-10","1990-11-10"]]]',
      {
        headers: {
          Authorization: "Token dc5906dbc5180ac:472cbe03e1f24cf",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Display today's birthday employee list
        const todayEmployeeList =
          document.getElementById("todayEmployeeList");

        if (data && data.data && data.data.length > 0) {
          data.data.forEach((employee) => {
            const li = document.createElement("li");
            li.className = "employee";
            li.textContent = employee.employee_name;
            todayEmployeeList.appendChild(li);
          });
        } else {
          const li = document.createElement("li");
          li.textContent = "No employees found with birthdays today.";
          todayEmployeeList.appendChild(li);
        }
      })
      .catch((error) => {
        console.error("Error fetching today's data:", error);
      });

    fetch(
      'http://192.168.56.101/api/resource/Employee?fields=["employee_name","date_of_birth"]&filters=[["Employee","date_of_birth","between",["1990-11-01","1990-11-30"]]]',
      {
        headers: {
          Authorization: "Token efea52d320ca619:e7f0251e9e79859",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const allEmployeeList = document.getElementById("allEmployeeList");

        if (data && data.data && data.data.length > 0) {
          data.data.forEach((employee) => {
            const li = document.createElement("li");
            li.className = "employee";
            const dob = new Date(employee.date_of_birth);
            const formattedDob = ${dob.getMonth() + 1}/${dob.getDate()};
            li.textContent = ${employee.employee_name} - ${formattedDob};
            allEmployeeList.appendChild(li);
          });
        } else {
          const li = document.createElement("li");
          li.textContent = "No employees found for the month.";
          allEmployeeList.appendChild(li);
        }
      })
      .catch((error) => {
        console.error("Error fetching data for the month:", error);
      });
  });