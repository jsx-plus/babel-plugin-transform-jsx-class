import { classnames as __classnames__ } from "babel-runtime-jsx-plus";
import { createElement } from 'react';
export default function Foo(props) {
  return [<View className={__classnames__([])}></View>, <View className={__classnames__("string")}></View>, <View className={"page-home" + " " + __classnames__([])}></View>, <View className={"hello" + " " + __classnames__([])}></View>, <View className={id + " " + __classnames__([])}></View>, <View className={exp() + " " + __classnames__([])}></View>, <View className={"page-home" + " " + __classnames__("string")}></View>, <View className={exp() + " " + __classnames__("string")}></View>, <View className={exp() + " " + __classnames__(exp())}></View>];
}
