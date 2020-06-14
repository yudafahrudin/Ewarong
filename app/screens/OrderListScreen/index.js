/* eslint-disable arrow-parens */
import React, {Component} from 'react';
import _ from 'lodash';
import OrderListContainer from './containers/OrderListContainer';

class OrderListScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `PESANANKU`,
    headerStyle: {
      backgroundColor: '#FD6A00',
    },
    headerTintColor: '#fff',
  });

  navigateTo = (screen) => {
    this.props.navigation.navigate(screen);
  };

  render() {
    return <OrderListContainer navigate={this.navigateTo} />;
  }
}

export default OrderListScreen;