import React from 'react';
import { connect } from 'react-redux';
import { newFeedsAC } from '../../redux/mainPageReducers';
import MainPage from './MainPage';

class MainPageContainer extends React.Component {

    componentDidMount() {
        fetch('https://cnews.ru/inc/rss/news.xml').then((res) => {
            res.text().then((txt) => {
                let parser = require('fast-xml-parser');
                let jsonObj = parser.parse(txt);
                let feedObj = jsonObj.rss.channel.item.slice(0, 10)
                feedObj.forEach((item, i) => {
                    item.id = i + 1;
                });
                console.log(feedObj)
                feedObj.map(item => {
                    this.props.newFeedsAC(item)
                })
                console.log('mount')
            })
        }).catch(() => console.error('Error in fetching the website'))
    }


    render() {
        return (
            <MainPage feeds={this.props.feeds} />
        )
    }
}

let mapStateToProps = (state) => ({
    feeds: state.feeds.feeds.slice(0, 10),
})

export default connect(mapStateToProps, { newFeedsAC })(MainPageContainer);



