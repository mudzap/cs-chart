"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var Graph = function (_a) {
    var data = _a.data;
    var mapval = function (val, valmin, valmax, min, max) {
        return ((val - valmin) * (max - min)) / (valmax - valmin) + min;
    };
    var w = 400;
    var h = 300;
    var path = "0,".concat(h);
    var minval = data[0].valor;
    var maxval = data[0].valor;
    var spacing = w / (data.length - 1);
    for (var i = 1; i < data.length; i++) {
        var val = data[i].valor;
        if (val > maxval) {
            maxval = val;
        }
        if (val < minval) {
            minval = val;
        }
    }
    for (var j = 0; j < data.length; j++) {
        var obj = data[j].valor;
        path += " ".concat(spacing * j, ",").concat(mapval(obj, minval, maxval, h, 0));
    }
    path += " ".concat(w, ",").concat(h);
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "100%", viewBox: "0 0 400 300", style: { display: "block" } }, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("linearGradient", __assign({ id: "inner-gradient", gradientTransform: "rotate(90)" }, { children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0", stopColor: "#3370f5" }, void 0), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: "#ee5aa2" }, void 0)] }), void 0) }, void 0), (0, jsx_runtime_1.jsx)("polygon", { stroke: "#fff", fill: "url(#inner-gradient)", strokeWidth: 2, points: path }, void 0)] }), void 0));
};
Graph.propTypes = {
    data: prop_types_1["default"].arrayOf(prop_types_1["default"].shape({
        label: prop_types_1["default"].string,
        valor: prop_types_1["default"].number
    }).isRequired).isRequired
};
exports["default"] = Graph;
