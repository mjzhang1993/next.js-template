/*
  页面组件，也相当于容器组件
*/

import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AboutCom from '../components/About/index';
import initializeStore from '../store/initializeStore';
import { changeCount } from '../modules/about/actions';

class About extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      const { about: { count }, changeCount } = this.props;
      return <AboutCom count={count} changeCount={changeCount} />;
   }
}
// const About = ({ about: { count }, changeCount }) => <AboutCom count={count} changeCount={changeCount} />;

const connectedPage = connect(
   state => ({ about: state.about }),
   dispatch => ({
      changeCount: bindActionCreators(changeCount, dispatch)
   })
)(About);

export default withRedux(initializeStore)(connectedPage);
