export default function throwImage(source, target, url, changeOpacity, onComplete) {
    return new Promise((resolve) => {
        let img = new Image(source.clientWidth, source.clientHeight);
        img.classList.add('transitioning-img');

        let thumbRect = source.getBoundingClientRect();
        img.style.top = source.clientTop + window.pageYOffset + thumbRect.top + 'px';
        img.style.left = source.clientLeft + window.pageXOffset + thumbRect.left + 'px';
        let angle = Math.round(Math.random() * 60 + 100) * Math.sign(Math.random() - 0.5);
        img.style.transform = `rotate(${angle}deg)`;
        img.style.borderRadius = '50%';
        if (changeOpacity) {
            img.style.opacity = 1;
        }
        img.src = url;

        document.body.appendChild(img);

        img.style.width = target.clientWidth - target.clientLeft + 'px';
        img.style.height = target.clientHeight - target.clientTop + 'px';
        img.style.transform = '';
        img.style.borderRadius = '15px';

        let largeImgRect = target.getBoundingClientRect();
        img.style.top = target.clientTop + window.pageYOffset + largeImgRect.top + 'px';
        img.style.left = target.clientLeft + window.pageXOffset + largeImgRect.left + 'px';
        if (changeOpacity) {
            img.style.opacity = 0;
        }

        img.addEventListener('transitionend', () => {
            setTimeout(() => {
                img.remove();
                resolve();
            }, 50);
        });
    });

}