const Images = ["./Images/Image1.jpg",
    "./Images/Image2.jpg",
    "./Images/Image3.jpg",
    "./Images/Image4.jpg"];

let i = 0;
    next.onclick = function () {
        i++;
    if(i >= Images.length) {
        i = 0;
    }
    picture.src =  Images[i];
    }

    prev.onclick = function () {
        i--;
        if(i < 0 ) {
            i = Images.length -1 ;
        }
        picture.src = Images[i];
    }