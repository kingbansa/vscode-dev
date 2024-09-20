// 버튼과 컨텐츠 영역 선택
const addButton = document.getElementById('add-btn');
const contentDiv = document.getElementById('content');

// 버튼 클릭 이벤트 추가
addButton.addEventListener('click', () => {
    // 새로운 p 요소 생성
    const newParagraph = document.createElement('p');
    
    // 새로운 p 요소에 텍스트 추가
    newParagraph.textContent = 'This is a dynamically added paragraph!';

    // 생성된 p 요소를 contentDiv에 추가
    contentDiv.appendChild(newParagraph);
});