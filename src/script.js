document.getElementById("akan-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Retrieve input values
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = document.getElementById("year").value;
    const gender = document.querySelector('input[name="gender"]:checked');
  
    // Validation
    if (isNaN(day) || day < 1 || day > 31) {
      alert("Please enter a valid day between 1 and 31.");
      return;
    }
    if (isNaN(month) || month < 1 || month > 12) {
      alert("Please enter a valid month between 1 and 12.");
      return;
    }
    if (!gender) {
      alert("Please select a gender.");
      return;
    }
  
    // Parse year parts
    const CC = parseInt(year.substring(0, 2)); // First two digits
    const YY = parseInt(year.substring(2)); // Last two digits
  
    // Day of the week formula
    const d = Math.floor(
      ((4 * CC - 2 * CC - 1) + (5 * YY) / 4 + (26 * (month + 1)) / 10 + day) % 7
    );
  
    // Normalize day to range [0–6]
    const dayIndex = Math.floor((d + 7) % 7);
  
    // Akan names
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    const akanName = gender.value === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];
    const bornDay = daysOfWeek[dayIndex];
  
    // Display result
    document.getElementById("generated-name").textContent = `You were born on a ${bornDay}. Your Akan name is ${akanName}.`;
  });
 