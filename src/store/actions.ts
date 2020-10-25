//Actions
import { TestActionRequest } from './types';

export const testAction = (): TestActionRequest => ({
    type: 'test',
});

