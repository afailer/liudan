import mePlain from './imgs/me'
import './css/me'
export function MyPlain() {
    this.container = ''
    this.init = function (container) {
        this.container = container
        this.initDom();
    }
    this.initDom = function() {
        let me = new Image();
        me.src = mePlain
        me.classList.add('me')
        this.container.appendChild(me)
    }
}