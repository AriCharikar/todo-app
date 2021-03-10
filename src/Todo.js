import { Button, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { db } from './firebase_config';
import './App.css';

function Todo({ todo, inProgress, id }) {

    const toggleProgress = () => {
        db.collection('todos').doc(id).update({
            inProgress: !inProgress
        })
    }

    const deleteTodo = () => {
        db.collection('todos').doc(id).delete();
    }

    return (
        <div className="listItem" style={{display: 'flex'}}>
            <ListItem>
                <ListItemText primary={todo} secondary={inProgress ? 'In progress' : 'Completed'} />
            </ListItem>

            <Button onClick={toggleProgress} >{inProgress ? 'Done' : 'Undone'}</Button>
            <Button onClick={deleteTodo}>X</Button>
        </div>
    )
}

export default Todo
