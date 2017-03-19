import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

const Loading = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating
        size={props.size}
        {...props}
        style ={styles.container}
      />
    </View>
  );
};

Loading.propTypes = {
  size: React.PropTypes.string,
};

Loading.defaultProps = {
  size: 'large',
  color:'#ffffff'
};
export default Loading;
