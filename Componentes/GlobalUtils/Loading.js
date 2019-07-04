import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

function Loading(props) {
  if (props.loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={70} color="#1d9eb1" />
      </View>


    );
  } return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(28, 28, 28, 0.6)',
    paddingHorizontal: 150,
    paddingVertical: 270,

  },
});

function mapStateToProps(state) {
  return { loading: state.reducerLoading.loading };
}

export default connect(mapStateToProps, null)(Loading);
