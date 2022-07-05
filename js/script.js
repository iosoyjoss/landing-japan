
//GSAP

var tl = gsap.timeline();

tl.from('.links',{
    y:-100,
    stagger: {
        each:0.1
    }
})
tl.from('.ja',{
    x:"-350%",
    delay:0.2,
    ease:Power4.easeOut
},"content")

tl.from('.pan',{
    x:"250%",
    delay:0.5,
    ease:Power4.easeOut
},"content")

tl.from('.image',{
    y:"-150%",
    duration:2,
    ease:Elastic.easeOut
},"content")

tl.from('.tree',{
    y:"-250%",
    duration:2,
    ease:Elastic.easeOut
},"content")

tl.from('.leaf',{
    stagger:.2,
    width:0,
    scale:0,
    ease:Back.easeOut.config(1.7)
})

tl.from('.text-1',{
    x:"-150%",
    opacity:0,
    ease:Power4.easeOut
},"text")

tl.from('.caption',{
    x:"150%",
    opacity:0,
    ease:Power4.easeOut
},"text")

//parallax effect

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene)