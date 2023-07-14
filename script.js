
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
const errorMessage = document.getElementById('error');

//functions

const createImageElement = (src, width, height) => {
  const imgElement = document.createElement('img');
  imgElement.src = src;
  imgElement.style.width = width;
  imgElement.style.height = height;
  return imgElement;
}

const updateDisplay = (searchedUser) => {
  error.style.display = 'none';
  fetch(`https://api.github.com/users/${searchedUser}`)
  .then(response => {
    if (response.status === 404) {
      console.log('error');
      error.style.display = 'inline';
      throw new Error('User not found son');
      
    }
    return response.json()
  }
    )
  .then(data => {
    //avatar
    const profileImageURL = data.avatar_url;
    userImageSmall.innerHTML = ''
    userImageSmall.appendChild(createImageElement(profileImageURL, '50px', '50px'));
    userImageLarge.innerHTML = '';
    userImageLarge.appendChild(createImageElement(profileImageURL, '50px', '50px'));

        //username
        userName.innerText = data.name ? data.name : data.login

        //user handle
        userHandle.innerText = `@${data.login}`;

        //date joined
        const dateObject = new Date(data.created_at);
          //date
        const date = dateObject.getDate();
          //month
        const monthNumber = dateObject.getMonth();
        const monthsOfYear = {
          0: "Jan",
          1: "Feb",
          2: "Mar",
          3: "Apr",
          4: "May",
          5: "Jun",
          6: "Jul",
          7: "Aug",
          8: "Sep",
          9: "Oct",
          10: "Nov",
          11: "Dec"
        };
        const month = monthsOfYear[monthNumber];
          //year
        const year = dateObject.getFullYear();
          //display
        dateJoined.innerText = `Joined ${date} ${month} ${year}`;

        //bio
        if (data.bio) {
          userBio.innerText = data.bio
          userBio.classList.remove('grayed');
        } else {
          userBio.innerText = 'This profile has no bio.'
          userBio.classList.add('grayed');
        }
        // userBio.innerText = data.bio;
        //repos
        repoNumber.innerText = data.public_repos;
        //followers
        followerNUmber.innerText = data.followers;
        //following
        followingNumber.innerText = data.following;
        
        //location
        if (data.location) {
          userLocation.innerText = data.location
          userLocation.classList.remove('grayed');
        } else {
          userLocation.innerText = 'Not Available';
          userLocation.classList.add('grayed');
        }
        //website
        if (data.blog) {
          website.classList.remove('grayed');
          website.innerText = data.blog
          website.href = data.blog
        } else {
          website.classList.add('grayed');
          website.innerText = 'Not Available';
          website.removeAttribute('href');
        }

        // company 
        company.classList.remove('grayed');
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
          company.classList.add('grayed');
        } 

        //twitter 
        twitter.classList.remove('grayed');
        twitter.removeAttribute('href');
        if (data.twitter_username) {
          twitter.innerText = `@${data.twitter_username}`;
          twitter.href = `https://twitter.com/${data.twitter_username}`
        } else {
          twitter.classList.add('grayed');
          twitter.innerText = 'Not Available';
        }
    });

}

//execution
updateDisplay('octocat');

button.addEventListener('click', () => {
  updateDisplay(input.value);
});




 
   

    

 


