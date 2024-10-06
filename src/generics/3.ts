function merge (objA: T, objB: U): T & U {
    return Object.assign({},objA, objB);
    }