import React from 'react';
import { INote } from '../Interfaces/Interfaces';

interface IRemoveNoteContext {
  removeNote: (id: string) => void;
}

interface IOpenNoteContext {
  handleOpenNote: (note: INote) => void;
}

export const RemoveNoteContext = React.createContext<IRemoveNoteContext>({removeNote: () => {}});

export const OpenNoteContext = React.createContext<IOpenNoteContext>({ handleOpenNote: () => {}});
