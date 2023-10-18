"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var allData = Array.from({
  length: 40
}, function () {
  return Math.floor(Math.random() * 40);
});
function App() {
  var _React$useState = React.useState(allData),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    currentList = _React$useState2[0],
    setCurrentList = _React$useState2[1];
  var _React$useState3 = React.useState(allData),
    _React$useState4 = _slicedToArray(_React$useState3, 1),
    originalList = _React$useState4[0];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    sorting = _React$useState6[0],
    setSorting = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    filtering = _React$useState8[0],
    setFiltering = _React$useState8[1];
  var handleSortClick = function handleSortClick() {
    setSorting(true);
    setFiltering(false);
    var sortedList = _toConsumableArray(currentList).sort(function (a, b) {
      return a - b;
    });
    setCurrentList(sortedList);
  };
  var handleFilterOddClick = function handleFilterOddClick() {
    setSorting(false);
    setFiltering(true);
    var oddNumbers = originalList.filter(function (item) {
      return item % 2 !== 0;
    });
    setCurrentList(oddNumbers);
  };
  var handleResetClick = function handleResetClick() {
    setSorting(false);
    setFiltering(false);
    setCurrentList(originalList);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleSortClick
  }, "Sort"), /*#__PURE__*/React.createElement("button", {
    onClick: handleFilterOddClick
  }, "Filter Odd Numbers"), /*#__PURE__*/React.createElement("button", {
    onClick: handleResetClick
  }, "Reset")), currentList.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index
    }, " ", item.toString(), " ");
  }));
}
var root = ReactDOM.createRoot(document.getElementById("mydiv"));
root.render( /*#__PURE__*/React.createElement(App, null));
