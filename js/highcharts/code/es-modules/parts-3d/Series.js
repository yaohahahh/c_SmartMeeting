
H.Series.prototype.translate3dPoints = function () {
    var series = this,
        chart = series.chart,
        zAxis = pick(series.zAxis, chart.options.zAxis[0]),
        rawPoints = [],
        rawPoint,
        projectedPoints,
        projectedPoint,
        zValue,
        i;

    for (i = 0; i < series.data.length; i++) {
        rawPoint = series.data[i];

        if (zAxis && zAxis.translate) {
            zValue = zAxis.isLog && zAxis.val2lin ?
                zAxis.val2lin(rawPoint.z) :
                rawPoint.z;
            rawPoint.plotZ = zAxis.translate(zValue);
            rawPoint.isInside = rawPoint.isInside ?
                (zValue >= zAxis.min && zValue <= zAxis.max) :
                false;
        } else {
            rawPoint.plotZ = 0;
        }

        rawPoint.axisXpos = rawPoint.plotX;
        rawPoint.axisYpos = rawPoint.plotY;
        rawPoint.axisZpos = rawPoint.plotZ;

        rawPoints.push({
            x: rawPoint.plotX,
            y: rawPoint.plotY,
            z: rawPoint.plotZ
        });
    }

    projectedPoints = perspective(rawPoints, chart, true);

    for (i = 0; i < series.data.length; i++) {
        rawPoint = series.data[i];
        projectedPoint = projectedPoints[i];

        rawPoint.plotX = projectedPoint.x;
        rawPoint.plotY = projectedPoint.y;
        rawPoint.plotZ = projectedPoint.z;
    }
};

