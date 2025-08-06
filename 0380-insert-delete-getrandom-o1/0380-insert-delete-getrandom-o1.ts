class RandomizedSet {
    set: Map<number, boolean>
    constructor() {
        this.set = new Map()
    }

    insert(val: number): boolean {
        if (this.set.has(val)) return false
        this.set.set(val, true)
        return true
    }

    remove(val: number): boolean {
        if (!this.set.has(val)) return false
        this.set.delete(val)
        return true
    }

    getRandom(): number {
        const index = Math.floor(Math.random() * this.set.size)
        return Array.from(this.set.keys())[index]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */