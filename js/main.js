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

gsap.to('#deploymentScrollingText',{
    scrollTrigger: {
        trigger: '#deploymentScrollingText',
        scrub: 1,
        ease: 'power2.inOut',
        start: "0% 90%",
        end: "0 -10%"
    },
    x: 1500,
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

gsap.from('#misakaImg1',{
    scrollTrigger: {
        trigger: '#misakaImg1',
        scrub: 1,
        ease: 'power2.inOut',
        start: "0% 110%",
        end: "0 30%"
    },
    x: 1000,
})

gsap.from('#misakaDeploymentText',{
    scrollTrigger: {
        trigger: '#misakaDeploymentText',
        scrub: 1,
        ease: 'power2.inOut',
        start: "0% 110%",
        end: "0 30%"
    },
    x: -1200,
})

gsap.from('#moldovaImg1',{
    scrollTrigger: {
        trigger: '#moldovaImg1',
        scrub: 1,
        ease: 'power2.inOut',
        start: "0% 110%",
        end: "0 30%"
    },
    x: -1000,
})

gsap.from('#moldovaDeploymentText',{
    scrollTrigger: {
        trigger: '#moldovaDeploymentText',
        scrub: 1,
        ease: 'power2.inOut',
        start: "0% 110%",
        end: "0 30%"
    },
    x: 1200,
})

gsap.from('#seychellesImg1',{
    scrollTrigger: {
        trigger: '#seychellesImg1',
        scrub: 1,
        ease: 'power2.inOut',
        start: "0% 110%",
        end: "0 30%"
    },
    x: 1000,
})

gsap.from('#seychellesDeploymentText',{
    scrollTrigger: {
        trigger: '#seychellesDeploymentText',
        scrub: 1,
        ease: 'power2.inOut',
        start: "0% 110%",
        end: "0 30%"
    },
    x: -1200,
})

const numbers = "0123456789$€£█"
const value = "325,000€"
let interval = null
const element = document.querySelector("#budgetText2")
let activated = false

function isInViewport() {
    var rect = document.getElementById("budgetText2").getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

window.addEventListener("scroll", element => {
    if(isInViewport()){
        if(activated == false) {
            let iteration = 0
            clearInterval(interval)
            interval = setInterval(() => {
                document.querySelector("#budgetText2").innerText = document.querySelector("#budgetText2").innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration){
                        return value[index];
                    }
                    
                    return numbers[Math.floor(Math.random() * 14)]
                }).join("")
                
                if(iteration >= value.length){
                    clearInterval(interval)
                }
                
                iteration += 1/50
            })
            activated = true
        }
      };
})

window.onload = function() {
    let coverTitleCharactersUnspanned = document.getElementById("coverTitle");
    let htmlString = ''; 
    let charArray = coverTitleCharactersUnspanned.textContent.split('')
    for(let i = 0; i < charArray.length; i++){
        htmlString += `<span translate="yes" id="letter">${charArray[i]}</span>`
    }
    coverTitleCharactersUnspanned.innerHTML = htmlString;

    let coverTitleCharactersSpanned = [...coverTitleCharactersUnspanned.querySelectorAll('*')]
    coverTitleCharactersSpanned.forEach(char => {
        char.style = "transform: translate3d(0, -50px, 0); opacity: 0"
    })
    gsap.to("#letter",{
        opacity: 1,
        delay: 0.2,
        stagger: .05,
    })
}; 
