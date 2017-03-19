/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import SearchBar from 'react-native-search-bar';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import {images} from '../../config/images';
import {colors} from '../../config/appstyles';
import {capitalizeFirst} from '../../lib/string';
import {capitalizeAll} from '../../lib/string';
import ListMovie from '../../layout/ListMovie/ListMovie';
import AppRouter from '../../routers/AppRouter';
//import styles from './styles';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TabBarIOS,

} from 'react-native';


var topRateBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA/JJREFUWAnNmU1ME0EUx+dNsQUViMQYTTyISqAgHAx+VI2iJOIHR8WDRg8evHnXBLL4ESRGD54lisGDxItRkYIGYhSI4EVAPqoSoibGGA01ykfpjO+1brLd3ZbdbpVOMtl5b9783293JzPTLTBtaW11eUdyj0jJ9gJj5dhVitWtDfkH7TnUHJSMDQCwrhHv1H1WUxNW8yBHtGy62LYhHHa1oLVd9S3Stc/lCp8Yqj30nvJHAAsv+vN5WL5Cc+UiQenSym/CBVvHaqsmgCkK9zLfC4zw6aIW2+wdYb27eBHsOJZCuCBqTaXoznzExkGK06kQxLnyIcMTWoc1H/Ui88epLrFxnHdbnApFxoO8NHiu+gdVAHk5JZrIhoAsJwViE1mrV9IKECnUpieq2g6uOQTouEiQDa/PlIdUIWpLBg2q7eSaAkCYdMlgsx5i6Zo89MGk3m/XdgwITFwZVmpoN4gp9BRxZ3D8FB0B4vb0aS5P3Ioh0xhzK+Zvo/lR47LddATImGx8d/bQbLyskT6Axnj9VvwZVoJ0MbQQB7COzjDPTV2fwZyWS5qyWGgb3owXOwuw5hqCEjjAq/jxTRkKzam3WAOSSYThAclZwCNk4I1S9dUQbcNRpvhXzXIoAEGwogAYEDTVYqyGk5MZ4G/ORcVw3cF+G3kdhxYqHeWcyW4UWqYVM5uDMO3OGNcG/Y92KBNo2hh4DA4MyvLMiJaNN9o8/wOMclAuykm59TnNACmm2v2dP1h7vccwQC/g1KYclItymmnFA2S4VVVlB4MPy676Y+aEmUiyPtJeHvz5iHLF04gLGB0AlaFfrK2w8UF2PIFk/aRJ2nio2JdIYwHAyNDdfDrTv/5Kp631K1FS0iJNjNmdKI76rABSnM89IztLGx6tIMNJIQ3SQg2fFR2rgPjrSm4JzbqvWRFNFEMapJUoRttnGZAGofBn7eBk2nY1bAEi0HAyULoxtjTsAg7pkiVj2tKwAxjibMrxFvhXI2T1zuwAjpudnK0mUuP+ali+UTvnwYSvpkLpyvjK5k4SyCrmvtOt7J1XoUyupFVi4je47DxBc0Apobi+4yjC0ReqJqrUJh/DPkPGqMNcyyTYEWCJ0n7AW9/RL6VsRbAiVZ/a5MO+AYpR/ZqrZUAbr5h/URMUXujYyYW8LBjbo/riXDcLBk/w1P5ccDg/Vrf/ZTSOtHC0hUInavqNseDXBVxg/QJ4M0h2HH9fHLagbRICj/Gl3+VSnEp0gtEMDCJg+1PcIyo1zjRqymdcAm9KI6IYFGLjo7LnHnp7Y3rSw+gltsgykM6fgCPLDH0LdrkEfTzvS4OHhx/RxXZiIpbYhTQN/4b4A4XDWxo4vdDaAAAAAElFTkSuQmCC';
var nowPayingBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAn1JREFUaAXtlj1IHUEQx2dPn4qFkiJF2hRyTxELQbBLQImBgJ2lnXZ+IApKRNd8YJEuTSCd2FkpBnwPBW1EEBRE1NPCwsbCQrSQ+HXr3sODi/Bu5/Z27zZwB4/bdzN3+//N7O4MQHZlEcgikEUgGIFGWhxtogtVwWcmjS2sGAbwg0H9nj2z+gH7TpJ+aBBPFIexCXMLeVpcbKBrb5MUKporEkjgY90V8HjAgb620uXawPPUhrIgnuAa/pu8gSqnkRZ6UiN4nphgBfDo85UVdpENZpFBZ6pzP8xLly1ORl5oYu+I6+7atPizefbPqxdG7X8VgpS0VvIUDzzc5o7tmUIfUKr6+2UDomui14SR33lo37a/rLSXnV2hQReIL7GVuNYm319z+e+FN/5DHXfdIJ5m70DphXvCTzd93UESIH4C6nR2B0mClIB0dQeJg/jp4Xel3UGaIB6T3x0cxe0OFFb2QKwlh1zMumtZQzLdQdoZ+QeZ75/3st2BUSDPVFLdgYkgfpYidQcmg/hAqO7gfwDxgULvlaFWM4w7zHIHnKmPW2FyTM7IBSOs/wi22kQQHqCJGXngx/CvXPX99P7Ep8uwLARtRoHEKYimgJwRYGOHtGshGOUo47T3yF8u9lst3OXjQHjAaWZk6REqRk5ox2mUyJfzTRyE7wPHJdawM91ZLCdK5nmSS+uaQ4wRuGpRDeGBJ5ERfprCPOTY+OHnrnOZaGPe0Q2CqsoYoSIfXUsrUlUWicTYVWdEqipjhIp8lIHEqcoikRi7CpDYVRkjVOQTZ48oq8oikRi7bEaUVmWMUJFPJBBdVVkkEmNHLy2dVRkjNPPJIpBFIItAKQJPUzfW5odYuT8AAAAASUVORK5CYII=';
var profileBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADzElEQVRoQ+VZXU4bMRD2LD+vpTdIT0A5AckJSk9AIsUWb6UnAE7Q9A3ZkUhO0PQEhBNATgA3aPO6hp1qIi8ym008+xdA9QtI8c7MN3/+xgZR4+r3+18A4EgI0RJC7AHAZxKPiHdCiL9CiAdEnAyHw991qYWqgk5OTlpPT09nQogjANjjyENEAjOx1n4fjUb0f+lVCYBS6gwRT7mGZ60kIAAw0FpflEVQCkC3293b2dm5TlOkrPL0O0oxa22nTDQKA5BSUl6T8ax04YJzadUxxlC9sFchAM7z93Ub70Xir7X2U5FIsAHUnTarXEzpZIw54IaADUApdS6EoG6ziXWhtSZ9wcUC4FrlbVOpk9eduKnEAqCUGgkhjoPuqHfDWGvdDYlkAZBS/tmU9/2CNsZ8rAxAKUXU4FdIUEO/f9VaT9bJDkbgldJnYTMi/jTGnFYCIKWcAsBhQx5eKxYRb4wx7aoAqPssWOWmF+dM4KQQbtpwX5/Weq2N/wUAIlf7rxSFmdZ6bfoGI/Dui/jdt9F3f5BR7iulaG794NXBOEkS4ke1rSiKiPf4fGuutQ4OTcEacABekDmanrhskYNwxaBUH5kjBbu7uw9+FBBxaozpcAwM7ZFS0ojqn7jzOI5bnMmMFQEXhaWBBhFHxpheyMB1v0sprwAgS5vrHWhSA5RSeWfCJI7jHsdbPhAX1Su6T8oADPZ+fz87AvRRXio5YZRe51rrMScaSqljRBzkzBjs1En1FAJAH9G1CgBMM10plUdAJkmSTB8fH2/SqBDw7e3twyiKKM/Tq8cs1jkithu9Vkk1ukgQiLooxiyO43bRNCR7CkfAd5u7qaCBwz8jOFmU7pkLIehqkXUDkSe4EgCvLgYuNbhAyHAq/tMyXi9dxCHXOtpxhIgtV6Bpis3c1eEd1U9ozg3paQxAEcV17a2cQnUZUlZOaQDUTou2vFVGVpFVCABdMSZJQoyRjn56RqIno4G1dly0GB2BOwYA6mILWUKIURRF48vLS/qftVgAnLIfOZzlWQmROypQ+mutnWUBORn7RNrowMqQtxfGEsfiPj8FAVBnQUQiXEFuznIZc5N7fuqFOtZaAPQGRhyHqbOpbcSxVr6hrQQgpSSy9a0pq4rIXXfFmAtAStkFAKK6b2YhYs8YszTGLgHY9GMG10NUE1tbWwfZDrUEIGe84+pofF/eGPsCQL/fb0dRdN24JRUUJEnSGQ6HROUX6wWAt+z91OBsFJ4BuEnrtoJzNvYpIh6kNMYH8GbaZsgTflt9BqCUunecJPT9q//uP3z8Ax7V5kDrAI7iAAAAAElFTkSuQmCC';
export default class TabBar extends Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

    state = {
        selectedTab: 'nowPlay',
        notifCount: 0,
        presses: 0,
    };

    constructor() 
    {
        super();
        this.state = {
            selectedTab: 'nowPlay',
            notifCount: 0,
            presses: 0,
        };
    }

_renderContent = (color, pageText, num) => {
    return (

      <View style={[styles.tabContent, {backgroundColor: color}]}>
          <Text style={styles.tabText}>{pageText}</Text>
          <View style={[styles.tabContent, {backgroundColor: color}]}>
            <Image
                style={{width:70 , height:70}}
                source={images.logo}>
            </Image>

            <Text style={styles.tabText}>Thanh Nguyen</Text>
            <Text style={styles.tabText}>Twitter : /twitter.com/thanhcs94</Text>
          </View>
        </View>
    );
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor = {colors.tabbar_unselected}
        tintColor={colors.tabbar_selected}
        unselectedItemTintColor={colors.tabbar_unselected}
        barTintColor={colors.primary_color}>
        
        <TabBarIOS.Item
          title="Now Playing"
          icon={{uri: nowPayingBase64, scale: 2}}
          iconSize = {20}
          selected={this.state.selectedTab === 'nowPlay'}
          onPress={() => {
            this.setState({
              selectedTab: 'nowPlay',
            });
          }}>
          {
              <AppRouter url = "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed" />
          }
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={{uri: topRateBase64, scale: 2}}
          title = "Top Rate"
          selected={this.state.selectedTab === 'topRate'}
          onPress={() => {
            this.setState({
              selectedTab: 'topRate',
            });
          }}>
          {
              <AppRouter url = "https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed" />
          }
        </TabBarIOS.Item>


        <TabBarIOS.Item
          icon={{uri: profileBase64, scale: 2}}
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          badgeColor="black"
          title = "Profile"
          selected={this.state.selectedTab === 'profile'}
          onPress={() => {
            this.setState({
              selectedTab: 'profile',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {
              this._renderContent(colors.primary_color, 'profile', this.state.notifCount)
          }
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    paddingTop:20
  },
  tabText: {
    color: 'white',
    margin: 8,
    fontSize:16,
    alignItems: 'center',
    justifyContent:'center',
  },
});