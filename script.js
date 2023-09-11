const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var t1=gsap.timeline();

    t1.from("#nav", {
       y:'-10',
       opacity:0,
       duration:1.5,
       ease:Expo.easeInOut
    })

    .to(".boundingelem", {
        y:'0',
        duration:1.7,
        ease:Expo.easeInOut,
        delay:-1,
        stagger:.2
     })

     .from("#herofooter", {
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
     })
}
let cursor=document.getElementById("minicircle");

function circlemousefollower(){
    window.addEventListener("mousemove",function(dets){
        let x=dets.clientX;
        let y=dets.clientY;

        cursor.style.left=x +"px";
        cursor.style.top=y +"px"; 
    })
}

circlemousefollower();
firstPageAnim();

document.querySelectorAll(".elem")
.forEach(function(elem){
    var rotate=0;
    var diffrot=0;

    elem.addEventListener("mousemove",function(dets){
       var diff=dets.clientY- elem.getBoundingClientRect();
        diffrot=dets.clientX-rotate;
        rotate=dets.clientX;
      


        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease: Power3,
            top:diff,
            left:dets.clientX,
            rotate:  gsap.utils.clamp(-20,20,diffrot*0.5),
        });
    });
    // const second = document.querySelector('#second');
    // const t2 = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: "#second",
    //       scroller:"body",
    //       start:"top 20%",
    //       end:"bottom 20%",
    //       scrub:3
    //     }
    //   });
      
    //   t2.fromTo(second,
    //   { scale:.9,opacity:.2,x:"-20" }, 
    //   { scale:1,opacity:.95,x:"0"});


    elem.addEventListener("mouseleave",function(dets){
        var diff=dets.clientY- elem.getBoundingClientRect();
         diffrot=dets.clientX-rotate;
         rotate=dets.clientX;
       
 
 
         gsap.to(elem.querySelector("img"),{
             opacity:0,
             ease: Power3,
            duration:0.5
         });
     });
});




window.addEventListener('load', () => {
    // Hide the loader
    const loader = document.getElementById('preloader');
    loader.style.display = 'none';

    // Show the content
    const content = document.getElementById('main');
    content.classList.remove('hidden');
});







// const bottomHeight =elemdiv.getBoundingClientRect().bottom;
// console.log(bottomHeight);


// window.addEventListener('scroll', function(){
//     if(this.window.scrollY>topHeight){
//         elemdiv.classList.add('.slidein');
//     }

   
//     else{
//         console.log("noo");
//     }
// });


// const elemdiv = document.getElementById('second');
// const topHeight = elemdiv.getBoundingClientRect().top;
// console.log(topHeight);


//     window.addEventListener('scroll',function () {
        
//         if(this.window.scrollY>topHeight){
//         //  elemdiv.classList.add('slidein');
//          console.log("huu");
//         }
//         });

//     window.addEventListener('scrollend', function() {
//           elemdiv.classList.remove('slidein');
//         });



// gsap.to("#second",{
//     scrollTrigger:{
//         trigger:"#second",
//         scroller:"body",
//          markers:true,
//         start:"top 20%",
//         end:"bottom 20%",
//         scrub:2.5
//         ,
//     },
//    rotate:360,
//    duration:2
// })


