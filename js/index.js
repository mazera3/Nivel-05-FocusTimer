import Controls from './controls.js';
import Timer from './timer.js';
import Sound from './sounds.js';
import Events from './events.js';
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    minutesDisplay,
    secondsDisplay
} from './elements.js';


const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sound()

Events({ controls, timer, sound })

// buttonPlay.addEventListener('click', () => {
//     controls.play()
//     timer.countdown()
//     sound.pressButton()
// })

// buttonPause.addEventListener('click', () => {
//     controls.pause()
//     timer.hold()
//     sound.pressButton()
// })

// buttonStop.addEventListener('click', () => {
//     controls.reset()
//     timer.reset()
//     sound.pressButton()
// })

// buttonSoundOn.addEventListener('click', () => {
//     buttonSoundOn.classList.add('hide')
//     buttonSoundOff.classList.remove('hide')
//     sound.bgAudio.play()
// })

// buttonSoundOff.addEventListener('click', () => {
//     buttonSoundOn.classList.remove('hide')
//     buttonSoundOff.classList.add('hide')
//     sound.bgAudio.pause()
// })

// buttonSet.addEventListener('click', () => {
//     let newMinutes = controls.getMinutes()
//     if (!newMinutes) {
//         timer.reset()
//         return
//     }

//     timer.updateDisplay(newMinutes, 0)
//     timer.updateMinutes(newMinutes)
// })
