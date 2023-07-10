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

fetch('https://api.github.com/users/chriscablish')
  .then(response => response.json())
  .then(data => {
    //avatar
    const profileImageURL = data.avatar_url;
    
    // Create the first img element for userImageSmall
    const imgElementSmall = document.createElement('img');
    imgElementSmall.src = profileImageURL;
    imgElementSmall.style.width = '50px';
    imgElementSmall.style.height = '50px'; 
    userImageSmall.appendChild(imgElementSmall);
    
    // Create the second img element for userImageLarge
    const imgElementLarge = document.createElement('img');
    imgElementLarge.src = profileImageURL;
    imgElementLarge.style.width = '50px';
    imgElementLarge.style.height = '50px'; 
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
        userLocation.innerText = data.location;
        //website
        website.innerText = data.blog.replace(/^(https?:\/\/)?(www\.)?/, '');
        website.href = data.blog;
        //company 
        company.innerText = data.company;
        //twitter
        twitter.innerText = `@${data.twitter_username}`;
        console.log(data.twitter_username);


    });




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