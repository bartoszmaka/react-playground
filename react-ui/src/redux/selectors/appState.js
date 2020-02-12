import { get } from 'lodash';

export const getCurrentUser = state => get(state, 'appState.currentUser')
