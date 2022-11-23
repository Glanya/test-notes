import React from 'react';
import { INote } from '../Interfaces/Interfaces';

interface IRemoveNoteContext {
  removeNote: (id: string) => void;
}

interface IOpenNoteContext {
  handleOpenNote: (note: INote) => void;
}

interface IRemoveTagContext {
  removeTag: (tag: string) => void;
}

export const RemoveNoteContext = React.createContext<IRemoveNoteContext>({removeNote: () => {}});

export const OpenNoteContext = React.createContext<IOpenNoteContext>({ handleOpenNote: () => {}});

export const RemoveTagContext = React.createContext<IRemoveTagContext>({ removeTag: () => {}});
