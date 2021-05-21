let Dictionary = require('./dic').Dictionary;//导入字典

//图构造函数
function Graph() {
    this.vertices = [];//顶点
    this.adjList = new Dictionary()//使用字典数据结构创建邻接表
    this.addVertex = addVertex;//向图中添加顶点
    this.addEdge = addEdge;//在两顶点之间添加边
    this.toString = toString;//用于输出图
}

function addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);//设置邻接表，键为顶点v，值为空数组（邻接表）
}

function addEdge(v, w) {
    this.adjList.get(v).push(w);;//添加w到v的邻接表中
    this.adjList.get(w).push(v);;//添加v到w的邻接表中
}

function toString() {
    let re = '';
    for (let i = 0; i < this.vertices.length; i++) {
        re += `${this.vertices[i]}-->`;
        let neighbors = this.adjList.get(this.vertices[i]);
        for (let j = 0; j < neighbors.length; j++) {
            re += `${neighbors[j]} `;
        }
        re += '\n';
    }
    return re;
}

let graph = new Graph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.toString());