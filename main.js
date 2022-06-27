let container=document.querySelector(".container");
let btn=document.getElementById("spin");
let number=Math.ceil(Math.random()*1000);

function rot()
{
    alert(" Thankyou for pressing spin button");
    container.style.transform="rotate("+ number + "deg)";
    number+=Math.ceil(Math.random()*1000);
}
