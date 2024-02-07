import * as Dialog from "@radix-ui/react-dialog";
import { X } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from 'sonner'

export function NewNoteCard () {
    const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
    const [content, setContent] = useState('');

    function handleStartEditor () {
      setShouldShowOnboarding(false)
    }
    
    function handleContentChanged (event: ChangeEvent<HTMLTextAreaElement>) {
      if (event.target.value === '') {
        setShouldShowOnboarding(true)
      }
      setContent(event.target.value);
    }

    function handleSaveNote (event: FormEvent) {
      event.preventDefault()
      content!=='' ? toast.success('Nota criada com sucesso!') : toast.error('Voce não pode adicionar uma nota vazia.')
    }

    return (
      <Dialog.Root>
      <Dialog.Trigger className='rounded-md text-left flex flex-col bg-slate-800 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>

          <span className='text-sm font-medium text-slate-300 text-transform: capitalize'>Adicionar nota</span>

          <p className='text-sm leading-6 text-slate-400'>Grave uma nota em áudio que será convertido para texto automaticamente.</p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
      </Dialog.Trigger>
      <Dialog.Portal>
          <Dialog.Overlay className='inset-0 fixed bg-black/60'></Dialog.Overlay>
          <Dialog.Content className='overflow-hidden fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col ontline-none'>
              
              <Dialog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover: text-slate-100'>
                  <X className='size-5'/>
              </Dialog.Close>
              

              <form onSubmit={handleSaveNote} className="flex flex-1 flex-col">
                <div className='flex flex-1 flex-col gap-3 p-5'>
                    <span className='text-sm font-medium text-slate-300'>Adicionar nota</span>

                    {shouldShowOnboarding ? (
                      <p className='text-sm leading-6 text-slate-400'>Comece <button type='button' className='font-medium text-lime-400 hover:underline'>gravando uma nota</button> em áudio ou se preferir <button type='button' onClick={handleStartEditor} className='font-medium text-lime-400 hover:underline'>utilize apenas texto</button>.</p>
                    ) : (
                      <textarea
                        autoFocus
                        className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                        onChange={handleContentChanged}
                      />
                    )}
                </div>

                <button type='submit' className='w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium group hover:bg-lime-500'>Salvar nota</button>
              </form>
          </Dialog.Content>
      </Dialog.Portal>
  </Dialog.Root>
    )
}
