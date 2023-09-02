function new_page() {
    window.location.href = 'https://eclectic-toffee-2dbb66.netlify.app/';
}



// ==============================
const loadData = async () => {
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




const short_func = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json();
    const videos = data.data;
    videos.sort((a, b) => parseFloat(b.others.views.slice(0, -1)) - parseFloat(a.others.views.slice(0, -1)));
    displayVideos(videos)
}

var temp = "";

const short_des = (flag) => {
    if (temp == "1001" && flag===true){
        short_func("1001")
    }
    else if(temp == "1000" && flag===true){
        short_func("1000")
    }
    else if(temp == "1003" && flag===true){
        short_func("1003")
    }


}

const all_video = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await res.json();
    const category = data.data;
    loadData2(category[0].category_id);
    temp = category[0].category_id

}
const music = async (flag) => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await res.json();
    const category = data.data;
    loadData2(category[1].category_id);
    temp = category[1].category_id;


}
const comedy = async (flag=false) => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await res.json();
    const category = data.data;
    loadData2(category[2].category_id);
    temp = category[2].category_id;

}
const drawing = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await res.json();
    const category = data.data;
    loadData2(category[3].category_id);
}


loadData();

// =============================




