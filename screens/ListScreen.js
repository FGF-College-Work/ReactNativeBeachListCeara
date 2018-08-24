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
      name: 'Praia de Ponta Grossa, Icapuí',
      avatar_url: 'https://viagenscinematograficas.com.br/wp-content/uploads/2015/01/Praia-Majorlandia-Canoa-Quebrada-1.jpg',
      subtitle: 'Ceara'
    },
    {
      name: 'Praia de Jericoacoara, Jijoca de Jericoacoara',
      avatar_url: 'https://viagenscinematograficas.com.br/wp-content/uploads/2015/01/Praia-Jericoacoara-Ceara-1.jpg',
      subtitle: 'Ceara'
    },
    {
      name: 'Praia da Lagoa do Paraíso, Jericoacoara',
      avatar_url: 'https://viagenscinematograficas.com.br/wp-content/uploads/2015/01/Lagoa-Paraiso-Jericoacoara-1.jpg',
      subtitle: 'Ceara'
    },
    {
      name: 'Praia de Cumbuco, Caucaia',
      avatar_url: 'https://viagenscinematograficas.com.br/wp-content/uploads/2015/01/Praia-Ceara-Cumbuco-1.jpg',
      subtitle: 'Ceara'
    },
    {
      name: 'Praia da Lagoinha, Paraipaba',
      avatar_url: 'https://viagenscinematograficas.com.br/wp-content/uploads/2015/01/Praia-Lagoinha-Ceara-1.jpg',
      subtitle: 'Ceara'
    },
    {
      name: 'Praia da Lagoa Azul, Jijoca de Jericoacoara ',
      avatar_url: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/8a/61/9e/redinhas.jpg',
      subtitle: 'Ceara'
    },
    {
      name: 'Praia do Futuro, Fortaleza',
      avatar_url: 'https://viagenscinematograficas.com.br/wp-content/uploads/2015/01/Praia-do-Futuro-Ceara.jpg',
      subtitle: 'Ceara'
    },
    {
      name: 'Praia do Meireles ou Praia de Iracema, Fortaleza',
      avatar_url: 'https://viagenscinematograficas.com.br/wp-content/uploads/2015/01/Fortaleza-Praia-Meireles.jpg',
      subtitle: 'Ceara'
    },
    {
      name: 'Praia de Bitupitá, Barroquinha',
      avatar_url: 'https://viagenscinematograficas.com.br/wp-content/uploads/2015/01/Bitupita-Ceara-1.jpg',
      subtitle: 'Ceara'
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