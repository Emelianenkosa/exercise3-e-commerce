

//open/close aside nav menu
// let navTitle = document.querySelectorAll('.nav-title-item');
// let navSubtitleList = document.querySelectorAll('.nav-subtitle-list');

// for (let i=0; i<navTitle.length; i++) {
//     navTitle[i].addEventListener('click', () => {
//         navTitle[i].classList.toggle('nav-title-active');
//         navSubtitleList[i].classList.toggle('nav-subtitle-active');
//     });
// }
const navTitleList = document.querySelector('.nav-title-list');

navTitleList.addEventListener('click', navTitleListOnClick);

function navTitleListOnClick(event) {
    const node = event.target;
    const element = node.querySelector('.nav-subtitle-list');
    if (!element) {
        return
    } else {
        element.classList.toggle('nav-subtitle-active');
        node.classList.toggle('nav-title-active');
    };

};
    

//open/close sort window
let sortWindow = document.querySelector('.window-up-sort');
let openSort = document.querySelector('.catalog-sort-value');
let closeSort = document.querySelector('.window-up-close');
let sortArrow = document.querySelector('.sort-arrow');

openSort.addEventListener('click', () => {
    sortWindow.classList.add('window-up-sort-active');
    sortArrow.classList.add('active-arrow-up');
});
closeSort.addEventListener('click', () =>  {
    sortWindow.classList.remove('window-up-sort-active');
    sortArrow.classList.remove('active-arrow-up');
});


// // open filter window
// let filterBtnOpen = document.querySelectorAll('.catalog-filter-btn');
// let filterBtnSet = document.querySelectorAll('.filter-btn-set');
// let filterWindow = document.querySelectorAll('.filter-window-up');
// let filtrArrow = document.querySelectorAll('.filter-arrow');
// for (let i=0; i<filterBtnOpen.length; i++) {
//     filterBtnOpen[i].addEventListener('click', () => {
//         for (let j=0; j<filterSizeItem.length; j++) {           //сбрасывает красный цвет при открытии
//                 filterSizeItem[j].classList.remove('size-red');
//             };
//         filterWindow[i].classList.toggle('filter-window-active');
//         filtrArrow[i].classList.toggle('active-arrow-up');
//     });
// }    
// // close filter window    
// for (let i=0; i<filterBtnSet.length; i++ ) {
//     filterBtnSet[i].addEventListener('click', () => {
//         filterWindow[i].classList.remove('filter-window-active');
//         filtrArrow[i].classList.toggle('active-arrow-up');
//     });
// };
    

// open filter window
const filterList = document.querySelector('.catalog-filter-list');

filterList.addEventListener('click', filterListOnClick);

function filterListOnClick(event) {
    const note = event.target;
    const noteButton = note.closest('button');
    const filterItem = note.closest('.catalog-filter-item');
    const buttonSet = filterItem.querySelector('.filter-btn-set');
    const filterArrow = filterItem.querySelector('.filter-arrow');
    const filterWindow = filterItem.querySelector('.filter-window-up');
    if (noteButton && buttonSet) {
        filterWindow.classList.toggle('filter-window-active');
        filterArrow.classList.toggle('active-arrow-up');
    };
};

//close filter window if click document
const filterItem = document.querySelectorAll('.catalog-filter-item');
document.addEventListener('click', documentOnClick);
function documentOnClick(event) {
    filterItem.forEach(function(item) {
        const withinBoundaries = event.composedPath().includes(item);
        const filterWindowUp = item.querySelector('.filter-window-up');
        if ( ! withinBoundaries ) {
                filterWindowUp.classList.remove('filter-window-active');
                console.log(filterWindowUp); 
        };   
    });  
};   

// const filterItem = document.querySelector('.catalog-filter-item');
// const filterWindowUp = document.querySelector('.filter-window-up');
// document.addEventListener('click', mainOnClick);
// function mainOnClick(event) {
//     const withinBoundaries = event.composedPath().includes(filterItem);
//     if ( ! withinBoundaries ) {  
//         filterWindowUp.classList.remove('filter-window-active');
//     };  
// };   


// // in filter window
// let filterSizeItem = document.querySelectorAll('.filter-size-item');
// for (let i=0; i<filterSizeItem.length; i++) {
//     filterSizeItem[i].addEventListener('click', () => {
//         filterSizeItem[i].classList.toggle('size-red');
//     });
// }

// in filter window
const filterBtnList = document.querySelector('.filter-btn-list');
filterList.addEventListener('click', filterBtnListOnClick);
function filterBtnListOnClick(event) {
    const note = event.target;
    const filterBtn = note.closest('.filter-btn');
    if (filterBtn) {
        note.classList.toggle('size-red');
    };
};
//filterWindow.addEventListener('click', );

// document.addEventListener( 'click', (e) => {
// 	const withinBoundaries = e.composedPath().includes(filterWindow);
// 	if ( ! withinBoundaries ) {
//         console.log('click window');
// 		filterWindow.classList.toggle('filter-window-active');
// 	}
// })


// open/close sort mobile-window
let sortMobBtnOpen = document.querySelector('.mobile-sort-item');
let sortMobBtnClose = document.querySelector('.mobile-sort-close');
let sortWindowMobile = document.querySelector('.mobile-sort-window');
let sotrMobBckgrnd = document.querySelector('.mobile-sort-filter');
sortMobBtnOpen.addEventListener('click', () => {
    sortWindowMobile.classList.add('window-up-sort-active');
    sotrMobBckgrnd.classList.add('mobile-sort-filter-bkgrnd');
    document.body.style.overflow = "hidden";
});
sortMobBtnClose.addEventListener('click', () => {
    sortWindowMobile.classList.remove('window-up-sort-active');
    sotrMobBckgrnd.classList.remove('mobile-sort-filter-bkgrnd');
    document.body.style.overflow = "auto";
});


// open/close filter mobile-window
let filterMobBtOpen = document.querySelector('.mobile-filter-btn');
let filterMobBtnClose = document.querySelector('.mobile-filter-close');
let filterWindowMobile = document.querySelector('.mobile-filtr-window');
filterMobBtOpen.addEventListener('click', () => {
    filterWindowMobile.classList.add('window-up-sort-active');
    sotrMobBckgrnd.classList.add('mobile-sort-filter-bkgrnd');
    document.body.style.overflow = "hidden";
});
filterMobBtnClose.addEventListener('click', () => {
    filterWindowMobile.classList.remove('window-up-sort-active');
    sotrMobBckgrnd.classList.remove('mobile-sort-filter-bkgrnd');
    document.body.style.overflow = "auto";
});

// click gender aside
let btnFemaleAside = document.querySelector('.aside-gender-female');
let btnMaleAside = document.querySelector('.aside-gender-male');
let femaleAsideText = document.querySelector('.aside-female-text');
let maleAsideText = document.querySelector('.aside-male-text');
btnFemaleAside.addEventListener('click', () => {
    femaleAsideText.classList.add('aside-gender-active');
    maleAsideText.classList.remove('aside-gender-active');
});
btnMaleAside.addEventListener('click', () => {
    maleAsideText.classList.add('aside-gender-active');
    femaleAsideText.classList.remove('aside-gender-active');
});

// click gender mobile
let btnFemaleMobile = document.querySelector('.mobile-gender-female');
let btnMaleMobile = document.querySelector('.mobile-gender-male');
let femaleMobileText = document.querySelector('.mobile-female-text');
let maleMobileText = document.querySelector('.mobile-male-text');
btnFemaleMobile.addEventListener('click', () => {
    femaleMobileText.classList.add('aside-gender-active');
    maleMobileText.classList.remove('aside-gender-active');
});
btnMaleMobile.addEventListener('click', () => {
    maleMobileText.classList.add('aside-gender-active');
    femaleMobileText.classList.remove('aside-gender-active');
});