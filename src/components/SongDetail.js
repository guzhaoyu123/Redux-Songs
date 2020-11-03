import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongDetail extends Component {
    render() {
        return <div>
            <h3>Details for:</h3>
            <p>
                Title:{this.props.SongDetail.title}
                <br/>
                Duration:{this.props.SongDetail.duration}
            </p>
        </div>
    }
}


const mapStateToProps = (state) => {
    return {
        SongDetail: state.SelectedSong
    }
}

export default connect(mapStateToProps)(SongDetail)