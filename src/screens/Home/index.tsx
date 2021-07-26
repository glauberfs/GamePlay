import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';

import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '15/07 às 18:20h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '15/07 às 18:20h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails');
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <ListHeader 
        title="Partidas agendadas"
        subtitle="total 6"
      />      

      <FlatList 
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment 
              data={item}
              onPress={handleAppointmentDetails}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 60 }}
          style={styles.matches}
          showsHorizontalScrollIndicator={false}
        />
    </Background>
  );
}
