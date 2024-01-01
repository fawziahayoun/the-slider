var imagesArray = Array.from(document.querySelectorAll(".container img"));
slideNumber = document.querySelector(".salider-number");

var slaiderCount = imagesArray.length;
var currentSlide = 1;

var nextButon = document.getElementById('next');
var prevetButon = document.getElementById('prev');

nextButon.onclick= nextSlide;
prevetButon.onclick= prevSlide;




var pagenationElement = document.createElement('ul');
pagenationElement.setAttribute('id', 'pagenation-ul');

for(var i= 1; i <= slaiderCount; i++){
    var pagenationEtem = document.createElement('li');
    pagenationEtem.setAttribute('data-index', i);
    pagenationEtem.appendChild(document.createTextNode(i));

pagenationElement.appendChild(pagenationEtem);
};


 document.getElementById('indecator').appendChild(pagenationElement);
 
 
 var pagenationSlider =document.getElementById("pagenation-ul");
 var pagenationboullets = Array.from(document.querySelectorAll("#pagenation-ul li"));
  
 for(var i=0; i < pagenationboullets.length; i++ ){
    pagenationboullets[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute('data-index'));
        avtiveCountrol();

    }
  }


 avtiveCountrol();


 function nextSlide(){
    if(nextButon.classList.contains('desabled')){
        return false;
    }else{
        currentSlide ++;
        avtiveCountrol();


    }

};

function prevSlide(){
    if(prevetButon.classList.contains('desabled')){
        return false
    }else{
        currentSlide --;
        avtiveCountrol();


    }
};


console.log(pagenationboullets);



 function avtiveCountrol(){

    slideNumber.textContent= '#slide' + (currentSlide) + "of" + (slaiderCount);
    removeAllActive();

    imagesArray[currentSlide -1 ].classList.add('active');

    pagenationSlider.children[currentSlide -1].classList.add('active');


    if(currentSlide == 1){
        prevetButon.classList.add('desabled');
    }else{
        prevetButon.classList.remove('desabled');
    };
    if(currentSlide == slaiderCount){
        nextButon.classList.add('desabled');
    }else{
        nextButon.classList.remove('desabled');
    }   
 };



 function removeAllActive(){
    imagesArray.forEach(function(img){
        img.classList.remove('active');
        

    });

    pagenationboullets.forEach(function(li){
        li.classList.remove('active');

    });

 };