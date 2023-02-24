


var middlePositionX = (document.body.scrollWidth - window.innerWidth) / 2;
window.scrollTo(middlePositionX, 0);

// document.addEventListener('DOMContentLoaded', function() {
//   // Load the YAML file
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', '/Map-Data.yaml');
//   xhr.onload = function() {
//     const CountryData = jsyaml.load(xhr.responseText);
//     console.log(CountryData);
    
//     // Loop through each SVG path element
//     for (let path of document.querySelectorAll('svg path')) {
//       const countryName = path.getAttribute('name');
//       if (CountryData.hasOwnProperty(countryName)) {
//         const crisisType = CountryData[countryName];
//         if (crisisType === 'International-Crisis' || crisisType === 'international-crisis') {
//           path.setAttribute('fill', 'red');
//         } else if (crisisType === 'Water-Crisis' || crisisType === 'water-crisis') {
//           path.setAttribute('fill', 'blue');
//         } else if (crisisType === 'Storm-Crisis' || crisisType === 'storm-crisis') {
//           path.setAttribute('fill', 'green');
//         } else if (crisisType === 'None' || crisisType === 'none') {
//           path.setAttribute('fill', 'rgb(236, 236, 236)');
//         }
//       }
//     }
//   };
//   xhr.send();
// });




// function addCrisis() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'Map-Data.yaml');
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//       const yamlData = xhr.responseText;
//       const dataObj = jsyaml.load(yamlData);
//       dataObj.Ukraine = 'international-crisis';
//       const updatedYaml = jsyaml.dump(dataObj);
//       console.log(updatedYaml);
//       localStorage.setItem('Map-Data', updatedYaml); // Store the updated YAML data in localStorage
//     }
//   };
//   xhr.send();
// }
