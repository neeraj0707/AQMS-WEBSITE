// function toggleMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('show');
//   }
//   window.addEventListener("scroll", () => {
//     const navbar = document.querySelector(".navbar");
//     if (window.scrollY > 50) {
//       navbar.classList.add("light");
//     } else {
//       navbar.classList.remove("light"); 
//     }
//   });

 

// let lastScrollY = window.scrollY;
// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', () => {
//     const currentScrollY = window.scrollY;
    

//     if (currentScrollY > lastScrollY) {
//         // Scrolling down - hide navbar
//         navbar.classList.add('hidden');
//     } else {
//         // Scrolling up - show navbar
//         navbar.classList.remove('hidden');
//     }

//     // Optional: Add blur effect when scrolling up
//     if (currentScrollY < lastScrollY) {
//         navbar.classList.add('blur');
//     } else {
//         navbar.classList.remove('blur');
//     }

//     lastScrollY = currentScrollY;
// });


// const heading = document.getElementById('banner-text-p');
// const text = "Monitor, Evaluate, and Manage Your Air Quality with Precision Tools."; // Text you want to display

// let index = 0;
// let isDeleting = false; 

// function typeText() {
//     if (isDeleting) {
     
//         heading.innerHTML = text.substring(0, index);
//         index--;
        
//         if (index === 0) {
//             isDeleting = false; 
//             setTimeout(typeText, 500); 
//         } else {
//             setTimeout(typeText, 80); 
//         }
//     } else {
      
//         heading.innerHTML = text.substring(0, index);
//         index++;

//         if (index === text.length) {
//             isDeleting = true; 
//             setTimeout(typeText, 500); 
//         } else {
//             setTimeout(typeText, 50); 
//         }
//     }
// }


// window.onload = typeText;

// document.getElementById("search-button").addEventListener("click", handleSearch);

// document.getElementById("location-search").addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     handleSearch();
//   }
// });

// function handleSearch() {
//   const location = document.getElementById("location-search").value;

//   if (location.trim()) {
//     getCoordinates(location);
//   } else {
//     alert("Please enter a valid location.");
//   }
// }

// function getCoordinates(location) {
//   const apiKey = "b87c1e99cd7f47a295c15e3101ae9fce"; 
//   const geocodeURL = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${apiKey}`;

//   fetch(geocodeURL)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.results && data.results.length > 0) {
//         const lat = data.results[0].geometry.lat;
//         const lon = data.results[0].geometry.lng;

//         updateMap(lat, lon);
//       } else {
//         alert("Location not found. Please try again.");
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       alert("Failed to fetch location. Please try again later.");
//     });
// }

// function updateMap(lat, lon) {
//   const iframe = document.getElementById("windy-frame");

 
//   iframe.src = `https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&zoom=10&level=surface&overlay=pm2p5&menu=&message=&marker=true&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=${lat}&detailLon=${lon}&metricWind=default&metricTemp=default&radarRange=-1&stations`;
// }


// import { database } from "./firebase"; // Adjust the path if needed
// import { ref, onValue } from "firebase/database";

// // Function to fetch AQI and temperature data
// function fetchData() {
//   const tempRef = ref(database, "path/to/temperature");
//   const aqiRef = ref(database, "path/to/aqi");

//   // Fetch Temperature
//   onValue(tempRef, (snapshot) => {
//     const temp = snapshot.val();
//     console.log("Temperature:", temp);
//     document.getElementById("temp").innerText = `Temperature: ${temp}°C`;
//   });

//   // Fetch AQI Value
//   onValue(aqiRef, (snapshot) => {
//     const aqi = snapshot.val();
//     console.log("AQI:", aqi);
//     document.getElementById("aqi").innerText = `AQI Value: ${aqi}`;
//   });
// }

// // Call fetchData when needed
// fetchData();




// // document.addEventListener("DOMContentLoaded", function () {
// //   const elements = document.querySelectorAll(".animate-fadeInUp");

// //   function fadeInOnScroll() {
// //     elements.forEach((element) => {
// //       const elementTop = element.getBoundingClientRect().top;
// //       const windowHeight = window.innerHeight;

// //       if (elementTop < windowHeight - 100) {
// //         element.classList.add("visible");
// //       }
// //     });
// //   }

// //   window.addEventListener("scroll", fadeInOnScroll);
// //   fadeInOnScroll(); // Run once on page load
// // });


 



document.addEventListener('DOMContentLoaded', function() {
  // Get the current page filename (e.g., "airmonitor.html")
  const currentPage = window.location.pathname.split('/').pop();
  
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-links li a');
  
  // Loop through each link
  navLinks.forEach(link => {
    // Extract the filename from the link's href (e.g., "airmonitor.html")
    const linkPage = link.getAttribute('href').replace(/^\.?\//, '');
    
    // If the link matches the current page, add 'active' class
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
  
  // Special case: Homepage (index.html)
  if (currentPage === '' || currentPage === 'index.html') {
    const homeLink = document.querySelector('.navbar a[href*="index.html"]');
    if (homeLink) {
      homeLink.classList.add('active');
    }
  }
});




// Hamburger menu toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

// Navbar scroll effects
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const currentScrollY = window.scrollY;
  
  // Add/remove light class
  if (currentScrollY > 50) {
    navbar.classList.add("light");
  } else {
    navbar.classList.remove("light"); 
  }

  // Hide/show on scroll direction
  if (currentScrollY > lastScrollY) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }

  // Blur effect
  if (currentScrollY < lastScrollY) {
    navbar.classList.add('blur');
  } else {
    navbar.classList.remove('blur');
  }

  lastScrollY = currentScrollY;
});

let lastScrollY = window.scrollY;

// Search functionality
document.getElementById("search-button")?.addEventListener("click", handleSearch);
document.getElementById("location-search")?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

function handleSearch() {
  const location = document.getElementById("location-search").value;
  if (location.trim()) {
    getCoordinates(location);
  } else {
    alert("Please enter a valid location.");
  }
}

function getCoordinates(location) {
  const apiKey = "b87c1e99cd7f47a295c15e3101ae9fce"; 
  const geocodeURL = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${apiKey}`;

  fetch(geocodeURL)
    .then((response) => response.json())
    .then((data) => {
      if (data.results?.length > 0) {
        const { lat, lng: lon } = data.results[0].geometry;
        updateMap(lat, lon);
      } else {
        alert("Location not found. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to fetch location. Please try again later.");
    });
}

function updateMap(lat, lon) {
  const iframe = document.getElementById("windy-frame");
  if (iframe) {
    iframe.src = `https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&zoom=10&level=surface&overlay=pm2p5&menu=&message=&marker=true&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=${lat}&detailLon=${lon}&metricWind=default&metricTemp=default&radarRange=-1&stations`;
  }
}

// Initialize Firebase (if needed)
const firebaseConfig = {
  apiKey: "AIzaSyD5fLKxQVrS5AUarmRU8uslNYwGptZT0LM",
  authDomain: "aqms-website-d1ce2.firebaseapp.com",
  projectId: "aqms-website-d1ce2",
  storageBucket: "aqms-website-d1ce2.firebasestorage.app",
  messagingSenderId: "253803587256",
  appId: "1:253803587256:web:de65a5399388b10ed5364d",
  measurementId: "G-JYEX8P4FJB"
};

// Only initialize if Firebase is available
if (typeof firebase !== 'undefined') {
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
}



// Scroll animation functionality
document.addEventListener("DOMContentLoaded", function() {
  const animateElements = document.querySelectorAll('.animate-fadeInUp');
  
  // Run once on page load
  checkVisibility();
  
  // Run on scroll
  window.addEventListener('scroll', checkVisibility);
  
  function checkVisibility() {
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.75; // 75% from top
    
    animateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < triggerPoint) {
        element.classList.add('visible');
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const player = document.querySelector('lottie-player');
  
  if (player) {
    player.addEventListener('error', (event) => {
      console.error('Lottie Player Error:', event.detail);
      document.getElementById('lottie-fallback').style.display = 'block';
    });
    
    player.addEventListener('load', () => {
      console.log('Lottie animation loaded successfully');
    });
  } else {
    console.error('Lottie player element not found');
  }
  
  // Verify file exists
  fetch('./assets/seamless_connectivity.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => console.log('Lottie JSON is valid'))
    .catch(error => console.error('Error loading JSON:', error));
});








document.addEventListener("DOMContentLoaded", function () {
  const values = document.querySelectorAll(".tecsage_value");

  function checkScroll() {
      values.forEach(value => {
          const rect = value.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
              value.classList.add("visible");
          }
      });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run on page load
});



document.addEventListener("DOMContentLoaded", function () {
  const values = document.querySelectorAll(".tecsage_value_last");

  function checkScroll() {
      values.forEach(value => {
          const rect = value.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
              value.classList.add("visible");
          }
      });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run on page load
});




const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showNextImage() {
  images.forEach((img, index) => {
    img.classList.remove('active');
    if (index === currentIndex) {
      img.classList.add('active');
    }
  });

  currentIndex = (currentIndex + 1) % images.length;
}

showNextImage(); // Initial image
setInterval(showNextImage, 5000); // Change every 3 seconds


// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".tecsage_text", {
//   scrollTrigger: {
//     trigger: ".tecsage_text",
//     start: "top 80%", 
//     toggleActions: "play none none none",
//   },
//   opacity: 1,
//   y: 0,
//   duration: 1.2,
//   ease: "power2.out",
// });



// gsap.registerPlugin(ScrollTrigger);

// // Animate carousel section out on scroll
// gsap.to(".carousel-section", {
//   scrollTrigger: {
//     trigger: ".carousel-section",
//     start: "top top",
//     end: "bottom top",
//     scrub: true,
//   },
//   opacity: 1,
//   y: -50,
//   ease: "power2.out"
// });



  document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal-text');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Unobserve for performance
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -25px 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  });











  let cart = [];

  function addToCart(productName, price) {
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name: productName, price, quantity: 1 });
    }

    renderCart();
  }

  function renderCart() {
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");

    cartList.innerHTML = "";
    let total = 0;
    let itemCount = 0;

    cart.forEach(item => {
      total += item.price * item.quantity;
      itemCount += item.quantity;
      cartList.innerHTML += `<li>${item.name} × ${item.quantity} = ₹${item.price * item.quantity}</li>`;
    });

    cartTotal.textContent = total;
    cartCount.textContent = itemCount;
  }

  function toggleCart() {
    document.getElementById("cart-dropdown").classList.toggle("hidden");
  }







  // async function fetchAQIData() {
  //   try {
  //     const response = await fetch("https://api.openaq.org/v3/latest?limit=1000&parameter=pm25", {
  //       headers: {
  //         "X-API-Key": "ba7a1561d2ef39a8cdcf872e93ba4a0e6655c38ef6c8a495bf5390668d082545", // Your key
  //         "accept": "application/json" // Required header
  //       }
  //     });
      
  //     if (!response.ok) {
  //       throw new Error(`API error: ${response.status} ${response.statusText}`);
  //     }
      
  //     const data = await response.json();
  //     return data.results;
      
  //   } catch (error) {
  //     console.error("Failed to fetch AQI data:", error);
  //     return []; // Return empty array on failure
  //   }
  // }
  
  // // Initialize map
  // const map = L.map('map').setView([20.5937, 78.9629], 5);
  // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  
  // // Process and display data
  // fetchAQIData().then(locations => {
  //   locations.forEach(location => {
  //     const lat = location.coordinates?.latitude;
  //     const lng = location.coordinates?.longitude;
  //     const pm25 = location.measurements?.find(m => m.parameter === 'pm25')?.value;
      
  //     if (lat && lng && pm25) {
  //       const color = pm25 <= 50 ? 'green' : 
  //                    pm25 <= 100 ? 'yellow' : 
  //                    'red';
        
  //       L.circleMarker([lat, lng], { 
  //         radius: 8,
  //         fillColor: color,
  //         color: '#000',
  //         fillOpacity: 0.8
  //       })
  //       .addTo(map)
  //       .bindPopup(`PM2.5: ${pm25} µg/m³`);
  //     }
  //   });
  // });





  // async function fetchAQIData() {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/aqi");
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     return data.results || []; // Return empty array if results are not found
  //   } catch (error) {
  //     console.error("Failed to fetch from proxy:", error);
  //     return [];
  //   }
  // }
  

  
  // // Initialize map
  // const map = L.map('map').setView([20.5937, 78.9629], 5);
  // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  
  // // Process and display data
  // fetchAQIData().then(locations => {
  //   if (locations.length === 0) {
  //     console.warn("No locations data received");
  //     return;
  //   }

  //   locations.forEach(location => {
  //     const lat = location.coordinates?.latitude;
  //     const lng = location.coordinates?.longitude;
  //     const pm25 = location.measurements?.find(m => m.parameter === 'pm25')?.value;
      
  //     if (lat && lng && pm25 !== undefined) {
  //       const color = pm25 <= 50 ? 'green' : 
  //                    pm25 <= 100 ? 'yellow' : 
  //                    'red';
        
  //       L.circleMarker([lat, lng], { 
  //         radius: 8,
  //         fillColor: color,
  //         color: '#000',
  //         fillOpacity: 0.8
  //       })
  //       .addTo(map)
  //       .bindPopup(`PM2.5: ${pm25} µg/m³`);
  //     }
  //   });
  // });














  // const swiper = new Swiper('.swiper', {
  //   loop: true,
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 1,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //     },
  //   },
  // });









//   const data = [
//   { index: 1, parameter: "CO₂ (Carbon Dioxide)", accuracy: "±(50 ppm + 3% of reading)", range: "400 – 5000 ppm" },
//   { index: 2, parameter: "PM2.5", accuracy: "±10 µg/m³ or 10%", range: "0 – 1000 µg/m³" },
//   { index: 3, parameter: "PM10", accuracy: "±10 µg/m³ or 10%", range: "0 – 1000 µg/m³" },
//   { index: 4, parameter: "TVOC (Total VOCs)", accuracy: "±0.2%", range: "0.2 – 10 mg/m³" },
//   { index: 5, parameter: "Temperature", accuracy: "±0.5°C", range: "-10°C to 85°C" },
//   { index: 6, parameter: "Relative Humidity", accuracy: "±3% RH", range: "5% – 100% RH" },
// ];

// const tableBody = document.querySelector("#specTable tbody");

// data.forEach(row => {
//   const tr = document.createElement("tr");
//   tr.innerHTML = `
//     <td>${row.index}</td>
//     <td>${row.parameter}</td>
//     <td>${row.accuracy}</td>
//     <td>${row.range}</td>
//   `;
//   tableBody.appendChild(tr);
// });
















