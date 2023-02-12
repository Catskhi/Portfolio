import { atom } from "jotai";

export const languageAtom = atom<string>(window.navigator.language)