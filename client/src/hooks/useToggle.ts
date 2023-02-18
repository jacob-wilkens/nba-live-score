import type { Reducer } from 'react';
import { useReducer } from 'react';

const toggleReducer = (state: boolean, nextValue?: unknown) => (typeof nextValue === 'boolean' ? nextValue : !state);

export const useToggle = (initialValue: boolean): [boolean, (nextValue?: unknown) => void] => useReducer<Reducer<boolean, unknown>>(toggleReducer, initialValue);
