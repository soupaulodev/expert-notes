import { useState } from 'react';
import logo from './assets/logo-nlw-expert.svg'
import { NewNoteCard } from './components/new-note-card';
import { NoteCard } from './components/note-card';
import { Eraser } from 'lucide-react';

interface Note {
  id: string,
  date: Date,
  content: string
}

export function App() {
  const [notes, setNotes] = useState<Note[]>([])

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }

    setNotes([newNote, ...notes])
  }

  function clearNotes () {
    setNotes([])
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt='NLW Expert'/>
      <div className='flex'>
        <form className="w-full" action="">
          <input 
            type="text" 
            placeholder='Busque em suas notas'
            className='w-full bg-transparent text-3xl font-semibold -tracking-tight outline-none placeholder:text-slate-500'
          />
        </form>
        <button type="button" onClick={clearNotes} className='flex flex-row items-center gap-2 text-slate-400 hover:text-red-400'>
          <Eraser className='size-5'/>
          <p className='text-sm text-nowrap'>Apagar tudo</p>
        </button>

      </div>
      <div className='h-px bg-slate-400' />
      
      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <NewNoteCard onNoteCreated={onNoteCreated} />
        
        {notes.map(note => {
          return <NoteCard key={note.id} note={note} />
        })}
      </div>
    </div>
  )
}
