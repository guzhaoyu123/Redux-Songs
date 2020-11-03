import { combineReducers } from 'redux'

const SongListReducer = () => {
    return [
        { title: 'halo', duration: '4"15' },
        { title: 'fire', duration: '4"24' },
        { title: 'low', duration: '3"09' },
        { title: 'lie', duration: '3"25' }
    ]
}

const SelectedReducer = (currentSelected = {
    title: 'halo',
    duration: '4:15'
}, action) => {
    if (action.type === 'CREATE_SELECTED') {
        return Object.assign({}, action.payload)
    }
    return currentSelected
}

export default combineReducers({
    SongList: SongListReducer,
    SelectedSong: SelectedReducer
})