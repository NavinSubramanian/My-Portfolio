const mobilenav = () => {
    const headbtn = document.querySelector('.header__bars');
    const mobilenav = document.querySelector('.mobile-nav');
    const moblinks = document.querySelectorAll('.mob__control');

    let isMobileopen = false;

    headbtn.addEventListener('click',() => {
        isMobileopen = !isMobileopen;
        if (isMobileopen){
            mobilenav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }
        else{
            mobilenav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    moblinks.forEach(link => {
        link.addEventListener('click',() => {
            isMobileopen = false;
            mobilenav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });
}

export default mobilenav;
