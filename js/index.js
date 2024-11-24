document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".grid-container");
    console.log("Container:", container);
    const totalBlocks = parseInt(container.getAttribute("data-blocks")); // 블록 총 개수
    const rows = parseInt(container.getAttribute("data-rows")) || 1; // 행 수 (기본값 1)

    // 페이지 전환 URL 설정
    const pages = ["index.html", "page2.html", "page3.html"]; // 페이지 리스트
    const currentUrl = window.location.href;
    const currentPageIndex = pages.findIndex((page) => currentUrl.includes(page));

    // 그리드 설정
    const columns = Math.ceil(totalBlocks / rows); // 열 수 계산
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    // 블록 생성
    for (let i = 0; i < totalBlocks; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        container.appendChild(block);
    }

    // 마우스 움직임에 따라 그라데이션 중앙 색상 변경
    container.addEventListener("mousemove", (event) => {
        const containerHeight = container.offsetHeight;
        const mouseY = event.clientY - container.getBoundingClientRect().top;
        const positionY = (mouseY / containerHeight) * 100; // 마우스 위치를 백분율로 변환

        // 콘솔에서 값 확인
        console.log("Mouse Y:", mouseY, "Position Y (%):", positionY);

        // 모든 블록의 background-position 변경
        document.querySelectorAll(".block").forEach((block) => {
            block.style.backgroundPosition = `50% ${positionY}%`;
        });
    });

    // 클릭 시 페이지 전환
    container.addEventListener("click", () => {
        const nextPageIndex = (currentPageIndex + 1) % pages.length; // 다음 페이지 인덱스 계산
        window.location.href = pages[nextPageIndex]; // 다음 페이지로 이동
    });
});
