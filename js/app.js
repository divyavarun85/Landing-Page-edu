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
window.addEventListener('scroll',highlightContent);

function highlightContent(e){
/*  document.documentElement.scrollIntoView(false);*/

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


 