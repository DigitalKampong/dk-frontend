import { AddCount } from './types';

export const addCount = (payload: number): AddCount => {
    return {
        type: "ADD_COUNT",
        count: payload,
    }
}