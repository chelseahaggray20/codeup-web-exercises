
// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.


function wait(num) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve();
        }, num);
    })
}

    wait(1000).then(() => console.log('monkey'));
//
//     wait(3000).then(() => console.log('banana'));
// }
//
//



// GitHub Access Token: 635e86446bcf81b620e58557323aba04381e8cc5
// Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made.

const gitLastCommit = (username) => {
    let url = `https://api.github.com/users/${username}/events`;
    fetch(url, {headers: {'Authorization':`token ${GitHubToken}`}})
        .then(response => response.json())
        // .then(data => console.log(data))
    .then(response => response.find(event => event.type === "PushEvent"))
        .then(event => event.created_at)
        .then(date => console.log(date));
        };

console.log(gitLastCommit( "chelseahaggray20"));
//
// // GET /users/:username/events/orgs/:org
// }