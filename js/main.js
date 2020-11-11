var tlFirstScroll = new TimelineMax();

tlFirstScroll
.set('.iphone-image-wrapper', {scale: 4, transformOrigin:" center top"})
.to('.iphone-image-wrapper', 3, {scale:2.2, y: "-50%"})
.to('.iphone-image-wrapper', 3, {scale: 1, y: "0%"})

var controller = new ScrollMagic.Controller();

//Scene 1

var scene1 = new ScrollMagic.Scene({
	triggerElement: '.trigger1',
	duration: '100%'
})

.setTween(tlFirstScroll)
.addTo(controller);

var tlSecondScroll = new TimelineMax();

tlSecondScroll

.to('.iphone1', 3, {x: "-54%"})
.to('.iphone2', 3, {x: "54%"}, "-=3")
.from('.iphone1-text', 0.3, {autoAlpha: 0}, "-=3")
.from('.iphone2-text', 0.3, {autoAlpha: 0}, "-=3")
.to('.iphone1-text', 3, {x: "-30%"}, "-=3")
.to('.iphone2-text', 3, {x: "30%"}, "-=3")

.set('.iphone-stick', {display: "block"})

.to('.iphone1-img-behind', 3, {x: "-50%"})
.to('.iphone2-img-behind', 3, {x: "50%"}, "-=3")

.to('.iphone1-img', 0.5, {autoAlpha: 0}, "-=3")
.to('.iphone2-img', 0.5, {autoAlpha: 0}, "-=3")

.to('.iphone1-text', 0.3, {autoAlpha: 0}, "-=3")
.to('.iphone2-text', 0.3, {autoAlpha: 0}, "-=3")

var scene2 = new ScrollMagic.Scene({
	triggerElement: '.trigger2', 
	triggerHook:0,
	duration: "70%"
})

.setTween(tlSecondScroll)
.setPin('.trigger2')
.addTo(controller);

var tlThirdScroll = new TimelineMax();

tlThirdScroll

.to('.iphone-2-1', 15, {x: "100%", transformOrigin:" center top"})
.to('.iphone-2-3', 3, {transformOrigin:" center top"})
.to('.iphone-2-2', 15, {x: "-100%", transformOrigin:" center top"}, "-=18")
.to('.textUp1', 5, {y: "-500%", transformOrigin:" center top"})
.to('.textUp2', 5, {y: "-300%", transformOrigin:" center top"})
.to('.textUp3', 5, {y: "-500%", transformOrigin:" center top"})

var scene3 = new ScrollMagic.Scene({
	triggerElement: '.trigger3', 
	triggerHook:0,
	duration: "100%"
})

.setTween(tlThirdScroll)
.setPin('.trigger3')
.addTo(controller);

var tlFourthScroll = new TimelineMax();

tlFourthScroll

// .to('.iphone-3-1', 1, {y: "-50%", transformOrigin:"center top"})
// .from('.iphone-3-1', 1, {scale: 1})
.set('.iphone-3-1', {scale: 0.4})
.to('.iphone-3-1', 3, {scale: 1, y:"-50%"})
.to('.iphone-3-1', 30, {scale: 7, opacity: 0})
.to('.textUp4', 3, {y: "-200%", scale: 1.5, transformOrigin: "center top"})

var scene4 = new ScrollMagic.Scene({
	triggerElement: '.trigger4', 
	triggerHook:1,
	duration: "100%"
})

.setTween(tlFourthScroll)
.setPin('.trigger4')
.addTo(controller);

var tlFifthScroll = new TimelineMax();

tlFifthScroll

.to('.gouptext1', 5, {y:"-220%"})
.to('.iphonegirl', 20, {opacity: 0.5})

var scene5 = new ScrollMagic.Scene({
	triggerElement: '.trigger5', 
	triggerHook:0,
	duration: "100%"
})

.setTween(tlFifthScroll)
.setPin('.trigger5')
.addTo(controller);

var tlSixthScroll = new TimelineMax();

tlSixthScroll

.set('.image1',{scale: 1.5} )
.set('.image2', {scale: 1.5, opacity: 0})
.set('.image3', {scale: 1.5, opacity: 0})
.set('.image4', {scale: 1.5, opacity: 0})

.to('.image1', 5000, {scale: 1.3, opacity: 0})
.to('.image2', 5000, {scale: 1.3, opacity: 1}, "-=5000")
.to('.image3', 5000, {scale: 1.3, opacity: 0}, "-=5000")
.to('.image4', 5000, {scale: 1.3, opacity: 0}, "-=5000")
.to('.textUp5', 5000, {y: '-500%'}, "-=5000")

.to('.image1', 5000, {scale: 1, opacity: 0})
.to('.image2', 5000, {scale: 1, opacity: 0}, "-=5000")
.to('.image3', 5000, {scale: 1, opacity: 1}, "-=5000")
.to('.image4', 5000, {scale: 1, opacity: 0}, "-=5000")
.to('.textUp6', 5000, {y: '-700%'}, "-=5000")

.to('.image1', 5000, {scale: 0.7, opacity: 0})
.to('.image2', 5000, {scale: 0.7, opacity: 0}, "-=5000")
.to('.image3', 5000, {scale: 0.7, opacity: 0}, "-=5000")
.to('.image4', 10000, {scale: 0.7, opacity: 1}, "-=5000")
.to('.textUp7', 5000, {y: '-500%'}, "-=5000")


var scene6 = new ScrollMagic.Scene({
	triggerElement: '.trigger6', 
	triggerHook:0,
	duration: "100%"
})

.setTween(tlSixthScroll)
.setPin('.trigger6')
.addTo(controller);

var tlSeventhScroll = new TimelineMax();

tlSeventhScroll

.set('.iphone-move', {opacity: 0, scale: 0.8})
.set('.iphone-stop', {scale: 0.9})
.to('.iphone-stop', 3, {scale: 0.8})
.to('.iphone-move', 3, {x: '-60%', opacity: 1})
.to('.container', 6, {y: '-50%'}, "-=6")

var scene7 = new ScrollMagic.Scene({
	triggerElement: '.trigger7', 
	triggerHook:0,
	duration: "100%"
})

.setTween(tlSeventhScroll)
.setPin('.trigger7')
.addTo(controller);