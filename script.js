var tl = gsap.timeline();
tl.from(".nav", {
  opacity: 0,
  y: 20,
  delay:1

})
.from(".nav2",{
    opacity: 0,
    y: 20,
})
.from(".center h1",{
y:20,
opacity:0,
scale:1.3,
duration:1
})
.from(".center button",{
    y:20,
    opacity:0,
})
.from([".center-img1",".center-img4"],{
    x:-60,
    scale:1.6,
    duration:1,
    opacity:0
})
.from([".center-img2",".center-img3"],{
    x:60,
    scale:1.6,
    duration:1,
    opacity:0,
    delay:"-1"
})
.from(".center .cicon",{
    scale:0.1,
    opacity:0
})
.to(".center .cicon",{
  y:20,
  yoyo:"true",
  repeat:"-1"
})