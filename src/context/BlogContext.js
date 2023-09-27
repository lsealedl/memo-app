import createDataContext from "./createDataContext";

const memoReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "del-memo":
            return state.filter((memo)=>memo.id!=action.payload);
        case "add-memo":
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content,
                },
            ];
        default:
            return state;
    }
};

const addMemo = (dispatch) => {
    return (title, content) => {
        dispatch({ type: "add-memo", payload: { title, content } });
    };
};
const delMemo = dispatch => {
    return (id) => dispatch({ type: 'del-momo', payload: id })
}
export const { Context, Provider } = createDataContext(
    memoReducer,
    { addMemo ,delMemo},
    []
);