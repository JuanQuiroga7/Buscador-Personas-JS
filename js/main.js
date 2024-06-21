import { fetchProfiles, filterProfiles } from './data.js';

let profiles = [];

window.onload = function() {
    fetchProfiles().then(data => {
        profiles = data;
        console.log("2", profiles)

        const inputField = document.getElementById('input__search');
        inputField.addEventListener('input', function() {
            console.log('Evento detectado')
            const searchValue = this.value.toLowerCase();
            const filteredProfiles = filterProfiles(profiles, searchValue);
            console.log("3", filteredProfiles);
            updateDisplay(filteredProfiles);
        });
    });
};


function updateDisplay(profiles) {
    // Get the container element
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