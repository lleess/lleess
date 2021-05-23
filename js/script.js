const burgerBtn = document.querySelector('.burger-btn-wrapper');
const burgerBtnItem = document.querySelectorAll('.burger-btn');
const menuBurger = document.querySelector('.menu-burger');

burgerBtn.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    burgerBtn.classList.toggle('active');
});


// TAB
const tabParent = document.querySelector('.tab');
const tabsBtn = document.querySelectorAll('.tab-button');
const tabsContent = document.querySelectorAll('.features-content');

function hideTab() {
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('active');
    });
    tabsBtn.forEach(item => {
        item.classList.remove('active');
    });
}

function showTab(i = 0) {
    tabsContent[i].classList.add('active');
    tabsContent[i].classList.remove('hide');
    tabsBtn[i].classList.add('active');
}

hideTab();
showTab();

tabParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('tab-button')) {
        tabsBtn.forEach((item, i) => {
            if (target == item) {
                console.log('hello');
                hideTab();
                showTab(i);
            }
        });
    }
});