import React, { useEffect, useState } from 'react';
import {Treebeard} from 'react-treebeard';
import api from './service/api.js';

const Tree = () => {
    const[data,setData] = useState({});

    useEffect(()=>{
        api.get('/files')
        .then(response => setData(response.data))
        .catch(error => console.error(error));
    },[]);

    return(
        <>
            <Treebeard data={data} />
        </>
    )
}

export default Tree;