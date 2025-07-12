// Original master list
const originalEmployees = [...mockEmployees];

// Apply filter when user clicks "Apply Filter"
function applyFilter() {
  const deptFilter = document.getElementById("filter-department").value.toLowerCase();
  const roleFilter = document.getElementById("filter-role").value.toLowerCase();
  const nameFilter = document.getElementById("filter-first-name").value.toLowerCase();

  employees = originalEmployees.filter(emp => {
    const matchesDept = deptFilter === "" || emp.department.toLowerCase().includes(deptFilter);
    const matchesRole = roleFilter === "" || emp.role.toLowerCase().includes(roleFilter);
    const matchesName = nameFilter === "" || emp.firstName.toLowerCase().includes(nameFilter);

    return matchesDept && matchesRole && matchesName;
  });

  renderEmployees();
}

// Toggle filter panel
function toggleFilterPanel() {
  const panel = document.getElementById("filter-panel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
}
