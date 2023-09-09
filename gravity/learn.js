const gravity ={
    Earth:9.81
};

const inputWeight = document.getElementById("weight");
const planetOption = document.getElementById("planet")
const calculateButton=document.getElementById("calculate");
const resultParagraph= document.getElementById("result");


function calculateWeigh(){
    const selectedPlanet = planetOption.value;
    const weight = inputWeight.value;
    if(!isNaN(weight)){
        const SurfaceGravity = gravity[selectedPlanet];
        const result = (weight*SurfaceGravity).toFixed(9)
        resultParagraph.textContent=`Nesnenin ${selectedPlanet} üzerindeki Ağırlığı ${result} N(Newton)`;

    }else{
        resultParagraph.textContent="Lütfen geçerli bir değer giriniz.";
    }
}

calculateButton.addEventListener("click",calculateWeigh);