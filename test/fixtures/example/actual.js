import { createElement } from 'react';

export default function Foo(props) {
  return [
    <View x-class={[]}></View>,
    <View x-class="string" ></View>,
    <View x-class={[]} className="page-home"></View>,
    <View x-class={[]} className={"hello"}></View>,
    <View x-class={[]} className={id}></View>,
    <View x-class={[]} className={exp()}></View>,
    <View x-class="string" className="page-home"></View>,
    <View x-class="string" className={exp()}></View>,
    <View x-class={exp()} className={exp()}></View>,
  ];
}
