class Queue {
    constructor(arg) {
        if (Array.isArray(arg)) {
            this._arr = arg
        } else {
            this._arr = [arg]
        }
        function* generator() {
            for (let i = 0; i < this._arr.length; i++) {
                yield this._arr[i]
            }
        }
        const bindedGenerator = generator.bind(this)
        this.iterator = bindedGenerator()
    }

    push(item) {
        this._arr.push(item)
    }

    get next() {
        const next = this.iterator.next()
        if (!next.isDone) {
            return next.value
        } else {
            return null
        }
    }
}

const graph = {
    me: {
        name: 'me',
        isMangoSeller: false,
        nodes: [
            {
                name: 'Bob',
                isMangoSeller: false,
                nodes: [
                    {
                        name: 'Anudj',
                        isMangoSeller: false,
                        nodes: []
                    },
                    {
                        name: 'Paggie',
                        isMangoSeller: false,
                        nodes: []
                    },
                ]
            },
            {
                name: 'Alice',
                isMangoSeller: false,
                nodes: [
                    {
                        name: 'Paggie',
                        isMangoSeller: false,
                        nodes: []
                    },
                ]
            },
            {
                name: 'Clar',
                isMangoSeller: false,
                nodes: [
                    {
                        name: 'Tom',
                        isMangoSeller: false,
                        nodes: []
                    },
                    {
                        name: 'Johnny',
                        isMangoSeller: false,
                        nodes: []
                    },
                ]
            },
        ]
    }
}

const queue = new Queue(graph.me)
const searched = []
let calls = 0

const search = () => {
    for (node of queue.iterator) {
        calls++
        if (!searched.includes(node.name)) {
            if (node.isMangoSeller) {
                return `${node.name} is a mango seller!`
            } else {
                searched.push(node.name)
                node.nodes.forEach(n => !searched.includes(n.name) && queue.push(n))
            }
        }
    }
    return 'There is no mango seller!'
}

console.log(search(), calls)