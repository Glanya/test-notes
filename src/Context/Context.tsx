import React from 'react';
import { INote } from '../Interfaces/Interfaces';

interface INoteContext {
  removeNote: (id: string) => void;
  handleOpenNote: (note: INote) => void;
}

interface IRemoveTagContext {
  removeTag: (tag: string) => void;
}

export const NoteContext = React.createContext<INoteContext>({ removeNote: () => {}, handleOpenNote: () => {} });
export const NotesContext = React.createContext(JSON.parse(localStorage.getItem('data')!) || []);
export const RemoveTagContext = React.createContext<IRemoveTagContext>({ removeTag: () => {} });
