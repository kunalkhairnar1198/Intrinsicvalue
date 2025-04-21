import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import CustomeHeader from '../../../components/Header/CustomeHeader';
import LeaderboardCard from '../../../components/LeaderBoardComponent/LeaderboardCard';
import ModalContent from '../../../components/LeaderBoardComponent/ModalContent';
import LeaderBoardButton from '../../../components/LeaderBoardComponent/LeaderBoardButton';

const leaderboardData = {
  '1 Week': [
    {
      absolute_return: 66.25,
      user: [
        {
          first_name: 'Khirsagar',
        },
      ],
      stock: {
        name: 'Tecil Chemicals & Hydro Power Ltd.',
        symbol: 'TECILCHEM',
      },
    },
    {
      absolute_return: 30.0,
      user: [
        {
          first_name: 'Khirsagar',
        },
      ],
      stock: {
        name: 'One Point One Solutions Ltd.',
        symbol: 'ONEPOINT',
      },
    },
    {
      absolute_return: 16.42,
      user: [
        {
          first_name: 'Sagar',
        },
      ],
      stock: {
        name: 'Micropro Software Solutions Ltd.',
        symbol: 'MICROPRO',
      },
    },
    {
      absolute_return: 15.94,
      user: [
        {
          first_name: 'Sagar',
        },
      ],
      stock: {
        name: 'Shri Techtex Ltd.',
        symbol: 'SHRITECH',
      },
    },
    {
      absolute_return: 14.88,
      user: [
        {
          first_name: 'Adway',
        },
      ],
      stock: {
        name: 'Archean Chemical Industries Ltd.',
        symbol: 'ACI',
      },
    },
    {
      absolute_return: 10.58,
      user: [
        {
          first_name: 'Akash',
        },
      ],
      stock: {
        name: 'Jyothy Labs Ltd.',
        symbol: 'JYOTHYLAB',
      },
    },
    {
      absolute_return: 9.86,
      user: [
        {
          first_name: 'Sushant',
        },
      ],
      stock: {
        name: 'Transformers & Rectifiers (India) Ltd.',
        symbol: 'TARIL',
      },
    },
    {
      absolute_return: 9.61,
      user: [
        {
          first_name: 'Sushant',
        },
      ],
      stock: {
        name: 'Kitex Garments Ltd.',
        symbol: 'KITEX',
      },
    },
    {
      absolute_return: 9.49,
      user: [
        {
          first_name: 'HEMANTA KUMAR',
        },
        {
          first_name: 'Sushant',
        },
      ],
      stock: {
        name: 'Kaynes Technology India Ltd.',
        symbol: 'KAYNES',
      },
    },
    {
      absolute_return: 9.21,
      user: [
        {
          first_name: 'prosecution cell',
        },
      ],
      stock: {
        name: 'Prataap Snacks Ltd.',
        symbol: 'DIAMONDYD',
      },
    },
  ],
  '1 Month': [
    {
      absolute_return: 93.84,
      user: [
        {
          first_name: 'Khirsagar',
        },
      ],
      stock: {
        name: 'Tecil Chemicals & Hydro Power Ltd.',
        symbol: 'TECILCHEM',
      },
    },
    {
      absolute_return: 48.17,
      user: [
        {
          first_name: 'prosecution cell',
        },
        {
          first_name: 'Prayank',
        },
      ],
      stock: {
        name: 'BSE Ltd.',
        symbol: 'BSE',
      },
    },
    {
      absolute_return: 39.53,
      user: [
        {
          first_name: 'Sushant',
        },
      ],
      stock: {
        name: 'Transformers & Rectifiers (India) Ltd.',
        symbol: 'TARIL',
      },
    },
    {
      absolute_return: 37.44,
      user: [
        {
          first_name: 'Sushant',
        },
      ],
      stock: {
        name: 'Kitex Garments Ltd.',
        symbol: 'KITEX',
      },
    },
    {
      absolute_return: 36.31,
      user: [
        {
          first_name: 'Sushant',
        },
      ],
      stock: {
        name: 'Websol Energy System Ltd.',
        symbol: 'WEBELSOLAR',
      },
    },
    {
      absolute_return: 29.79,
      user: [
        {
          first_name: 'Sushant',
        },
      ],
      stock: {
        name: 'Power Mech Projects Ltd.',
        symbol: 'POWERMECH',
      },
    },
    {
      absolute_return: 27.55,
      user: [
        {
          first_name: 'Sagar',
        },
      ],
      stock: {
        name: 'SILGO Retail Ltd.',
        symbol: 'SILGO',
      },
    },
    {
      absolute_return: 25.44,
      user: [
        {
          first_name: 'prosecution cell',
        },
      ],
      stock: {
        name: 'Indraprastha Medical Corporation Ltd.',
        symbol: 'INDRAMEDCO',
      },
    },
    {
      absolute_return: 24.5,
      user: [
        {
          first_name: 'Prayank',
        },
        {
          first_name: 'Kushal',
        },
      ],
      stock: {
        name: 'BEML Ltd.',
        symbol: 'BEML',
      },
    },
    {
      absolute_return: 23.71,
      user: [
        {
          first_name: 'Kushal',
        },
      ],
      stock: {
        name: 'PNB Housing Finance Ltd.',
        symbol: 'PNBHOUSING',
      },
    },
  ],
  '1 Year': [
    {
      absolute_return: 585.67,
      user: [
        {
          first_name: 'Kushal',
        },
      ],
      stock: {
        name: 'Pashupati Cotspin Ltd.',
        symbol: 'PASHUPATI',
      },
    },
    {
      absolute_return: 399.51,
      user: [
        {
          first_name: 'Kaustubh',
        },
      ],
      stock: {
        name: 'PG Electroplast Ltd.',
        symbol: 'PGEL',
      },
    },
    {
      absolute_return: 283.73,
      user: [
        {
          first_name: 'Sushant',
        },
      ],
      stock: {
        name: 'Shakti Pumps (India) Ltd.',
        symbol: 'SHAKTIPUMP',
      },
    },
    {
      absolute_return: 224.86,
      user: [
        {
          first_name: 'Sushant',
        },
      ],
      stock: {
        name: 'Kitex Garments Ltd.',
        symbol: 'KITEX',
      },
    },
    {
      absolute_return: 191.05,
      user: [
        {
          first_name: 'Sagar',
        },
      ],
      stock: {
        name: 'Sky Gold and Diamonds Ltd.',
        symbol: 'SKYGOLD',
      },
    },
    {
      absolute_return: 165.82,
      user: [
        {
          first_name: 'Sagar',
        },
      ],
      stock: {
        name: 'Shaily Engineering Plastics Ltd.',
        symbol: 'SHAILY',
      },
    },
    {
      absolute_return: 137.51,
      user: [
        {
          first_name: 'Sushant',
        },
      ],
      stock: {
        name: 'Wockhardt Ltd.',
        symbol: 'WOCKPHARMA',
      },
    },
    {
      absolute_return: 132.18,
      user: [
        {
          first_name: 'Khirsagar',
        },
      ],
      stock: {
        name: 'Future Market Networks Ltd.',
        symbol: 'FMNL',
      },
    },
    {
      absolute_return: 114.74,
      user: [
        {
          first_name: 'Sagar',
        },
      ],
      stock: {
        name: 'Avonmore Capital & Management Services Ltd.',
        symbol: 'AVONMORE',
      },
    },
    {
      absolute_return: 114.68,
      user: [
        {
          first_name: 'Prajapati',
        },
        {
          first_name: 'Kuladip ',
        },
      ],
      stock: {
        name: 'One97 Communications Ltd.',
        symbol: 'PAYTM',
      },
    },
  ],
};

const LeaderboardScreen = ({navigation, route}) => {
  const [selectedPeriod, setSelectedPeriod] = useState('1 Week');
  const [modalVisible, setModalVisible] = useState(false);
  const [otherUsers, setOtherUsers] = useState([]);

  const handleOpenModal = users => {
    // console.log(users);
    setOtherUsers(users);
    setModalVisible(true);
  };
  // console.log('leader', leaderboardData);
  const dataToRender = leaderboardData[selectedPeriod] || [];

  return (
    <View style={styles.container}>
      <CustomeHeader navigation={navigation} title={route.name} />

      <LeaderBoardButton
        selected={selectedPeriod}
        onSelect={setSelectedPeriod}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={dataToRender}
          keyExtractor={(_, i) => i.toString()}
          scrollEnabled={true}
          contentContainerStyle={{paddingBottom: 16}}
          renderItem={({item, index}) => (
            <LeaderboardCard
              index={index}
              item={item}
              onOthersPress={handleOpenModal}
            />
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No data available.</Text>
          }
        />
      </View>

      <ModalContent
        visible={modalVisible}
        users={otherUsers}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    padding: 10,
    overflow: 'hidden',
  },
});

export default LeaderboardScreen;
