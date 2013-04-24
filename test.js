var kruskal = require('./kruskal');

// d = [[0,5,5,7],[5,0,3,3],[5,3,0,3],[7,3,3,0]];
// d = [[0,1,3,4,6,7],
// 	 [1,0,2,3,5,6],
// 	 [3,2,0,1,3,4],
// 	 [4,3,1,0,2,3],
// 	 [6,5,3,2,0,1],
// 	 [7,6,4,3,1,0]];

d = [[0,1,3,4],
	 [1,0,2,3],
	 [3,2,0,1],
	 [4,3,1,0]];

kruskal.kruskalMST(d, function(results){
	console.log(results);
});