var tl = gsap.timeline()

tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.2
})

tl.from("#main-text h3", {
    x:-500,
    opacity:0,
    duration:1.1,
    stagger:0.3
})

tl.from("img",{
    x:100,
    rotate:45,
    duration:0.5,
    opacity:0,
    stagger:0.5
})

tl.from("#bottom h3", {
    y:100,
    duration:0.8
})