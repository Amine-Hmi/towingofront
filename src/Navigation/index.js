//import {  createAppContainer } from "@react-navigation/native";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Slider from "../Screen/Slider/index";
import Welcome from "../Screen/Welcome/index";
import SignUp from "../Screen/SignUp/index";
import OTP from "../Screen/OTP/index";
import Home from "../Screen/Home/index";
import HomeUp from "../Screen/HomeUp/index";
import Model from "../Component/Model/index";
import HomeLetsGo from "../Screen/HomeLetsGo/index";
import BookingReq from "../Screen/BookingReq/index";
import BookingReqUp from "../Screen/BookingReqUp/index";
import Promocode from "../Screen/Promocode/index";
import Payment from "../Screen/Payment/index";
import RideReqConfirm from "../Screen/RideReqConfirm/index";
import SideMenu from "../Screen/SideMenu/index";
import MyWallet from "../Screen/MyWallet/index";
import History from "../Screen/History";
import Notification from "../Screen/Notification/index";
import InviteFriends from "../Screen/InviteFriends/index";
import Settings from "../Screen/Settings/index";
import Logout from "../Screen/Logout/index";
import RideReqCancel from "../Screen/RideReqCancel/index";
import HistoryList from "../Component/HistoryList/indx";
import Chat from "../Screen/Chat/index";
import Rating from "../Screen/Rating/index";
import Tips from "../Screen/Tips/index";
import InviteFriendsList from "../Screen/InviteFriendsList/index";
import MyAccount from '../Screen/MyAccount/index';
const Stack = createStackNavigator();

const rootNav = {
        Slider: {
            screen: Slider,
            navigationOptions: {
                headerShown:false
            }
        },
        Welcome: {
            screen: Welcome,
            navigationOptions: {
                headerShown:false
            }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                headerShown:false
            }
        },
        OTP: {
            screen: OTP,
            navigationOptions: {
                headerShown:false
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                headerShown:false
            }
        },
        HomeUp: {
            screen: HomeUp,
            navigationOptions: {
                headerShown:false
            }
        },
        Model: {
            screen: Model,
            navigationOptions: {
                headerShown:false
            }
        },
        HomeLetsGo: {
            screen: HomeLetsGo,
            navigationOptions: {
                headerShown:false
            }
        },
        BookingReq: {
            screen: BookingReq,
            navigationOptions: {
                headerShown:false
            }
        },
        BookingReqUp: {
            screen: BookingReqUp,
            navigationOptions: {
                headerShown:false
            }
        },
        Promocode: {
            screen: Promocode,
            navigationOptions: {
                headerShown:false
            }
        },
        Payment: {
            screen: Payment,
            navigationOptions: {
                headerShown:false
            }
        },
        RideReqConfirm: {
            screen: RideReqConfirm,
            navigationOptions: {
                headerShown:false
            }
        },
        SideMenu: {
            screen: SideMenu,
            navigationOptions: {
                headerShown:false
            }
        },
        MyWallet: {
            screen: MyWallet,
            navigationOptions: {
                headerShown:false
            }
        },
        History: {
            screen: History,
            navigationOptions: {
                headerShown:false
            }
        },
        Notification: {
            screen: Notification,
            navigationOptions: {
                headerShown:false
            }
        },
        InviteFriends: {
            screen: InviteFriends,
            navigationOptions: {
                headerShown:false
            }
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                headerShown:false
            }
        },
        RideReqCancel: {
            screen: RideReqCancel,
            navigationOptions: {
                headerShown:false
            }
        },
        HistoryList: {
            screen: HistoryList,
            navigationOptions: {
                // header:null,
            }
        },
        Chat: {
            screen: Chat,
            navigationOptions: {
                headerShown:false
            }
        },
        Rating: {
            screen: Rating,
            navigationOptions: {
                headerShown:false
            }
        },
        Tips: {
            screen: Tips,
            navigationOptions: {
                headerShown:false
            }
        },
        InviteFriendsList:{
            screen:InviteFriendsList,
            navigationOptions:{
                headerShown:false
            }
        },
        MyAccount:{
            screen:MyAccount,
            navigationOptions:{
                headerShown:false
            }
        },
    };
function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Slider">
                {
                    Object.keys(rootNav).map((item,index)=>{
                        return  <Stack.Screen key={index} name={item} component={rootNav[item].screen} options={rootNav[item].navigationOptions}/>;
                    })
                }

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;
/*const AppNavigator = createStackNavigator(
  {
    Slider: {
      screen: Slider,
      navigationOptions: {
        header: null
      }
    },
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null
      }
    },
    OTP: {
      screen: OTP,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    HomeUp: {
      screen: HomeUp,
      navigationOptions: {
        header: null
      }
    },
    Model: {
      screen: Model,
      navigationOptions: {
        header: null
      }
    },
    HomeLetsGo: {
      screen: HomeLetsGo,
      navigationOptions: {
        header: null
      }
    },
    BookingReq: {
      screen: BookingReq,
      navigationOptions: {
        header: null
      }
    },
    BookingReqUp: {
      screen: BookingReqUp,
      navigationOptions: {
        header: null
      }
    },
    Promocode: {
      screen: Promocode,
      navigationOptions: {
        header: null
      }
    },
    Payment: {
      screen: Payment,
      navigationOptions: {
        header: null
      }
    },
    RideReqConfirm: {
      screen: RideReqConfirm,
      navigationOptions: {
        header: null
      }
    },
    SideMenu: {
      screen: SideMenu,
      navigationOptions: {
        header: null
      }
    },
    MyWallet: {
      screen: MyWallet,
      navigationOptions: {
        header: null
      }
    },
    History: {
      screen: History,
      navigationOptions: {
        header: null
      }
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        header: null
      }
    },
    InviteFriends: {
      screen: InviteFriends,
      navigationOptions: {
        header: null
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        header: null
      }
    },
    RideReqCancel: {
      screen: RideReqCancel,
      navigationOptions: {
        header: null
      }
    },
    HistoryList: {
      screen: HistoryList,
      navigationOptions: {
        // header:null,
      }
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        header: null
      }
    },
    Rating: {
      screen: Rating,
      navigationOptions: {
        header: null
      }
    },
    Tips: {
      screen: Tips,
      navigationOptions: {
        header: null
      }
    },
    InviteFriendsList:{
      screen:InviteFriendsList,
      navigationOptions:{
        header:null,
      }
    },
    MyAccount:{
      screen:MyAccount,
      navigationOptions:{
        header:null
      }
    },
  },
  {
    initialRouteName: "Slider"
  }
);
export default NavigationContainer(AppNavigator);*/
