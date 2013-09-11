        // Copyright: 2013 PMSI-AlignAlytics
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"
        // Source: /src/objects/chart/methods/_yPixels.js
        // Access the pixel position of the y co-ordinate of the plot area
        this._yPixels = function () {
            return dimple._parsePosition(this.y, this.svg.node().offsetHeight);
        };