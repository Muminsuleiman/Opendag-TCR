let boxCount = 1; // Variable om het aantal gecreëerde vakjes bij te houden

function createNextBox(currentBoxId) {
  if (boxCount >= 10) {
    // aantal vakjes tot 10
    return;
  }

  const currentBox = document.getElementById(currentBoxId);
  currentBox.removeEventListener("click", () => createNextBox(currentBoxId));

  const nextBoxId = `box-${boxCount + 1}`;
  const nextBox = document.createElement("div");
  nextBox.className = "box hidden";
  nextBox.id = nextBoxId;

  const skills = [
    "Programmeren in talen zoals Java, Python, C++.",
    "Leren hoe je problemen oplost met slimme algoritmes.",
    "Bouwen van websites met HTML, CSS, JavaScript, en frameworks zoals React of Angular.",
    "Begrip van databases, SQL-query's en relationele databases.",
    "Gebruik van tools zoals Git voor samenwerking en codebeheer.",
    "Kennis van agile, scrum, of andere ontwikkelingsmethoden.",
    "Probleemoplossend vermogen voor het vinden van fouten en creatieve oplossingen.",
    "Basisprincipes van cybersecurity begrijpen.",
    "Schrijven van tests vóór het coderen voor betrouwbare software.",
    "Inzicht in cloudplatforms zoals AWS, Azure, of Google Cloud voor het ontwikkelen van schaalbare applicaties."
  ];

  nextBox.innerHTML = skills[boxCount - 1];
  nextBox.addEventListener("click", () => createNextBox(nextBoxId));

  // connector between boxes
  const connector = document.createElement("div");
  connector.className = "connector";

  // Insert the connector after the current box
  currentBox.insertAdjacentElement("afterend", connector);
  connector.insertAdjacentElement("afterend", nextBox);

  setTimeout(() => {
    nextBox.classList.remove("hidden");
  }, 10);

  boxCount++; // Increment the box count
}