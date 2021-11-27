import { ActionCreator } from 'redux';
import { State } from '../typings';
export declare const resetStateAction: ActionCreator<void>;
export declare const mergeStateAction: ActionCreator<State>;
export declare const setStateAction: ActionCreator<State>;
export declare const setStateAtPathAction: ActionCreator<State>;
