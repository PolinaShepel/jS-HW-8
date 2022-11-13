function out(array, parent = document.body) {

    let items = array.map((item) => `<li>${item}</li>`).join('');

    if (parent !== document.body) {
        parent = document.createElement(parent);
        document.body.append(parent);
    }

    parent.insertAdjacentHTML('afterbegin', `<ul>${items}</ul>`);
}

out(["1", "2", "3", "sea", "user", 23], 'div');
