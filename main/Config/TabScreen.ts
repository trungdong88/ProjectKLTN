import Home from 'main/Pages/Home';
import {typeTabScreen} from './../Type/TabScreen';
import Setting from 'main/Pages/Setting';
import Tag from 'main/Pages/Tag';
import Static from 'main/Pages/Static';

const ListTabScreen: typeTabScreen[] = [
  {
    name: 'home1',
    componentScreen: Home,
    source: require('../Assets/Navigator/home.png'),
    sourceActive: require('../Assets/Navigator/homeActive.png'),
  },
  {
    name: 'tag',
    componentScreen: Tag,
    source: require('../Assets/Navigator/icon2.png'),
    sourceActive: require('../Assets/Navigator/icon2_active.png'),
  },
  {
    name: 'static',
    componentScreen: Static,
    source: require('../Assets/Navigator/icon3.png'),
    sourceActive: require('../Assets/Navigator/icon3_active.png'),
  },
  {
    name: 'home4',
    componentScreen: Setting,
    source: require('../Assets/Navigator/icon4.png'),
    sourceActive: require('../Assets/Navigator/settingActive.png'),
  },
];

export {ListTabScreen};
