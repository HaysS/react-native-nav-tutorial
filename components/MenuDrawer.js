import React from 'react';
import { 
  Platform, 
  Dimensions, 
  StyleSheet, 
  ScrollView,
  View, 
  Text, 
  TouchableOpacity,
  Image,
} from 'react-native';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends React.Component {
    navLink(nav, text) {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroller}>
                    <View style={styles.topLinks}>
                        <View style={styles.profile}>
                            <View style={styles.imgView}>
                                <Image source={require('../assets/images/hays-profile.jpg')} style={styles.img} />
                            </View>
                            <View style={styles.profileText}>
                                <Text style={styles.name}>Hays Stanford</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomLinks}>
                        {this.navLink('Home', 'Home')}
                        {this.navLink('Links', 'Links')}
                        {this.navLink('Settings', 'Settings')}
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={styles.description}>Menu Tutorial</Text>
                    <Text style={styles.version}>v1.0</Text>
                </View>
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroller: {
    flex: 1,
  },
  profile: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingTop: 25, 
    borderBottomWidth: 1, 
    borderBottomColor: '#777777',
  },
  profileText: {
    flex: 3, 
    flexDirection: 'column', 
    justifyContent: 'center',
  },
  topLinks: {
    height: 160,
    backgroundColor: 'black',
  },
  bottomLinks: {
    flex: 1, 
    backgroundColor: 'white', 
    paddingTop: 10, 
    paddingBottom: 450,
  },
  img: {
    height: 70, 
    width: 70, 
    borderRadius: 50
  },
  imgView: {
    flex: 1,
    paddingLeft: 20, 
    paddingRight: 20
  },
  name: {
    fontSize: 20, 
    paddingBottom: 5, 
    color: 'white', 
    textAlign: 'left'
  },
  footer: {
    height: 50, 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    borderTopWidth: 1, 
    borderTopColor: 'lightgray',
  },
  version: {
    flex: 1, 
    textAlign: 'right', 
    marginRight: 20, 
    color: '#9b9b9b'
  },
  description: {
    flex: 1, 
    marginLeft: 20, 
    fontSize: 16
  },
  link: {
    flex: 1, 
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
  },
})
