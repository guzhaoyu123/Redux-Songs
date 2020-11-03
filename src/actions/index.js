export const CreateSelectedSong=(title,duration) => {
    return{
        type:'CREATE_SELECTED',
        payload:{
            title:title,
            duration:duration
        }
    }
}
