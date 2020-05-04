/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navNames = {
    1:'LEARNERS',
    2:'TEACHERS',
    3:'COUNTIES',
    4:'PARENTS',    
};
const menuBar=document.querySelector('#navbar__list');
const numberOfTabs = Object.keys(navNames).length;



/**
 * End Global Variables
 *  
*/
// build the navigation bar

for(let i=1;i<=numberOfTabs;i++){
    
    var li =document.createElement('li');
    
    menuBar.appendChild(li);
    
    var a = document.createElement("a");

    a.setAttribute('href', "#section" +i);
    a.innerText= navNames[i];
    
    li.appendChild(a);
    
    /*Adding listener for scroll and  highlighting active section*/ 
    li.addEventListener('click',scroll);
   
    li.classList.add("menu__link","menu__link:hover","navbar__menu");
    
    const ul = li.parentElement;
    ul.classList.add("navbar__menu");
}



/** */
document.addEventListener('scroll',makeActive);

function makeActive(e){
  const sc = window.scrollY;
 // console.log(sc);
  const Allsections = document.querySelectorAll('section');
for (const sectn of Allsections){
  const box = sectn.getBoundingClientRect();
  if(box.top  <=400 && box.bottom >= 660){
   /** Removing active class from all other sections */
    var allOtherSections = document.querySelectorAll("main > section:not(sectn)");
    allOtherSections.forEach(a=>a.classList.remove("your-active-class")); 
    /*Adding class to the selected class* */
    sectn.classList.add("your-active-class");
    const selectedSectionID = sectn.id;
    const hrefAttribute = "#"+sectn.id;
   /**Selecting all lis in Navigation */
    const liArrayTags = document.getElementsByTagName('a');
    const allLis = document.querySelectorAll('li');
    // remove activenag class before setting a new one
    allLis.forEach(a=>a.classList.remove("activenav"));
    for (j=0;j<=(numberOfTabs-1);j++){

    /* console.log(liArrayTags[j].hash);*/
    if(liArrayTags[j].hash == hrefAttribute){
      allotherLis =liArrayTags.parentElement;
      SelectedLi = liArrayTags[j].parentElement;
      SelectedLi.classList.add('activenav');
   
     }

    }
   
    
}

}

}

/*Scroll to anchor ID using scrollTO event*/
function scroll(event){ 
      
    
    event.preventDefault();  

    const targetID =event.target.getAttribute("href");
    const activeSection = document.querySelector(targetID);
   
    window.scrollTo({
       top:targetID==='#' ? 0 :document.querySelector(targetID).offsetTop,
        behavior:"smooth"        
    }); 
   
    sections = document.querySelectorAll('section');

    /*remove active class from all sections before setting on new one */
    sections.forEach (a=>a.classList.remove("your-active-class")); 
    activeSection.classList.add("your-active-class");
   
   
  }


 