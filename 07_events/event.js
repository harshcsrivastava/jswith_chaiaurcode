//JS me sab sequentiol hota hai, exception Async
// onClick() => method ye purrrana aur feasable nhi hai
/*
attachEvent
jQuery - on

- addEventListener() => Propagation aram se kar skte
addEventListene('click', function () {

},false) [third parameter nhi likhte generally false hi likhte, lekin kuch applic me true chahiye]

Padhna Kya??? Prototypes:
//type, timestamp, preventDefault
// target, toElement, srcElement, currentTarget
?Interview: clientX, clientY, screenY
// altKey, ctrlKey, shhiftKey, keyCode


Now, EVENT PROPAGATION?
- event capturing (third para => true)(top se jata, parent se dekht ke ata)
- event bubbling  (third para => false) 

e.stopPropagartion() use  krr skte
*/