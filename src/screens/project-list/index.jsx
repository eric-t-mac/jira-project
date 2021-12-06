import React from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { cleanObject } from "utils";
import * as qs from "qs";

// npm start 访问.env.development npm run build 访问.env
const apiUrl = process.env.REACT_APP_API_URL
console.log(">>>apiUrl", apiUrl);

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    });
    const [list, setList] = useState([]);
    const [users, setUsers] = useState([]); 

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
            if (response.ok) {
                setList(await response.json());
            }
        })
    }, [param])
    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json());
            }
        })
    }, [])
    console.log(">>>projects", list);
    console.log(">>>users", users);
    console.log(">>>param", param);

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List users={users} list={list}/>
    </div>
}