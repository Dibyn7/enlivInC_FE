import { actionTypes } from './action';
const { SET_THEME } = actionTypes;
const getInitialState = () => ({
    theme: 'dark',
});
const app = (state = getInitialState(), { type, payload }) => {
    switch (type) {
        case SET_THEME:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};
export default app;