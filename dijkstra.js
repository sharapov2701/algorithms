const graph = {
    start: {
        c: 2,
        d: 5
    },
    c: {
        e: 8,
        f: 10,
        d: 2
    },
    d: {
        f: 7
    },
    e: {
        finish: 6
    },
    f: {
        finish: 3
    }
}

const dijkstra = graph => {
    const parents = {}
    const costs = {}
    const processed = []

    for (const node in graph) {
        if (node === 'start') {
            for (const n in graph[node]) {
                parents[n] = node
                costs[n] = graph[node][n]
            }
        } else if (!costs[node] && !parents[node]) {
            parents[node] = null
            costs[node] = Infinity
        }
    }

    parents['finish'] = null
    costs['finish'] = Infinity

    const findLowestCostNode = () => {
        let lowestCost = Infinity
        let lowestCostNode = null
        for (const node in costs) {
            const cost = costs[node]
            if (cost < lowestCost && !processed.includes(node)) {
                lowestCost = cost
                lowestCostNode = node
            }
        }
        return lowestCostNode
    }

    let node = findLowestCostNode()
    while (node) {
        const cost = costs[node]
        const neighbors = graph[node]
        for (const n in neighbors) {
            let newCost = cost + neighbors[n]
            if (costs[n] > newCost) {
                costs[n] = newCost
                parents[n] = node
            }
        }
        processed.push(node)
        node = findLowestCostNode()
    }

    const getPath = (node) => {
        if (!node) {
            node = 'finish'
        }
        if (parents[node] === 'start') {
            return [parents[node], node]
        }
        return [...getPath(parents[node]), node]
    }

    return getPath()
}

console.log(dijkstra(graph))