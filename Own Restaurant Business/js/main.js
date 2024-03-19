const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute ("thisYear", thisYear)
year.textContent = thisYear