// kinolar arrayni splice qilish
const spliceList = kinolar.splice(0, 100); 

//document dan elementlarni olib kelish va document tagi body ga append qilish
const wrapperContainer = document.querySelector(".wrapper-container");


const wrapperUl = wrapperContainer.querySelector(".wrapper-list");
document.body.appendChild(wrapperUl);





spliceList.forEach(function(movie) {


    // CreateElement yaratish va append qilish

    const wrapperLi = document.createElement("li");
    wrapperLi.className = "wrapper-item";
    const wrapperTitle = getElement("h3", "wrapper-title", movie.title);

    // const wrapperTitle = document.createElement("h3");
    // wrapperTitle.textContent = kinolar[i].title;
    // wrapperTitle.className = "wrapper-title";
    
    const wrapperYear = getElement("p", "wrapper-year", movie.year);
    // const wrapperYear = document.createElement("p");
    // wrapperYear.textContent = kinolar[i].year;
    // wrapperYear.className = "wrapper-year";

    const wrapperCast = document.createElement("p");
    wrapperCast.textContent = movie.cast;
    wrapperCast.className = "wrapper-cast";

    const wrapperGeneres = document.createElement("p");
    wrapperGeneres.textContent = movie.genres;
    wrapperGeneres.className = "wrapper-genres";


    // for(let i = 0; i < movie.cast.length; i++) {

    // }

    wrapperLi.append(wrapperTitle);
    wrapperLi.append(wrapperYear);
    wrapperLi.append(wrapperCast);
    wrapperLi.append(wrapperGeneres);
    wrapperUl.appendChild(wrapperLi);
})

