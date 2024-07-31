import {View, Text, TextInput, FlatList, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../../components/ui/customButton';
import Colors from '../../theme/colors';
import screenStyle from '../../styles/screenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
} from '../../store/actions/charactersActions';
import SearchItem from '../../components/characters/searchItem';

export default function SearchCharacters() {
  const dispatch = useDispatch();
  //use selector ile karakterlere abone oluyoruz.
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );
  //console.log(characterList);

  const [searchText, setSearchText] = useState('');
  //console.warn(searchText);

  useEffect(() => {
    dispatch(getCharacterList(params));
  }, []);

  const handleSubmit = () => {
    dispatch(changeParams({name: searchText}));
  };

  const ListHeaderComponent = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          value={searchText}
          onSubmitEditing={handleSubmit}
          placeholder="Searxh Character"
          style={{
            width: '95%',
            borderWidth: 0.5,
            backgroundColor: Colors.BACKTITLECOLOR,
            borderColor: Colors.BROWN,
            padding: 10,
            height: 40,
            borderRadius: 1000,
          }}
          onChangeText={text => setSearchText(text)}
        />
        <CustomButton
          onPress={() => handleSubmit()}
          title="Search"
          backColor={Colors.GREEN}
          titleColor={Colors.WHITE}
        />
      </View>
    );
  };

  return (
    <View style={screenStyle.container}>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={characterList}
        renderItem={({item}) => <SearchItem item={item} />}
      />
    </View>
  );
}
