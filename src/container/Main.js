import { Grid } from '@mui/material';
import React, { useState } from 'react'
import Board from '../components/Board';
import Card from '../components/Card';
import './main.css';

function Main() {

    const [{ items1 }, setItems1] = useState({ items1: [] });
    const [{ items2 }, setItems2] = useState({ items2: [] });
    const [{ items3 }, setItems3] = useState({ items3: [] });
    const [count, setCount] = useState(0);

    const addItemInNotStarted = () => {
        setCount(count + 1);
        items1.push(
            <>
                <Card id={"card-" + count} name={"Card " + count} className="card text-black" draggable="true">
                    <div className='flex justify-between'>
                        <p>Card {count}</p>
                    </div>
                </Card>
            </>
        );
        setItems1({ items1: [...items1] });
        console.log(items1)
    };

    const addItemInProgress = () => {
        setCount(count + 1);
        items2.push(
            <Card id={"card-" + count} name={"Card " + count} className="card text-black" draggable="true">
                <p>Card {count}</p>
            </Card>
        );
        setItems2({ items2: [...items2] });
    };

    const addItemCompleted = () => {
        setCount(count + 1);
        items3.push(
            <Card id={"card-" + count} name={"Card " + count} className="card text-black w-full" draggable="true">
                <p>Card {count}</p>
            </Card>
        );
        setItems3({ items3: [...items3] });
    };

    return (
        <div className="App">
            <h1 className='text-center text-4xl font-bold mt-10'>Drag and Drop</h1>
            <main className='flexbox'>
                <Grid container>
                    <Grid xs={12} md={4} lg={4} className="p-2">
                    <Board id="board-1" className="board">
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <p className='mb-5 text-black bg-pink-200 p-2 rounded-md text-left'>NOT STARTED</p>
                            <p className='text-slate-400 p-2'>{items1.length}</p>
                        </div>
                        <div>
                            <button className='text-slate-400 text-3xl' onClick={addItemInNotStarted}>
                                +</button>
                        </div>
                    </div>
                    {items1}
                </Board>
                    </Grid>
                    <Grid xs={12} md={4} lg={4} className="p-2">
                    <Board id="board-2" className="board">
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <p className='mb-5 text-black bg-yellow-200 p-2 rounded-md text-left'>IN-PROGRESS</p>
                            <p className='text-slate-400 p-2'>{items2.length}</p>
                        </div>
                        <div>
                            <button className='text-slate-400 text-3xl' onClick={addItemInProgress}>
                                +</button>
                        </div>
                    </div>
                    {items2}
                </Board>
                    </Grid>
                    <Grid xs={12} md={4} lg={4} className="p-2">
                    <Board id="board-3" className="board">
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <p className='mb-5 text-black bg-green-200 p-2 rounded-md text-left'>COMPLETED</p>
                            <p className='text-slate-400 p-2'>{items3.length}</p>
                        </div>
                        <div>
                            <button className='text-slate-400 text-3xl' onClick={addItemCompleted}>
                                +</button>
                        </div>
                    </div>
                    {items3}
                </Board>
                    </Grid>
                </Grid>
                

                

                
            </main>
        </div>
    )
}
export default Main
