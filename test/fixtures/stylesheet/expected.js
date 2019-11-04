import { classnames as __classnames__ } from "babel-runtime-jsx-plus";
import { createElement } from 'react';
import indexStyleSheet from './index.css';
var _styleSheet = indexStyleSheet;

function _getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();

  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = _getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();

      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }

  return className.join(' ').trim();
}

function _getStyle(classNameExpression) {
  var cache = _styleSheet.__cache || (_styleSheet.__cache = {});

  var className = _getClassName(classNameExpression);

  var classNameArr = className.split(/\s+/);
  var style = cache[className];

  if (!style) {
    style = {};

    if (classNameArr.length === 1) {
      style = _styleSheet[classNameArr[0].trim()];
    } else {
      classNameArr.forEach(function (cls) {
        style = Object.assign(style, _styleSheet[cls.trim()]);
      });
    }

    cache[className] = style;
  }

  return style;
}

export default function Foo(props) {
  return [<View style={_getStyle(__classnames__([]))}></View>, <View style={_getStyle(__classnames__("string"))}></View>, <View style={_getStyle("page-home" + " " + __classnames__([]))}></View>, <View style={_getStyle("hello" + " " + __classnames__([]))}></View>, <View style={_getStyle(id + " " + __classnames__([]))}></View>, <View style={_getStyle(exp() + " " + __classnames__([]))}></View>, <View style={_getStyle("page-home" + " " + __classnames__("string"))}></View>, <View style={_getStyle(exp() + " " + __classnames__("string"))}></View>, <View style={_getStyle(exp() + " " + __classnames__(exp()))}></View>];
}