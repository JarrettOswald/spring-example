"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const inputText = document.querySelector('input[type="text"]');
    const inputEmail = document.querySelector('input[type="email"]');
    const textDesc = document.querySelector("textarea");
    const form = document.querySelector("form");
    const popup = document.querySelector(".popup");

    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });

    function post() {
        form.addEventListener('submit', (e) => {
            const formObj = {};
            formObj.username = inputText.value;
            formObj.email = inputEmail.value;
            formObj.message = textDesc.value;
            const formJson = JSON.stringify(formObj);
            console.log(formJson);
            postTwo(formJson);
        });
    }

    function closePopup() {
        popup.style.display = 'none';
    }


    document.addEventListener('keydown', (event) => {
        if (event.code === "Escape") {
            closePopup();
        }
    });

    popup.addEventListener("click", (e) => {
        if (e.target === document.querySelector("body")) {
            closePopup();
        }
    });

    function showPopup(message) {
        document.querySelector(".block-popup h3").textContent = message;
        popup.style.display = 'block';

    }

    post();

    function postTwo(formJson) {
        fetch('/newuser', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: formJson
            })
            .then(data => {
                console.log(data.status);
                if (data.status == 200) {
                    showPopup("Пользователь добавлен");
                } else {
                    showPopup("Произошла ошибка");
                }
            })
            .finally(() => form.reset());
    }

});