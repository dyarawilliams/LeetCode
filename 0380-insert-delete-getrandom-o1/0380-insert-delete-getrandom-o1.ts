class RandomizedSet {
    set: Map<number, number>
    items: number[]
    constructor() {
        this.set = new Map()
        this.items = []
    }

    insert(val: number): boolean {
        if (val in this.set) return false
        this.items.push(val)
        this.set[val] = this.items.length - 1
        return true
    }

    remove(val: number): boolean {
        if (!(val in this.set)) return false
        
        const index = this.set[val]
        const last = this.items[this.items.length - 1]

        this.items[index] = last
        this.items.pop()

        this.set[last] = index
        delete this.set[val]
        return true
    }

    getRandom(): number {
        return this.items[Math.floor(Math.random() * this.items.length)]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */