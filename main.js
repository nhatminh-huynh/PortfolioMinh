const image = document.getElementById('reload');

const notification = document.getElementById('notification');

image.addEventListener('click', () => {

notification.style.display = 'block';

});
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}
