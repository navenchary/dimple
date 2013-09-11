        // Copyright: 2013 PMSI-AlignAlytics
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"
        // Source: /src/objects/chart/methods/setMargins.js
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-setMargins
        this.setMargins = function (left, top, right, bottom) {
            // Set the bounds here, functions below will be used for access
            this.x = left;
            this.y = top;
            this.width = 0;
            this.height = 0;
            // Access the pixel value of the x coordinate
            this._xPixels = function () {
                return dimple._parsePosition(this.x, this.svg.node().offsetWidth);
            };
            // Access the pixel value of the y coordinate
            this._yPixels = function () {
                return dimple._parsePosition(this.y, this.svg.node().offsetHeight);
            };
            // Access the pixel value of the width coordinate
            this._widthPixels = function () {
                return this.svg.node().offsetWidth - this._xPixels() - dimple._parsePosition(right, this.svg.node().offsetWidth);
            };
            // Access the pixel value of the width coordinate
            this._heightPixels = function () {
                return this.svg.node().offsetHeight - this._yPixels() - dimple._parsePosition(bottom, this.svg.node().offsetHeight);
            };
            // Refresh the axes to redraw them against the new bounds
            this.draw(0, true);
            // return the chart object for method chaining
            return this;
        };

