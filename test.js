var Cluster = require('./Cluster.js');

var data;
data = Cluster.annotate( Cluster.randData(12) ); 
console.log( '-----DONE-------------' );
console.log( data );

data = Cluster.annotate( [0,0,0, 2,3,3, 5,6,6, 8,9,9,18 ]  );
console.log( '-----DONE-------------' );
console.log( data );
