import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import Notes from './components/notes'
import CreateArea from './components/CreateArea';
import { useState } from 'react';


function App() {

  const [notes, setNotes] = useState([]);
  function addNote(newNote){

    setNotes(prevNotes =>{
      return [...prevNotes, newNote]
    })
  }
  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((noteItem, index)=>{
        return index !== id;
      })
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <CreateArea
        onAdd = {addNote} />
       { notes.map((noteItem, index) => {
          return <Note key={index} id={index} title= {noteItem.title} content = {noteItem.content} onDelete = {deleteNote}/>
        })}
      </header>
     
      <Footer />
    </div>
  );
}

export default App;
