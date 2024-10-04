// step no 1 Fetch, load and show categories on html.

// load categories
const loadCategories = () => {
    // Fetch the data.
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => loadDisplayCategories(data.categories))
        .catch((error) => console.log(error))
};

// load the videos
const loadVideos = () => {
    // Fetch the data.
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res) => res.json())
        .then((data) => displayVideos(data.videos
        ))
        .catch((error) => console.log(error))
};


// Display video function;
const displayVideos = (videos) => {

    const videoContainer = document.getElementById("videos");
    videos.forEach(video => {
        console.log(video)
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML = 
        `
            <figure class="h-[200px] relative">
                <img
                src= ${video.thumbnail}
                class="h-full w-full object-cover"
                alt="Shoes" />
                <span class="absolute right-2 bottom-2 bg-slate-900 rounded p-1 text-white">${video.others.posted_date}</span>
            </figure>
            <div class="px-0 py-2 flex gap-2">
                <div>
                    <img class="h-10 w-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
                </div>
                <div>
                    <h2 class="font-bold">${video.title}</h2>
                    <div class="inline-flex items-center gap-2">
                        <p class="text-gray-500">${video.authors[0].profile_name}</p>
                        
                        ${
                            video.authors[0].verified === true ? `<img class="h-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png" />` : ""
                        }
                    </div>
                </div>
            </div>
        `;
        videoContainer.append(card);
    });
};
// {category_id: '1001', category: 'Music'}

// display categories
const loadDisplayCategories = (categories) => {
    const categoriesContainer = document.getElementById("categories");

    categories.forEach((item) => {
         console.log(item);
        //create a button;
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        //append the button;
        categoriesContainer.append(button);
    });

};


// call function
loadCategories();
loadVideos()








