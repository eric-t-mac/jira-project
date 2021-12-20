import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => value === 0 ? false : !value

// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object: object) => {
    // Oject.assign({}, object)
    const result = {...object};
    Object?.keys(result).forEach(key => {
        // 0
        // @ts-ignore
        const value = result[key];
        if (isFalsy(value)) {
            // @ts-ignore
            delete result[key];
        }
    })
    return result;
}

// 减少满屏的空数组的useEffect呈现
export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback();
    }, [])
}

export const useDebounce = (value: unknown, delay?: number): any => {
    // let timer;
    // return (...param) => {
    //     if(timer) {
    //         clearTimeout(timer);
    //     }
    //     timer = setTimeout(()=>{
    //         return value;
    //     }, delay)
    // }
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // 每次在value变化以后， 设置一个定时器
        const timeout = setTimeout(() => setDebouncedValue(value), delay);
        // 每次在上一个useEffect处理完以后再运行
        return () => clearTimeout(timeout);
    }, [value, delay])

    return debouncedValue;
}