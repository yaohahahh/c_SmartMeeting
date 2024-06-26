
if (VMLRenderer) {

    H.setOptions({ animate: false });

    VMLRenderer.prototype.face3d = SVGRenderer.prototype.face3d;
    VMLRenderer.prototype.polyhedron = SVGRenderer.prototype.polyhedron;
    VMLRenderer.prototype.cuboid = SVGRenderer.prototype.cuboid;
    VMLRenderer.prototype.cuboidPath = SVGRenderer.prototype.cuboidPath;

    VMLRenderer.prototype.toLinePath = SVGRenderer.prototype.toLinePath;
    VMLRenderer.prototype.toLineSegments = SVGRenderer.prototype.toLineSegments;

    VMLRenderer.prototype.createElement3D =
        SVGRenderer.prototype.createElement3D;

    VMLRenderer.prototype.arc3d = function (shapeArgs) {
        var result = SVGRenderer.prototype.arc3d.call(this, shapeArgs);
        result.css({ zIndex: result.zIndex });
        return result;
    };

    H.VMLRenderer.prototype.arc3dPath = H.SVGRenderer.prototype.arc3dPath;

    addEvent(Axis, 'render', function () {


        if (this.sideFrame) {
            this.sideFrame.css({ zIndex: 0 });
            this.sideFrame.front.attr({ fill: this.sideFrame.color });
        }
        if (this.bottomFrame) {
            this.bottomFrame.css({ zIndex: 1 });
            this.bottomFrame.front.attr({ fill: this.bottomFrame.color });
        }
        if (this.backFrame) {
            this.backFrame.css({ zIndex: 0 });
            this.backFrame.front.attr({ fill: this.backFrame.color });
        }
    });

}

