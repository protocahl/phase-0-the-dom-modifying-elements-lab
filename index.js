// document.addEventListener("DOMContentLoaded", function () {
  
//     // Append the <h1> element to the DOM
//     document.body.appendChild(newHeader);
  
//     // Example 1: Create DOM Elements Programmatically
//     const element = document.createElement("div");
//     document.body.append(element);
  
//     const ul = document.createElement("ul");
  
//     for (let i = 0; i < 3; i++) {
//       const li = document.createElement("li");
//       li.textContent = (i + 1).toString();
//       ul.append(li);
//     }
  
//     element.append(ul);
  
//     // Example 2: Add Elements to the DOM via innerHTML
//     const main = document.getElementById("main");
//     main.innerHTML =
//       "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
  
//     // Example 3: Change Properties on DOM Nodes
//     const element2 = document.getElementById("main");
//     element2.style.height = "300px";
//     element2.style.backgroundColor = "#27647B";
//     element2.textContent = "You've changed what's on the screen!";
//     element2.style.fontSize = "24px";
//     element2.style.marginLeft = "30px";
//     element2.style.lineHeight = 2;
  
//     element2.className = "pet-listing dog";
  
//     // Example 4: Remove Elements from the DOM
//     const ul2 = document.getElementsByTagName("ul")[0];
//     const secondChild = ul2.querySelector("li:nth-child(2)");
//     ul2.removeChild(secondChild);
  
//     // To remove the whole unordered list (ul)
//     ul2.remove();
//   });  const element = document.createElement("div");
//   document.body.append(element);
// document.body.append(element);

// const ul = document.createElement("ul");
// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }
// element.append(ul);

const main = document.getElementById("main");
main.remove();
// Create a new <h1> element
const newHeader = document.createElement("h1");
  
// Set the text content of the <h1> element to "your-name"
newHeader.textContent = "your-name";

// Set the id attribute of the <h1> element to "victory"
newHeader.id = "victory";
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion"; // Replace "YOUR-NAME" with your name
