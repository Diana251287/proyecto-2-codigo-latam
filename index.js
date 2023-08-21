let animado= document.querySelectorAll('.animation')
/* convertimos el NodeList a array */
let arrayAnimado= Array.from(animado)

let animado1= document.querySelectorAll('.animation1')
/* convertimos el NodeList a array */
let arrayAnimado1= Array.from(animado1)


function scrollDetector(){
    /* guardamos el scroll general en una variable */
    let scrollTop = document.documentElement.scrollTop;

    /* por cada uno de los elementos en arrayAnimado */
    arrayAnimado.map((e,i)=>{
     /* guardamos el scroll del elemento */   
    let alturaAnimado= e.offsetTop;
    
    if (alturaAnimado - 800 <scrollTop){
        
        setTimeout(() => {
        e.style.opacity = 1
            
        },i*200);
    }

    })

}
function scrollDetector2(){
    
    let scrollTop = document.documentElement.scrollTop;

    arrayAnimado1.map((e,)=>{
    let alturaAnimado= e.offsetTop

        if (alturaAnimado - 800 <scrollTop){
        
            setTimeout(() => {
            e.style.opacity = 1
             
            },400);
        }

    })

}

scrollDetector()
scrollDetector2()
window.addEventListener('scroll',scrollDetector)


