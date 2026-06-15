const searchInput = document.getElementById("searchInput");
const newsItems = document.querySelectorAll(".news-item");

searchInput.addEventListener("keyup", function() {
    let keyword = searchInput.value.toLowerCase();

    newsItems.forEach(function(item) {
        let text = item.innerText.toLowerCase();

        if(text.includes(keyword)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});