import api from '@/common/app_request';

export default class EventEmitter {
    constructor() {  
		if (!EventEmitter.instance) { 
			this.eventMap = {}
			this.onceEventMap = {}
			EventEmitter.instance = this;
		} else {
			const instance = EventEmitter.instance;
			this.eventMap = instance.eventMap;
			this.onceEventMap = instance.onceEventMap;
		}

		this.event = new Proxy({}, {
			set: (target, property, fn) => {
				this.eventMap[property] || (this.eventMap[property] = [])
				this.eventMap[property].push(fn)
				return true
			}
		})  
		this.onceEvent = new Proxy({}, {
			set: (target, property, fn) => {
				this.onceEventMap[property] || (this.onceEventMap[property] = [])
				this.onceEventMap[property].push(fn)
				return true
			}
		})
		this.$api = api;
    } 
    on(name, fn) { //订阅
        this.event[name] = fn
        delete this.onceEventMap[name]
    }
    off(name) {
        delete this.eventMap[name]
        delete this.onceEventMap[name]
    }
    emit(name, ...val) { //发布
        this.eventMap[name] && this.eventMap[name].forEach(fn => {
            fn(...val)
        })
        this.onceEventMap[name] && (this.onceEventMap[name].forEach(fn => {
            fn(...val)
        }), this.off(name))
    }
    once(name, fn) {
        this.onceEvent[name] = fn
        delete this.eventMap[name]
    }
}