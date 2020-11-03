import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateSelectedSong } from '../actions'
class SongList extends Component {
    getListItem() {
        return this.props.SongList.map(item => {
            return (
                <div className='item' key={item.title}>
                    <div className='content'>{item.title}</div>
                    <div className='right floated content'>
                        <button className='ui button primary'
                            onClick={() =>
                                this.props.CreateSelectedSong(item.title, item.duration)
                            }>
                            Select
                        </button>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='ui divided list'>
                {this.getListItem()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        SongList: state.SongList
    }
}
export default connect(mapStateToProps, {
    CreateSelectedSong
})(SongList)
