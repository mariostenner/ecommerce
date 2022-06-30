import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, Text} from 'react-native';
import MosaicListComponent from './card';

const MosaicComponent = ({testArray, screentosee, navigation}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={testArray}
        renderItem={item => (
          <MosaicListComponent
            navigation={navigation}
            screentosee={screentosee}
            testArray={item.item}
          />
        )}
        numColumns={2}
        style={{margin: 10, alignSelf: 'center'}}
      />
    </SafeAreaView>
  );
};

export default MosaicComponent;
