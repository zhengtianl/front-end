import React from 'react'
//import ReactDOM from 'react-dom'

const name = 'xiaolu'
const getAge = () =>{
    return 18
}
const flag = true
//表达式
//react完成列表渲染：map =>  equals return
//注意事项：遍历
//key仅仅在内部使用，不会出现在html上
const songs = [{id:1, name:'a'},
{id:2, name:'b'},
{id:3, name:'c'}
]

function App(){
    return (
        <div className='App'>
            {name}
            {getAge()}
            {flag ? '真棒':'真彩'}
            <ul>
            {songs.map(song => <li key = {song.id}>{song.name}</li>)}
            </ul>
        </div>

    )
}

export default App;
