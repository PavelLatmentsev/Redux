import * as actionsTypes from "./actionTypes"
export function compleatedTask(id) {
    return { type: actionsTypes.taskUpdated, payload: { id, completed: true }, }
}

export function changeTitle(id) {
    return { type: actionsTypes.taskUpdated, payload: { id, title: `New Title for ${id}` } }
}
export function deleteTitle(id) {
    return { type: actionsTypes.taskDeleted, payload: { id } }
}