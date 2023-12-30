var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim(){
    var tl= gsap.timeline();
    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1,
        
        ease:Expo.easeInOut
    })
    
    .to(".boundingelem",{
        y:0,
        duration:1.5,
        stagger:.1,
        
        ease:Expo.easeInOut
    })
    .from("#herofooter",{
        
        y:'-10',
        opacity:0,
        duration:1,
        
        ease:Expo.easeInOut
    })

}



function circleChaptaKaro(){
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;
    main.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);
        xscale=gsap.utils.clamp(.7,1.3,dets.clientX-xprev);
        yscale=gsap.utils.clamp(.7,1.3,dets.clientY-yprev);
        xprev=dets.clientX;
        yprev=dets.clientY;
        circleMouseFollower(xscale,yscale);
        timeout=setTimeout(function(){
            document.querySelector('#minicircle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`
        },10);
    });
}

function circleMouseFollower(xscale,yscale){
    main.addEventListener("mousemove",function(dets){
        document.querySelector('#minicircle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
    })
}
circleChaptaKaro();
firstPageAnim();
circleMouseFollower();
document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mouseleave",function(dets){
        
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration:0.5,
            
        });
    });
});
document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var diffrot=0;
    elem.addEventListener("mousemove",function(dets){
        var diff= dets.clintY - elem.getBoundingClientRect().top;
        diffrot=dets.clientX-rotate;
        rotate=dets.clientX;
        
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top:diff,
            left:dets.clientX-250,
            rotate:gsap.utils.clamp(-20,20,diffrot*0.5)
            
        });
    });
});

