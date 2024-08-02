import React, { useState, useEffect } from 'react';
import { Treebeard } from 'react-treebeard';
import api from '../service/api';
import '../styles/App.css';

const Tree = () => {
  const [data, setData] = useState({});
  const [cursor, setCursor] = useState(null); 

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await api.get('/files');
      
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch files:", error);
      
    }
  };

  const onToggle = (node, toggled) => {
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    setCursor(node);
    setData({...data}); 
  };

  return (
    <div className="tree-container">
      <Treebeard 
        data={data} 
        onToggle={onToggle} 
        
      />
    </div>
  );
};

export default Tree;
