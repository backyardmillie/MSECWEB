gsap.registerPlugin(ScrollTrigger);
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
gsap.from('#desc1',{
    scrollTrigger: {
        trigger: '#desc1',
        scrub: 1,
        ease: 'power2.inOut',
        start: "0% 80%",
        end: "0 -5%"
    },
    opacity: 0,
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
}); 




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
