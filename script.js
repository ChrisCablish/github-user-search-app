const searchInput = document.getElementById('input');
const searchButton = document.getElementById('button');
const userImage = document.getElementById('user__image');
const userName = document.getElementById('user__name');
const dateJoined = document.getElementById('user__joined');
const userHandle = document.getElementById('user__handle');
const userBio = document.getElementById('bio');
const repoNumber = document.getElementById('repo__number');
const followerNUmber = document.getElementById('follower__number');
const followingNumber = document.getElementById('following__number');

fetch('https://api.github.com/users/chriscablish')
    .then(response => response.json())
    .then(data => {
        //avatar
        const profileImageURL = data.avatar_url;
        const imgElement = document.createElement('img');
        imgElement.src = profileImageURL;
        imgElement.style.width = '50px';
        imgElement.style.height = '50px'; 
        userImage.appendChild(imgElement);
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