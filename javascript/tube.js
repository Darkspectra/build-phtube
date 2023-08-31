function new_page(){
    window.location.href = 'http://127.0.0.1:5500/blog.html';
}
function home(){
    window.location.href = 'http://127.0.0.1:5500/index.html';
}

// ==============================
const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json();
    const video = data.data;
    console.log(video[0].category_id);
}

loadData();



// =============================



// function submit_answer(){
//     const answer = document.getElementById('answer');
//     const display = document.getElementById('show_answer');
//     const p = document.createElement('p');
//     p.innerText = answer.value;
//     display.appendChild(p);
//     answer.value = "";   
// }

