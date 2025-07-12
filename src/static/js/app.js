// Load initial data
let employees = [...mockEmployees];

// Render employee list to the DOM
function renderEmployees() {
  const container = document.getElementById("employee-list-container");
  container.innerHTML = "";

  employees.forEach(emp => {
    const card = document.createElement("div");
    card.className = "employee-card";
    card.innerHTML = `
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p><strong>Email:</strong> ${emp.email}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    `;
    container.appendChild(card);
  });
}

// Search functionality
function applySearch() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();

  employees = mockEmployees.filter(emp =>
    emp.firstName.toLowerCase().includes(searchValue) ||
    emp.lastName.toLowerCase().includes(searchValue) ||
    emp.email.toLowerCase().includes(searchValue)
  );

  renderEmployees();
}

// Sorting functionality
function applySort() {
  const key = document.getElementById("sortSelect").value;

  if (key) {
    employees.sort((a, b) => a[key].localeCompare(b[key]));
  }

  renderEmployees();
}

// Open modal to add new employee
function showAddForm() {
  document.getElementById("form-title").innerText = "Add Employee";
  document.getElementById("employeeForm").reset();
  document.getElementById("employeeId").value = "";
  document.getElementById("employeeModal").style.display = "flex";
}

// Open modal to edit existing employee
function editEmployee(id) {
  const employee = employees.find(emp => emp.id === id);
  if (!employee) return;

  document.getElementById("form-title").innerText = "Edit Employee";
  document.getElementById("employeeId").value = employee.id;
  document.getElementById("firstName").value = employee.firstName;
  document.getElementById("lastName").value = employee.lastName;
  document.getElementById("email").value = employee.email;
  document.getElementById("department").value = employee.department;
  document.getElementById("role").value = employee.role;
  document.getElementById("employeeModal").style.display = "flex";
}

// Close modal
function closeModal() {
  document.getElementById("employeeModal").style.display = "none";
}

// Save handler for form submission (Add or Edit)
document.getElementById("employeeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("employeeId").value;
  const newEmployee = {
    id: id ? Number(id) : Date.now(),
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    department: document.getElementById("department").value.trim(),
    role: document.getElementById("role").value.trim(),
  };

  if (id) {
    const index = employees.findIndex(emp => emp.id == id);
    if (index !== -1) {
      employees[index] = newEmployee;
    }
  } else {
    employees.push(newEmployee);
  }

  closeModal();
  renderEmployees();
});

// Delete employee
function deleteEmployee(id) {
  if (confirm("Are you sure you want to delete this employee?")) {
    employees = employees.filter(emp => emp.id !== id);
    renderEmployees();
  }
}

// Close modal if clicked outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("employeeModal");
  if (e.target === modal) {
    closeModal();
  }
});

// Initial render
window.onload = renderEmployees;
