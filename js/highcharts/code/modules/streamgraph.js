
(function(a){"object"===typeof module&&module.exports?module.exports=a:"function"===typeof define&&define.amd?define(function(){return a}):a(Highcharts)})(function(a){(function(a){a=a.seriesType;a("streamgraph","areaspline",{fillOpacity:1,lineWidth:0,marker:{enabled:!1},stacking:"stream"},{negStacks:!1,streamStacker:function(a,b,c){a[0]-=b.total/2;a[1]-=b.total/2;this.stackedYData[c]=a}})})(a)});

