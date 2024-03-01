
// JS differences from python or other shit (it's the same, essentially.)


// escape character = \

// strings work the same though.

// attribute length for length, lmao.

// arrays work the same essentially.

// arrays are mutable of course, push and pop also works like python though.


//  shift() is pop() for index 0, unshift is push for index 0

// === works like java, checks for type too.

// typeof for type func

// && for and, || for or.

//else   if, not elif

const key = "AIzaSyD2LirzJNyWI9gESrsUkTeYI23xC4oo6JM";
const youtube_id = "UC2JXibRCWso20dp4a8ET1Vw";


document.body.onload(catchdata())

function catchdata(){

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtube_id}&key=${key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data['items'][0].statistics.viewCount);
            console.log(data);
            document.getElementById("viewCount").value = data['items'][0].statistics.viewCount
    })

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtube_id}&key=${key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data['items'][0].statistics.subscriberCount);
            console.log(data);
            document.getElementById("subCount").value = data['items'][0].statistics.subscriberCount
    })




}



