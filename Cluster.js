class Cluster {
    static randData( size ) {
        var data = new Array( size );
        for ( var i = 0 ; i < size; i++ ) {
            data[i] = Math.random();
        }
        return data;
    }
    static loadArray( data0 ) {
        var data = new Array( data0.length );
        for ( var i = 0 ; i < data0.length; i++ ) {
            data[i] = { 'val': data0[i], 'clust': 0 };
        }
        data.sort( (a,b) =>  a.val - b.val  );
        return data;
    }
    static interDistances( data ) {
        var distA = new Array( data.length - 1 );
        for ( var i = 1; i < data.length; i++ ) {
            distA[i-1] = { 'dist': (data[i].val -data[i-1].val), 'from': i-1 } ;
        }
        distA.sort( (a,b) => a.dist - b.dist );
        return distA;
    }
    static annotate( data0 ) {
        var data = this.loadArray( data0 );
        var [ penult, last ] = [ data[data.length-2], data[data.length-1] ];
        var sentinel = (last.val > penult.val * 1.7);
        if ( sentinel ) data.push( last ); // adding sentinel
        var distA = this.interDistances( data );
        var clustnr  = 1;
        for ( var el of distA ) {
            var node = el.from;
            var src = data[node];
            var dst = data[node+1];
            if ( src.clust ==0 && dst.clust > 0 ) { // connect to upper cluster
                src.clust = dst.clust;
            } else if ( src.clust == 0 && dst.clust == 0 ) { // new cluster
                src.clust = clustnr;
                dst.clust = clustnr;
                clustnr++;
            } else if ( src.clust > 0 && dst.clust == 0 ) { // extend cluster - problem if last node is separate
                dst.clust = src.clust;
            }
        }
        if ( sentinel ) data.pop(); // remove sentinel
        return data;
    }
}

module.exports = Cluster;

