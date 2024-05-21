async function loadRestaurants() {
    // 엑셀 파일을 읽기 위해 fetch 사용
    const response = await fetch('restaurants.xlsx');
    const arrayBuffer = await response.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: 'array' });

    // 첫 번째 시트의 데이터 가져오기
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const json = XLSX.utils.sheet_to_json(worksheet);

    // 데이터를 처리하여 restaurants 객체에 저장
    const restaurants = {};
    json.forEach(row => {
        const category = row.Category.toLowerCase();
        if (!restaurants[category]) {
            restaurants[category] = [];
        }
        restaurants[category].push({ name: row.Name, link: row.Link });
    });

    return restaurants;
}

async function recommendRestaurant() {
    // 카테고리 체크박스 상태 확인
    const categories = ['korean', 'chinese', 'japanese'].filter(cat => document.getElementById(cat).checked);

    if (categories.length === 0) {
        alert('카테고리를 하나 이상 선택하세요.');
        return;
    }

    // 엑셀 파일에서 데이터를 로드하고 처리
    const restaurants = await loadRestaurants();

    // 선택된 카테고리에서 레스토랑 목록 생성
    const categoryRestaurants = categories.flatMap(category => restaurants[category] || []);

    if (categoryRestaurants.length === 0) {
        alert('선택된 카테고리에 레스토랑이 없습니다.');
        return;
    }

    // 랜덤으로 레스토랑 선택
    const randomIndex = Math.floor(Math.random() * categoryRestaurants.length);
    const selectedRestaurant = categoryRestaurants[randomIndex];

    // 결과 출력
    const resultElement = document.getElementById('restaurant-result');
    resultElement.innerHTML = `<a href="${selectedRestaurant.link}" target="_blank">${selectedRestaurant.name}</a>`;
}