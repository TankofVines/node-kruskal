var kruskal = require('./kruskal');

// d = [[0,5,5,7],[5,0,3,3],[5,3,0,3],[7,3,3,0]];
d = [[0,1,2,3],[1,0,1,2],[2,1,0,1],[3,2,1,0]];

kruskal.kruskalMST(d, function(results){
	console.log(results);
});