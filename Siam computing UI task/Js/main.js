var inputelem = document.getElementsByClassName('custom');
var arrinputelem = [...inputelem];
const yournamestyle = document.getElementById("yrname");
const designationstyle = document.getElementById("designation");
const contactbtnstyle = document.getElementById("contactbtn");
const bottomnav = document.getElementsByClassName("bottom-nav");
var colorarr = [];
let value;

$(inputelem).on('move.spectrum', muty);

function muty(x) {
    console.log(x);
    value = $(yournamestyle).spectrum('get');
    // arrinputelem[x.currentTarget.attributes[1].nodeValue]
    console.log(value);

    
}
var colorinit = () =>
{
    colorarr[0] = getComputedStyle(bottomnav[0]).backgroundColor;
    colorarr[1] = getComputedStyle(bottomnav[0]).color;
    colorarr[2] = getComputedStyle(yrname).color;
    colorarr[3] = getComputedStyle(designation).color;
    colorarr[4] = getComputedStyle(contactbtn).backgroundColor;
    colorarr[5] = getComputedStyle(contactbtn).color;

    arrinputelem.map((data,index) =>{
        $(data).spectrum({
            color: `${colorarr[index]}`,
        });
        
        
    })
  
}

colorinit();

