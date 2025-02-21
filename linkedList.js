
class node {
    constructor(value) {
        this.value  = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    addNode(node) {
        if(this.isEmpty()) {
            return this.head = node
        }
        this.next = null
        this.length++
    }

    findNode(node) {
        if(this.isEmpty()) {
            return "no node in the List"
        }
        
    }

    findlastNode(node) {
        if(this.isEmpty()) {
            return "no node in the List"
        }

    }

    removeNode(node) {
        if(this.isEmpty()) {
            return this.head = node
        }
        this.next = node
    }

    isEmpty() {
        return  this.head === null ? true : false

    }
}