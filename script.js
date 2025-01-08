document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar-toggler');
    var navbarNav = document.getElementById('navbarNav');

    toggler.addEventListener('click', function () {
        if (navbarNav.classList.contains('show')) {
            navbarNav
                .classList
                .remove('show');
        } else {
            navbarNav
                .classList
                .add('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const content = document.getElementById('content');

    menu.addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            loadContent(e.target.getAttribute('href'));
        }
    });

    async function loadContent(url) {
        try {
            const response = await fetch(url);
            const html = await response.text();
            content.innerHTML = html;
        } catch (error) {
            console.error('컨텐츠 로드 중 오류 발생:', error);
            content.innerHTML = '컨텐츠를 불러오는 데 실패했습니다.';
        }
    }
});

function reloadInstagramEmbeds() {
    // Instagram 임베드 스크립트 재로드
    var script = document.createElement('script');
    script.src = 'https://platform.instagram.com/en_US/embeds.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
}

// 모든 링크 요소 선택
const links = document.querySelectorAll('.nav-link');

// 각 링크에 클릭 이벤트 추가
links.forEach(link => {
    link.addEventListener('click', function (event) {
        // 기본 동작 방지 (페이지 리로드 방지)
        event.preventDefault();

        // 모든 링크에서 active 클래스 제거
        links.forEach(l => l.classList.remove('active'));

        // 클릭한 링크에 active 클래스 추가
        this.classList.add('active');
    });
});

