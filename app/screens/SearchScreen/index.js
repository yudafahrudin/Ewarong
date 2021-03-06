/* eslint-disable arrow-parens */
import React, {Component} from 'react';
import SearchContainer from './containers/SearchContainer';

class SearchScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Cari Kios Ewarong',
    headerStyle: {
      backgroundColor: '#FD6A00',
    },
    headerTintColor: '#fff',
  });

  navigateTo = (screen) => {
    this.props.navigation.navigate(screen);
  };

  render() {
    return (
      <SearchContainer
        navigation={this.props.navigation}
        navigate={this.navigateTo}
      />
    );
  }
}

export default SearchScreen;
