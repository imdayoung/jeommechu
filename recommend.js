const restaurants = {
    "korean": [
        { name: "카레당", link: "https://naver.me/5MUCn2IF" },
        { name: "신사골", link: "https://naver.me/GG8oZ1ky" },
        { name: "동궁찜닭", link: "https://naver.me/GMRm3AWC" },
        { name: "파머스포케", link: "https://naver.me/xQNpYbI7" },
        { name: "본래순대", link: "https://naver.me/I5FIMkL1" },
        { name: "고향산천 원조 숯불닭갈비", link: "https://naver.me/GrSqSnhJ" },
        { name: "춘천골닭갈비", link: "https://naver.me/FqSzWF4p" },
        { name: "학생회관", link: "https://naver.me/F6mxi8mf" },
        { name: "계절밥상", link: "https://naver.me/F3oYFgZJ" },
        { name: "진관키친", link: "https://naver.me/FJ6F5RGL" },
        { name: "철순이네김치찌개", link: "https://naver.me/x8li1y6k" },
        { name: "우동연가", link: "https://naver.me/IG6pCido" },
        { name: "싸다김밥", link: "https://naver.me/F5baEy8F" }
    ],
    "chinese": [
        { name: "세종원", link: "https://naver.me/xXr7Z1mq" },
        { name: "미식반점", link: "https://naver.me/GGhUhR4E" },
        { name: "빠오즈푸", link: "https://naver.me/5MUCn2IF" },
        { name: "시홍쓰", link: "https://naver.me/x9JcNGds" }
    ],
    "japanese": [
        { name: "행복한 그릇", link: "https://naver.me/54VLPVte" },
        { name: "스시붐", link: "https://naver.me/GDc5idSq" },
        { name: "백쉐프초밥가게", link: "https://naver.me/x8lEhcay" },
        { name: "카토카츠", link: "https://naver.me/GjGp3jga" }
    ],
    
};


// 맛집 추천 기능
function recommendRestaurant() {
    // 선택된 카테고리들을 담을 배열을 초기화합니다.
    const selectedCategories = Object.keys(restaurants).filter(category => document.getElementById(category).checked);

    // 선택된 카테고리가 없을 경우 메시지를 표시하고 함수를 종료합니다.
    if (selectedCategories.length === 0) {
        document.getElementById('restaurant-result').textContent = '적어도 한 가지 카테고리를 선택하세요.';
        return;
    }

    // 선택된 카테고리 중에서 무작위로 한 개를 선택합니다.
    const randomCategory = selectedCategories[Math.floor(Math.random() * selectedCategories.length)];
    // 선택된 카테고리에 속한 음식 가게들을 가져옵니다.
    const categoryRestaurants = restaurants[randomCategory];



    // 선택된 카테고리에서 무작위로 한 곳의 정보를 가져와서 결과를 출력합니다.
    const randomRestaurant = categoryRestaurants[Math.floor(Math.random() * categoryRestaurants.length)];
    document.getElementById('restaurant-result').innerHTML = `<a href="${randomRestaurant.link}" target="_blank">${randomRestaurant.name}</a>`;
}