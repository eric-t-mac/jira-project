import { useArray, useMount } from "utils";
import React from "react";

export const TsReactTest = () => {
    const persons: { name: string; age: number;}[] = [
        {name: "jack", age: 25},
        {name: "ma", age: 22},
    ]
    const {value, clear, removeIndex, add} = useArray(persons);
    useMount(() => {
        // 类型“{ name: string; age: number; }[]”上不存在属性“notExist”。
        // console.log(value.notExist);

        // 类型 "{ name: string; }" 中缺少属性 "age"，
        // 但类型 "{ name: string; age: number; }" 中需要该属性。
        // add({ name: "david" });

        // 类型“string”的参数不能赋给类型“number”的参数。
        // removeIndex("123");
    });
    return ( 
        <div>
            {/* 点击以后增加 join */}
            <button onClick={() => add({name: "john",age : 2})}>add john</button>
            {/* 点击以后删除第一项 */}     
            <button onClick={() => removeIndex(0)}>remove 0</button>
            {/* 点击以后情况列表 */}
            <button style={{marginBottom: '58px'}} onClick={() => clear()}>clear</button>
            {value.map((person: {age: number, name: string}, index: number) => (
                <div style={{marginBottom: '30px'}}>
                    <span style={{color: 'red'}}>{index}</span>
                    <span>{person.name}</span>
                    <span>{person.age}</span>
                </div>
            ))}
        </div>
    )
}