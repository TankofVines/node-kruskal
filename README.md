node-kruskal
============

Given a distance array in the form of:

    d = [ [0,1,2,3],
          [1,0,1,2],
          [2,1,0,1],
          [3,2,1,0] ]

calculates the Minimum Spanning Tree using Kruskal's algorithm.

Install:

    npm install node-kruskal

Usage:

    var kruskal = require('node-kruskal');

Example:

    kruskal.kruskalMST(d, function(results){
		console.log(results);
	});

Output:

    3