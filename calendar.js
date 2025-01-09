const groupOfButtons = document.querySelectorAll(".view");
groupOfButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const selected = event.target;
    groupOfButtons.forEach((btn) => btn.classList.remove("selected"));
    selected.classList.add("selected");
  });
});
const calendarGrid = document.getElementById("calendar");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
const endDay = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1,
  0
);

function renderCalendar() {
  for (let i = startDay.getDate(); i <= endDay.getDate(); i++) {
    const dayCell = document.createElement("div");
    dayCell.classList.add("cell");
    dayCell.textContent = i;
    calendarGrid.appendChild(dayCell);
  }
}
renderCalendar();
