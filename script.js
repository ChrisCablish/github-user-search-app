// - On first load, show the profile information for Octocat.
// - Display an error message (as shown in the design) if no user is found when a new search is made.
// - If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.
// - If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design). The lorem ipsum text in the designs shows how the bio should look when it is present.
// - If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added (as shown in the design).
// - Website, twitter, and company information should all be links to those resaources. For the company link, it should remove the `@` symbol and link to the company page on GitHub. For Octocat, with `@github` being returned for the company, this would lead to a URL of `https://github.com/github`.

//variables
const searchInput = document.getElementById('input');
const searchButton = document.getElementById('button');
const userImageSmall = document.getElementById('user__image__sm');
const userImageLarge = document.getElementById('avatar_for_large_screens')
const userName = document.getElementById('user__name');
const dateJoined = document.getElementById('user__joined');
const userHandle = document.getElementById('user__handle');
const userBio = document.getElementById('bio');
const repoNumber = document.getElementById('repo__number');
const followerNUmber = document.getElementById('follower__number');
const followingNumber = document.getElementById('following__number');
const userLocation = document.getElementById('location');
const company = document.getElementById('company');
const website = document.getElementById('website');
const twitter = document.getElementById('twitter');
const input = document.getElementById('input');
const button = document.getElementById('search__button');

//functions
const updateDisplay = (searchedUser) => {

  fetch(`https://api.github.com/users/${searchedUser}`)
  .then(response => response.json())
  .then(data => {
    //avatar
    const profileImageURL = data.avatar_url;
    
    // Create the first img element for userImageSmall
    const imgElementSmall = document.createElement('img');
    imgElementSmall.src = profileImageURL;
    imgElementSmall.style.width = '50px';
    imgElementSmall.style.height = '50px'; 
    userImageSmall.innerHTML = '';
    userImageSmall.appendChild(imgElementSmall);
    
    // Create the second img element for userImageLarge
    const imgElementLarge = document.createElement('img');
    imgElementLarge.src = profileImageURL;
    imgElementLarge.style.width = '50px';
    imgElementLarge.style.height = '50px'; 
    userImageLarge.innerHTML = '';
    userImageLarge.appendChild(imgElementLarge);

        //username
        userName.innerText = data.name;
        //user handle
        userHandle.innerText = `@${data.login}`;
        //date joined
        const formattedDate = new Date(data.created_at).toLocaleDateString();
        dateJoined.innerText = `Joined ${formattedDate}`;
        //bio
        userBio.innerText = data.bio;
        //repos
        repoNumber.innerText = data.public_repos;
        //followers
        followerNUmber.innerText = data.followers;
        //following
        followingNumber.innerText = data.following;
        //location
        if (data.location) {
          userLocation.innerText = data.location;
        } else {
          userLocation.innerText = "Not Available"
        }
        //website
        console.log(data.blog);
        if (data.blog) {
          website.innerText = data.blog
          console.log('flag');
          website.href = data.blog
          console.log(website.href);
        } else {
          website.innerText = 'Not Available';
          website.removeAttribute('href');
        }

        //company 
        company.removeAttribute('href');
        if (data.company) {
          if (data.company.charAt(0) === '@') {
            company.innerText = data.company;
            const trimmed = data.company.substring(1);
            company.href = `https://github.com/${trimmed}`;
          } else {
            company.innerText = data.company
          }
        } else {
          company.innerText = 'Not Available';
        } 
        //twitter 
        twitter.removeAttribute('href');
        if (data.twitter_username) {
          twitter.innerText = `@${data.twitter_username}`;
          twitter.href = `https://twitter.com/${data.twitter_username}`
        } else {
          twitter.innerText = 'Not Available';
        }
    });

}



//execution

updateDisplay('chriscablish');


button.addEventListener('click', () => {
  updateDisplay(input.value);
})


    






    // {
    //     "login": "chriscablish",
    //     "id": 123456789,
    //     "name": "Chris Cablish",
    //     "public_repos": 10,
    //     "followers": 500,
    //     "following": 200,
    //     "avatar_url": "https://avatars.githubusercontent.com/u/123456789",
    //     "bio": "Software Developer passionate about coding",
    //     "location": "San Francisco, CA",
    //     "company": "GitHub Inc.",
    //     "created_at": "2015-01-01T12:00:00Z",
    //     "updated_at": "2023-07-07T08:30:00Z"
    //   }



 
   

    

 