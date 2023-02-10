import { atom, createStore, useAtom } from "jotai";

export const storage = createStore()

export const darkModeAtom = atom<boolean>(true)