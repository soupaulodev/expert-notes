import logo from './assets/logo-nlw-expert.svg'
import { NewNoteCard } from './components/new-note-card';
import { NoteCard } from './components/note-card';

const dataCard = {
  title: 'Há 2 dias',
  note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In optio hic obcaecati? Veniam laboriosam fugiat quisquam culpa eum recusandae vero itaque. Aspernatur autem ratione suscipit eveniet. Explicabo temporibus provident sapiente?'
}

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt='NLW Expert'/>
      <form className="w-full" action="">
        <input 
          type="text" 
          placeholder='Busque em suas notas'
          className='w-full bg-transparent text-3xl font-semibold -tracking-tight outline-none placeholder:text-slate-500'
        />
      </form>
      <div className='h-px bg-slate-400' />
      
      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <NewNoteCard />
        
        <NoteCard title={dataCard.title} note={dataCard.note} />

        <NoteCard title={dataCard.title} note={dataCard.note} />

        <NoteCard title={dataCard.title} note={dataCard.note} />
        
        <NoteCard title={dataCard.title} note={dataCard.note} />
        
        <NoteCard title={dataCard.title} note={dataCard.note} />
        

      </div>
    </div>
  )
}
