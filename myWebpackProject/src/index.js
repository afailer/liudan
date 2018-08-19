import './css/index.css'
import { MyPlain } from './plain/MyPlain'
function Manager() {
    this.init = function() {
        this.container = document.createElement('div');
        this.container.classList.add('bg')
        document.body.appendChild(this.container);
    }
    this.addMe = function(){
        new MyPlain(this.container).init()
    }
}
