function fetchGitHubInformation(event) {
    var username = $("#gh-username").val();
    // console.log(username);
    if (!username) {
    //  || username === ''){
        // console.log('1');
        // console.log(username.length);
        // console.log('2');
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }
 
    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/images/loader.gif" alt="loading..." />
        </div>`
    );
}

// function fetchGitHubInformation(event) {

//     var username = $("#gh-username").val();
//     if (!username) {
//         $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
//         return;
//     }

//     $("#gh-user-data").html(
//         `<div id="loader">
//             <img src="assets/css/loader.gif" alt="loading..." />
//         </div>`);
// }