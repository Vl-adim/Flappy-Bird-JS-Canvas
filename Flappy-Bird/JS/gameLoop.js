export default class GameLoop {
    constructor(updata, draw) {
        this.updata = updata
        this.draw = draw

        this.idAnimation = this.animation()
    }

    animation() {
        this.idAnimation = requestAnimationFrame(this.animation.bind(this))

        this.updata()
        this.draw()
    }

    cancelAnimation() {
        cancelAnimationFrame(this.idAnimation)
    }
}