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
    // console.log(video[0].thumbnail);
    if (video.length===0){
        displayNoVideo();
    }
    else{
        displayVideos(video);
    }
}
const loadData2 = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json();
    const video = data.data;
    if (video.length===0){
        displayNoVideo();
    }
    else{
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
        if (video.authors[0].verified){
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
        else{
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
        <p class="ml-10 "><img src="images/Icon.png"></p>
    `;
    noVideoContainer.appendChild(noVideoCard);

}


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




