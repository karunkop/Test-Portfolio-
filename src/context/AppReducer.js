export default (state, action) => {
    switch (action.type) {
        case "NEXT_PAGE":
            return {
                ...state,
                globalIndex: state.globalIndex === 3 ? state.globalIndex : state.globalIndex + 1,
            };
        case "PREV_PAGE":
            return {
                ...state,
                globalIndex: state.globalIndex === 0 ? state.globalIndex : state.globalIndex - 1,
            };
        default:
            return state;
    }
};
