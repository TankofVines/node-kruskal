var async = require('async');

function kruskalMST(darray, callback) {
	// Vars to hold the array of edges, final smt value, and the vertex tracker
	var edgeArray = [],
	smt = 0,
	vertexArray = [],
	row = -1,
	edgeIndex = -1;

	// Comparative function to sort the edges
	function compare(a,b){
		if (a[2] < b[2]) return -1;
		if (a[2] > b[2]) return 1;
		return 0;
	}
	console.log(darray);
	// Go through each row in the distance array
	// If the index of the current distance is greate than the row index it is in
	// add the edge to the edge array because it is on the right side of the diagonal
	// async.eachSeries(darray, function(distances, cb){}, function(err){if(err){console.log(err)}});
	// async.eachSeries(darray, function(distances, cb){

	// }, function(err){
	// 	if(err){
	// 		console.log(err)
	// 	}
	// });

	async.forEachSeries(darray, function(distances, cb) {
		row += 1;
		column = -1;
		async.forEachSeries(distances, function(distance, c){
			column += 1;
			if (column > row) {
				edgeArray.push([row, column, distance]);
				console.log(edgeArray);
				c();
			} else {
				c();
			}
		}, function(err) {
			if (err) {
				console.log(err);
			}
		});
		cb();
	}, function(err) {
		if (err) {
			console.log(err);
		}
	});

	sortedEdgeArray = edgeArray.sort(compare);
	console.log(sortedEdgeArray);

	async.forEachSeries(sortedEdgeArray, function(edge, cb) {
		edgeIndex += 1;
		if (edgeIndex == 0) {
			smt += edge[2];
			vertexArray.push(edge[0]);
			vertexArray.push(edge[1]);
			cb();
		} else {
			// If both vertices are in the tracker go to the next edge
			if (vertexArray.indexOf(edge[0]) > -1 && vertexArray.indexOf(edge[1]) > -1) {
				cb();
			// If 0 index vertex is not in the tracker but the other is keep the edge but only add empty vertex
			} else if (vertexArray.indexOf(edge[0]) == -1 && vertexArray.indexOf(edge[1]) > -1) {
				smt += edge[2];
				vertexArray.push(edge[0]);
				cb();
			} else if (vertexArray.indexOf(edge[0]) > -1 && vertexArray.indexOf(edge[1]) == -1) {
				smt += edge[2];
				vertexArray.push(edge[1]);
				cb();
			} else if (vertexArray.indexOf(edge[0]) == -1 && vertexArray.indexOf(edge[1]) == -1) {
				smt += edge[2];
				vertexArray.push(edge[0]);
				vertexArray.push(edge[1]);
				cb();
			}
		}
	}, function(err) {
		if (err) {
			console.log(err);
		}
	});
	callback(smt);
}

exports.kruskalMST = kruskalMST;