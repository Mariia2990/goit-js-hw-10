import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formSnackbar = document.querySelector(".form");
// const radioCheck = document.querySelector([type = "radio"]);
// const btnSnackbar = document.querySelector([type = "submit"]);

formSnackbar.addEventListener('submit', function (event) {
    event.preventDefault();

    const delay = parseInt(event.target.delay.value);
    const state = event.target.state.value;

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (state === 'fulfilled') {
        resolve(delay);
        } else {
        reject(delay);
        }
    }, delay);
    });
}

createPromise(delay, state)
    .then((delay) => {
    iziToast.success({
        title: "OK",
        message: "✅ Fulfilled promise in ${delay}ms",
        position: "topRight",
        messageColor: "white",
        titleColor: "white",
});
    })
    .catch((delay) => {
    iziToast.error({
        title: "Error",
        message: "❌ Rejected promise in ${delay}ms",
        position: "topRight",
        backgroundColor: "red",
        messageColor: "white",
        titleColor: "white",
    });
    });
});