let sost = 1;

function sort() {
    if (sost == 1) {
        document.getElementById('catalog__pc').classList.remove('hide');
        document.getElementById('catalog__laptop').classList.add('hide');
        document.getElementById('catalog__monitor').classList.add('hide');
        document.getElementById('catalog__pc').classList.add('catalog__pc');
        document.getElementById('catalog__laptop').classList.remove('catalog__laptop');
        document.getElementById('catalog__monitor').classList.remove('catalog__monitor');
        document.getElementById('pc').classList.add('sort__button__active');
        document.getElementById('laptop').classList.add('sort__button');
        document.getElementById('monitor').classList.add('sort__button');
        document.getElementById('laptop').classList.remove('sort__button__active');
        document.getElementById('monitor').classList.remove('sort__button__active');
    }

    if (sost == 2) {
        document.getElementById('catalog__pc').classList.add('hide');
        document.getElementById('catalog__laptop').classList.remove('hide');
        document.getElementById('catalog__monitor').classList.add('hide');
        document.getElementById('catalog__pc').classList.remove('catalog__pc');
        document.getElementById('catalog__laptop').classList.add('catalog__laptop');
        document.getElementById('catalog__monitor').classList.remove('catalog__monitor');
        document.getElementById('laptop').classList.add('sort__button__active');
        document.getElementById('pc').classList.add('sort__button');
        document.getElementById('monitor').classList.add('sort__button');
        document.getElementById('pc').classList.remove('sort__button__active');
        document.getElementById('monitor').classList.remove('sort__button__active');
    }
    if (sost == 3) {
        document.getElementById('catalog__pc').classList.add('hide');
        document.getElementById('catalog__laptop').classList.add('hide');
        document.getElementById('catalog__monitor').classList.remove('hide');
        document.getElementById('catalog__pc').classList.remove('catalog__pc');
        document.getElementById('catalog__laptop').classList.remove('catalog__laptop');
        document.getElementById('catalog__monitor').classList.add('catalog__monitor');
        document.getElementById('monitor').classList.add('sort__button__active');
        document.getElementById('pc').classList.add('sort__button');
        document.getElementById('laptop').classList.add('sort__button');
        document.getElementById('pc').classList.remove('sort__button__active');
        document.getElementById('laptop').classList.remove('sort__button__active');
    }
}

document.getElementById('laptop').onclick = function laptop_move() {
    sost = 2;
    sort();
}

document.getElementById('pc').onclick = function pc_move() {
    sost = 1;
    sort();
}

document.getElementById('monitor').onclick = function monitor_move() {
    sost = 3;
    sort();
}
