import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyVal} style={styles.note}>
        <Text style={styles.noteText}>{this.val.date}</Text>
        <Text style={styles.noteText}>{this.val.note}</Text>
        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}>
          <Text style={noteDeleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'absolute',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#e91e63',
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDelete: {
    color: 'white',
  },
});
