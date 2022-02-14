"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
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
    return (<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 400 300" style={{ display: "block" }}>
			<defs>
				<linearGradient id="inner-gradient" gradientTransform="rotate(90)">
					<stop offset="0" stopColor="#3370f5"/>
					<stop offset="1" stopColor="#ee5aa2"/>
				</linearGradient>
			</defs>
			<polygon stroke="#fff" fill="url(#inner-gradient)" strokeWidth={2} points={path}/>
		</svg>);
};
Graph.propTypes = {
    data: prop_types_1["default"].arrayOf(prop_types_1["default"].shape({
        label: prop_types_1["default"].string,
        valor: prop_types_1["default"].number
    }).isRequired).isRequired
};
exports["default"] = Graph;
