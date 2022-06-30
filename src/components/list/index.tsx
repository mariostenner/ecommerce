import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import CardListComponent from './card';
const ListComponent = ({arrayList, screentosee, navigation}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={arrayList}
        renderItem={item => (
          <CardListComponent
            navigation={navigation}
            screen={screentosee}
            testArray={item.item}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ListComponent;
