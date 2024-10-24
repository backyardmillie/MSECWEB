function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

gsap.registerPlugin(ScrollTrigger);

window.onload = function() {
    gsap.from("#covertitle",{
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.inOut',
 });
 gsap.from("#mcamSiteLogo",{
     y: 50,
     opacity: 0,
     duration: 1,
     ease: 'power2.inOut',
  });
}

gsap.to('#scrollingText1',{
    scrollTrigger: {
        trigger: '#scrollingText1',
        scrub: 1,
        ease: 'power2.inOut',
        start: "0% 80%",
        end: "0 -10%"
    },
    x: -2500,
}); 

gsap.to('#scrollingText2',{
    scrollTrigger: {
        trigger: '#scrollingText2',
        scrub: 2,
        ease: 'power2.inOut',
        start: "0% 80%",
        end: "0 -10%"
    },
    x: 500,
}); 

gsap.to('#desc1',{
    scrollTrigger: {
        trigger: '#desc1',
        scrub: 2,
        ease: 'power2.inOut',
        start: "0% 80%",
        end: "0 -10%"
    },
    x: 50,
}); 

gsap.to('#descImage1',{
    scrollTrigger: {
        trigger: '#descImage1',
        scrub: 2,
        ease: 'power2.inOut',
        start: "0% 80%",
        end: "0 -10%"
    },
    x: -100,
    rotation: 5,
}); 

gsap.to('#desc2',{
    scrollTrigger: {
        trigger: '#desc2',
        scrub: 2,
        ease: 'power2.inOut',
        start: "0% 80%",
        end: "0 -10%"
    },
    x: -50,
}); 

gsap.to('#descImage2',{
    scrollTrigger: {
        trigger: '#descImage2',
        scrub: 2,
        ease: 'power2.inOut',
        start: "0% 80%",
        end: "0 -10%"
    },
    x: 100,
    rotation: -5,
}); 

gsap.to('#desc3',{
    scrollTrigger: {
        trigger: '#desc3',
        scrub: 2,
        ease: 'power2.inOut',
        start: "0% 80%",
        end: "0 -10%"
    },
    x: 50,
}); 

gsap.to('#descImage3',{
    scrollTrigger: {
        trigger: '#descImage3',
        scrub: 2,
        ease: 'power2.inOut',
        start: "0% 80%",
        end: "0 -10%"
    },
    x: -50,
    rotation: 5,
}); 

gsap.from('#desc1',{
    scrollTrigger: {
        trigger: '#desc1',
        scrub: 1,
        ease: 'power2.inOut',
        start: "0% 80%",
        end: "0 -5%"
    },
    opacity: 0,
    rotation: -10,
}); 
gsap.from('#desc2',{
    scrollTrigger: {
        trigger: '#desc2',
        scrub: 1,
        ease: 'power2.inOut',
        start: "0% 80%",
        end: "0 -5%"
    },
    opacity: 0,
    rotation: 10,
}); 
gsap.from('#desc3',{
    scrollTrigger: {
        trigger: '#desc3',
        scrub: 1,
        ease: 'power2.inOut',
        start: "0% 80%",
        end: "0 -5%"
    },
    opacity: 0,
    rotation: -10,
}); 





