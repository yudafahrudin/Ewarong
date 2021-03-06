/* eslint-disable arrow-parens */
import React, {Component} from 'react';
import _ from 'lodash';
import ReportContainer from './containers/ReportContainer';

class ReportScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('header'),
    headerStyle: {
      backgroundColor: '#FD6A00',
    },
    headerTintColor: '#fff',
  });

  navigateTo = (screen, param) => {
    this.props.navigation.navigate(screen, param);
  };

  render() {
    return <ReportContainer navigate={this.navigateTo} />;
  }
}

export default ReportScreen;
