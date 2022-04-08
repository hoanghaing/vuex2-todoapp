export const REMOVE_ITEM_FROM_TASK = (state, deleteItem) => {
    state.task = state.task.filter(item => {
        return item.task.id !== deleteItem.id
    })
}