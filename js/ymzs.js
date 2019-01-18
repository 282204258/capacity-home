setTimeout(()=>{
    let Holi=document.getElementsByClassName('Hbox')[0].getElementsByTagName('li');
    //获取地址的id
    let CoId=location.search.substring(location.search.indexOf('?')+1,);
    for(let i=1;i<Holi.length;i++){
        if(Holi[i].getAttribute('data-id')==CoId){
            for(let j=0;j<Holi.length;j++){
                Holi[j].className="";
            }
            Holi[i].className="Hli";
        }
    }
},0);
window.addEventListener('load', function () {
    var carousels = document.querySelectorAll('.carousel');

    for (var i = 0; i < carousels.length; i++) {
        carousel(carousels[i]);
    }
});

function carousel(root) {
    var figure = root.querySelector('figure'),
        nav = root.querySelector('nav'),
        images = figure.children,
        n = images.length,
        gap = root.dataset.gap || 0,
        bfc = 'bfc' in root.dataset,
        theta = 2 * Math.PI / n,
        currImage = 0;

    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener('resize', function () {
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });

    setupNavigation();

    function setupCarousel(n, s) {
        var apothem = s / (2 * Math.tan(Math.PI / n));

        figure.style.transformOrigin = '50% 50% ' + -apothem + 'px';

        for (var i = 0; i < n; i++) {
            images[i].style.padding = gap + 'px';
        }for (i = 1; i < n; i++) {
            images[i].style.transformOrigin = '50% 50% ' + -apothem + 'px';
            images[i].style.transform = 'rotateY(' + i * theta + 'rad)';
        }
        if (bfc) for (i = 0; i < n; i++) {
            images[i].style.backfaceVisibility = 'hidden';
        }rotateCarousel(currImage);
    }

    function setupNavigation() {
        nav.addEventListener('click', onClick, true);

        function onClick(e) {
            e.stopPropagation();

            var t = e.target;
            if (t.tagName.toUpperCase() != 'BUTTON') return;

            if (t.classList.contains('next')) {
                currImage++;
            } else {
                currImage--;
            }

            rotateCarousel(currImage);
        }
    }

    function rotateCarousel(imageIndex) {
        figure.style.transform = 'rotateY(' + imageIndex * -theta + 'rad)';
    }
}