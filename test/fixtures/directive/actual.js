import { createElement } from 'react';

export default function Foo(props) {
  return [
    <View classList={[]}></View>,
    <View classList="string" ></View>,
    <View classList={[]} className="page-home"></View>,
    <View classList={[]} className={"hello"}></View>,
    <View classList={[]} className={id}></View>,
    <View classList={[]} className={exp()}></View>,
    <View classList="string" className="page-home"></View>,
    <View classList="string" className={exp()}></View>,
    <View classList={exp()} className={exp()}></View>,
  ];
}
