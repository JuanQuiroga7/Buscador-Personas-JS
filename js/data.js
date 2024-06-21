export function fetchProfiles() {
    return fetch('https://6674179975872d0e0a950e53.mockapi.io/user')
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}

export function filterProfiles(profiles, searchValue) {
    return profiles.filter(profile =>
        profile.name_full.toLowerCase().includes(searchValue) ||
        profile.description.toLowerCase().includes(searchValue)
    );
}


