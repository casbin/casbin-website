/*
* https://github.com/facebook/react-native-website/blob/4209961250f25598f4898853b8f5743325a8aa51/website/static/js/announcement.js
*/

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.fixedHeaderContainer');
    if (container) {
        const announcementBar = document.createElement('div');
        announcementBar.className = 'announcementBar';
        announcementBar.innerHTML =
            `<div class="announcementBar-inner">
                🎉
                <a class="bannerText" href="https://casbin.org">
                    Visit the new Casbin docs at: casbin.org now!
                </a>
                🥳
            </div>`;
        container.insertBefore(announcementBar, container.firstChild);
    }
});

const scrollStartBoundary = 160;

window.onscroll = () => {
    // Simple check for mobile devices
    if (typeof window.orientation !== 'undefined') {
        const fixedHeaderContainer = document.querySelector(
            '.fixedHeaderContainer'
        );
        const navPusher = document.querySelector('.navPusher');

        if (
            document.body.scrollTop > scrollStartBoundary ||
            document.documentElement.scrollTop > scrollStartBoundary
        ) {
            fixedHeaderContainer.style.top = '-60px';
            navPusher.style.top = '-60px';
            navPusher.style.marginBottom = '-60px';
        } else {
            fixedHeaderContainer.style.top = '0';
            navPusher.style.top = '0';
            navPusher.style.marginBottom = '0';
        }
    }
};
