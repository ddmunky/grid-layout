export default function animate() {
    const elements = document.querySelectorAll('.element');
    const container = document.querySelector('.container');

    // functions
    const effect = function (elem, action, type) {
        if (action === 'add') {
            elem.classList.add(type);
        } else if (action === 'remove') {
            elem.classList.remove(type);
        }
    };

    const appearingChild = function (elem, action) {
        if (action === 'add') {
            elem.firstElementChild.classList.remove('disappearing');
            elem.firstElementChild.classList.add('appearing');
        } else if (action === 'remove') {
            elem.firstElementChild.classList.add('disappearing');
            elem.firstElementChild.classList.remove('appearing');
        }
    };

    const active = function (elem, action) {
        if (action === 'add') {
            elem.parentElement.classList.add('active');
        } else if (action === 'remove') {
            setTimeout(() => {
                elem.parentElement.classList.remove('active');
            }, 550);
        }
    };

    const hidding = function (elem) {
        for (let i = 0; i < elements.length; i++) {
            if (elem !== elements[i]) {
                elements[i].classList.toggle('hide');
            }
        }
    };

    const overlay = function (elem) {
        for (let i = 0; i < elements.length; i++) {
            if (elem !== elements[i]) {
                elements[i].lastElementChild.classList.toggle('show');
            }
        }
    };

    // events listeners
    elements.forEach((element) =>
        element.addEventListener('mouseover', function () {
            effect(this, 'add', 'hovering');
            overlay(this);
            if (!this.parentElement.classList.contains('active')) {
                appearingChild(this, 'add');
            }
        })
    );

    elements.forEach((element) =>
        element.addEventListener('mouseout', function () {
            if (!this.parentElement.classList.contains('active')) {
                effect(this, 'remove', 'hovering');
            }
            appearingChild(this, 'remove');
            overlay(this);
        })
    );

    elements.forEach((element) =>
        element.addEventListener('click', function () {
            if (!this.parentElement.classList.contains('active')) {
                effect(this, 'add', 'expanding');
                active(this, 'add');
                hidding(this);
                appearingChild(this, 'remove');
            } else {
                active(this, 'remove');
                effect(this, 'add', 'reducing');
                effect(this, 'remove', 'expanding');
                effect(this, 'remove', 'hovering');
                hidding(this);
            }
        })
    );
}
