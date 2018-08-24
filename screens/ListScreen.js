import * as React from 'react';
import { Text, View } from 'react-native';
import { Constants } from 'expo';

import { List, ListItem } from 'react-native-elements'

const list = [
    {
      name: 'Praia de Canoa Quebrada, Aracati',
      avatar_url: 'https://viagenscinematograficas.com.br/wp-content/uploads/2015/01/Praia-Canoa-Quebrada-Ceara-1-1.jpg',
      subtitle: 'Ceara'
    },
    {
      name: 'Praia de Morro Branco, Beberibe',
      avatar_url: 'https://viagenscinematograficas.com.br/wp-content/uploads/2015/01/Praia-Morro-Branco-Labirinto-Falesias-1.jpg',
      subtitle: 'Ceara'
    },
    {
      name: '',
      avatar_url: '',
      subtitle: ''
    },
    {
      name: '',
      avatar_url: '',
      subtitle: ''
    },
    {
      name: '',
      avatar_url: '',
      subtitle: ''
    },
    {
      name: '',
      avatar_url: '',
      subtitle: ''
    },
    {
      name: '',
      avatar_url: '',
      subtitle: ''
    },
    {
      name: '',
      avatar_url: '',
      subtitle: ''
    },
    {
      name: '',
      avatar_url: '',
      subtitle: ''
    },
    {
      name: '',
      avatar_url: '',
      subtitle: ''
    },
    {
      name: '',
      avatar_url: '',
      subtitle: ''
    },
    
  ]

  export default class App extends React.Component {
    render() {
      return (
        <List containerStyle={{marginBottom: 20}}>
    {
      list.map((l) => (
        <ListItem
          roundAvatar
          avatar={{uri:l.avatar_url}}
          key={l.name}
          title={l.name}
        />
      ))
    }
  </List>
      );
    }
  }