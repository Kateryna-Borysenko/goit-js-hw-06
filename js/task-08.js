const form = document.querySelector(".login-form");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { login, password } = event.currentTarget.elements;
    let flag = false;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
        if (!value) {
            flag = true;
        }
    });
    if (flag) {
        return alert('Bсе поля должны быть заполнены!');
    }
    console.log(data);
    form.reset();
});