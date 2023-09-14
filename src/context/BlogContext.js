import React, {createContext, useState , useReducer} from "react";



const BlogContext = createContext()

const memoReducer = (state,action) => {
    switch (action.type) {
        case 'add-memo':
            return [...state,{title: `Memo #${state.length + 1} `}] 
        default:
            return state
    }
}
export const BlogProvider = ({children}) => {
    const [memoLists, dispatch] = useReducer(memoReducer,[])

    const addMemo = () => {dispatch({type: 'add-memo'})}
    //const [memoLists, setMemoLists] = useState([])

    // const addMemmo = () => {
    //     setMemoLists([...memoLists,{title: `Memo #${memoLists.length + 1}`}])
    // }

    return (
        <BlogContext.Provider value={{data:memoLists, addMemo}}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext
