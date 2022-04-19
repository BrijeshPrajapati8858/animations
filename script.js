gsap.from(".img-box", {
    x: -12002, 
    duration: 3,
    return: -1

});
gsap.from(".main-head", {
    opacity: 0,
    x: +602, 
    duration: 3,
    return: -1

});

gsap.from(".img-1", {
    opacity: 0,
    y: -602, 
    duration: 3,  
});
gsap.from(".img-2", {
    opacity: 0,
    delay: 1,
    y: -602, 
    duration: 3,  
});
gsap.from(".img-3", {
    opacity: 0,
    delay:2,
    y: -602, 
    duration: 3,  
});
gsap.from(".desc", {
    delay: 3,
    x: -602,
    y: -200, 
    duration: 3,
    return: -1

});


let animation = gsap.timeline({repeat: -1,
});
animation.to("#spn-1", { 
    duration: 1,
    opacity: 0,
     width: 100,
     height:100


});

animation.to("#spn-2", { 
    backgroundColor : 'green',
    duration: 1,
    opacity: 0,
    width: 100,
    height:100
});

animation.to("#spn-4", {
    opacity: 0, duration: 1, width: 100,
    height:100
});

animation.to("#spn-3", {
    opacity: 0, duration: 1, width: 100,
    height:100,
    backgroundColor: "yellow"
});



