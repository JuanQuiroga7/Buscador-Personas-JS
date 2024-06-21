import { fetchProfiles, filterProfiles } from './data.js';

let allProfiles = [];
let displayedProfiles = [];

window.onload = function() {
    fetchProfiles().then(data => {
        allProfiles = data;
        displayedProfiles = getRandomProfiles(allProfiles, 6);
        updateDisplay(displayedProfiles);

        const inputField = document.getElementById('input__search');
        inputField.addEventListener('input', function() {
            const searchValue = this.value.toLowerCase();
            const filteredProfiles = filterProfiles(allProfiles, searchValue);
            updateDisplay(filteredProfiles);
        });
    });
};



// window.addEventListener('load', function() {
//     fetchProfiles().then(profiles => { 
//         const randomProfiles = getRandomProfiles(profiles, 6); 

        
//         updateDisplay(randomProfiles);
//     });
// });


function getRandomProfiles(profiles, count) {
    
    for (let i = profiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [profiles[i], profiles[j]] = [profiles[j], profiles[i]];
    }

    
    return profiles.slice(0, count);
}

function updateDisplay(profiles) {
    
    const container = document.getElementById('profiles-container');

   
    container.innerHTML = '';

    profiles.forEach(profile => {
        const profileHTML = `
            <div class="person__result">
                <img src="${profile.avatar}" alt="">
                <div class="person__details">
                    <p>${profile.name_full}</p>
                    <span>${profile.description}</span> 
                </div>
            </div>
        `;

        container.innerHTML += profileHTML;
    });
}