import React from 'react';
import EditPage from './EditPage';
import { connect } from 'react-redux';
import { newFeedsAC, editPostAC } from '../../redux/mainPageReducers';


class EditPageContainer extends React.Component {

    addPost = value => {
        let newPost = {
            description: value.mainPost,
            title: value.headerPost,
            link: value.link,
            id: 1
        }
        this.props.newFeedsAC(newPost)
        console.log(value)
    }

    editPost = value => {
        let newEditPost = {
            description: value.mainPost,
            title: value.headerPost,
            link: value.link
        }
        this.props.editPostAC(newEditPost)
        console.log(value)
    }
    
    getId = e => {
        let id = e.target.id
        console.log(e)
    }
   
    render() {
        return (
            <EditPage
                addPost={this.addPost}
                editPost={this.editPost}
                feeds={this.props.feeds}
                onSubmit={this.editPost}
                getId={this.getId}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    feeds: state.feeds.feeds.slice(0, 10),
})

export default connect(mapStateToProps, { newFeedsAC, editPostAC })(EditPageContainer);

