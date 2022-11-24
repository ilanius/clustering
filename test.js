var Cluster = require('./Cluster.js');

var data = Cluster.randData(12);
console.log( '-----Cluster Random Data -----#items: ' + data.length );
console.log( data  );
data = Cluster.annotate( Cluster.randData(12) ); 
console.log( '----- DONE -------------' );
console.log( data );

console.log( '----- ----- -------------' );
data = [0,0,0, 2,3,3, 5,6,6, 8,9,9,18 ];
console.log( '-----Cluster Plain Integers --#items: ' + data.length );
console.log( data );
data = Cluster.annotate( data );
console.log( data );

