function new_page() {
    window.location.href = 'http://127.0.0.1:5500/blog.html';
}
function home() {
    window.location.href = 'http://127.0.0.1:5500/index.html';
}



// ==============================
const loadData = async (id) => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    const data = await res.json();
    const video = data.data;
    if (video.length === 0) {
        displayNoVideo();
    }
    else {
        displayVideos(video);
    }
}
const loadData2 = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json();
    const video = data.data;
    if (video.length === 0) {
        displayNoVideo();
    }
    else {
        displayVideos(video);
    }
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('video-container');
    const noVideoContainer = document.getElementById('no_display');
    noVideoContainer.textContent = '';

    videoContainer.textContent = '';

    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList = `card bg-base-100 p-4 shadow-xl`;
        if (video.authors[0].verified) {
            videoCard.innerHTML = `
            <figure><img src="${video.thumbnail}" alt="Shoes" /></figure>
                        <div class="card-body">
                            <div class="flex justify-start items-center">
                                <div class="avatar">
                                    <div class="w-10 rounded-full">
                                        <img class="" src="${video.authors[0].profile_picture}"/>
                                    </div>
                                </div>
                                <p class="ml-3 font-bold">${video.title}</p>
                            </div>
                            <div class="flex justify-start">
                                <p class="w-0">${video.authors[0].profile_name}</p>
                                <p><img src="images/fi_10629607.svg"></p>
                            </div>
                            <p>${video.others.views} views</p>
                        </div>
            `;
            videoContainer.appendChild(videoCard);
        }
        else {
            videoCard.innerHTML = `
            <figure><img src="${video.thumbnail}" alt="Shoes" /></figure>
                        <div class="card-body">
                            <div class="flex justify-start items-center">
                                <div class="avatar">
                                    <div class="w-10 rounded-full">
                                        <img class="" src="${video.authors[0].profile_picture}"/>
                                    </div>
                                </div>
                                <p class="ml-3 font-bold">${video.title}</p>
                            </div>
                            <div class="flex justify-start">
                                <p class="w-0">${video.authors[0].profile_name}</p>
                            </div>
                            <p>${video.others.views} views</p>
                        </div>
            `;
            videoContainer.appendChild(videoCard);
        }
    });
}

const displayNoVideo = () => {
    const noVideoContainer = document.getElementById('no_display');
    const videoContainer = document.getElementById('video-container');
    videoContainer.textContent = '';
    noVideoContainer.textContent = '';

    const noVideoCard = document.createElement('div');
    // videoCard.classList = ``;
    noVideoCard.innerHTML = `
    <div class="mt-[10%]">
        <img class="ml-[46.5%]" src="images/Icon.png">
        <p class="mt-[2%] text-2xl font-bold text-center">Oops!! Sorry, There is no <br>content here</p>
    </div>
    `;
    noVideoContainer.appendChild(noVideoCard);

}

// const short_des = async () => {
//     const res = await fetch("https://openapi.programming-hero.com/api/videos/category/1000")
//     const data = await res.json();
//     const videos = data.data;
//     let newArray = [];

    // console.log(parseFloat(video[0].others.views.slice(0, -1)))
    // let temp = parseFloat(videos[0].others.views.slice(0, -1));
    // for (let i = 0; i < videos.length; i++) {
    //     for (let j = 0; j < videos.length; j++) {
    //         if ((parseFloat(videos[j].others.views.slice(0, -1))) < (parseFloat(videos[i].others.views.slice(0, -1)))) {
    //             var newvar = videos[j];
    //         }
    //     }
    //     newArray.push(newvar);
    // }
    // console.log(newArray);

    // videos.forEach(video => {
    //     if ((parseFloat(video.others.views.slice(0, -1))) < temp ){
    //         newArray.push(video)
    //         temp = (parseFloat(video.others.views.slice(0, -1)));
    //     }
    // });
    // console.log(newArray);
// }


const all_video = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await res.json();
    const category = data.data;
    loadData2(category[0].category_id);
}
const music = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await res.json();
    const category = data.data;
    loadData2(category[1].category_id);
}
const comedy = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await res.json();
    const category = data.data;
    loadData2(category[2].category_id);
}
const drawing = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await res.json();
    const category = data.data;
    loadData2(category[3].category_id);
}


loadData();

// =============================




