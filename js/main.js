const show = document.querySelector('#show');
const mix = document.querySelector('#mix');

show.addEventListener('click',showPhoto);
mix.addEventListener('click',mixPhoto);

let Photo = [];
let div = document.createElement('div');
div.className = 'row justify-content-center';
div.id = 'show';
document.getElementById('container').appendChild(div);

function showPhoto() {
    for (let i = 1; i <=10; i++) {
        ;
        let img = document.createElement('img');
        img.id = 'id';
        img.src = 'img/' + [i] + '.jpg';
        img.alt = [i] + '-oji nuotrauka';
        Photo.push([img.src]);
        document.getElementById('show').appendChild(img);
    }
    let hideButton = document.getElementById('show');
    hideButton.style.visibility = 'hidden';
}

function mixPhoto(){
    let random = Photo.sort(mixPhoto);
    function mixPhoto(){
        return 0.5 - Math.random();
    }
    console.log(Photo);
    for (i = 0; i < 10; i++){
        let removeImg = document.querySelector('img');
        removeImg.remove();
        let replaceImg = document.createElement('img');
        replaceImg.id = 'id';
        replaceImg.src= random[i];
        replaceImg.alt= [i+1] + '-oji foto';
        document.getElementById('show').appendChild(replaceImg);
    }
}