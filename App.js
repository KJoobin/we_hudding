/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Search from './src/search';
import Twits from './src/twits'

import env from './env'

const tempData = [{
  "contributors": null,
  "coordinates": null,
  "created_at": "Sat Aug 29 14:30:00 +0000 2020",
  "entities": {
    "hashtags": [Array],
    "symbols": [Array],
    "urls": [Array],
    "user_mentions": [Array]
  },
  "favorite_count": 1433,
  "favorited": false,
  "geo": null,
  "id": 1299715933217239000,
  "id_str": "1299715933217239041",
  "in_reply_to_screen_name": null,
  "in_reply_to_status_id": null,
  "in_reply_to_status_id_str": null,
  "in_reply_to_user_id": null,
  "in_reply_to_user_id_str": null,
  "is_quote_status": false,
  "lang": "ko",
  "metadata": {
    "iso_language_code": "ko",
    "result_type": "popular"
  },
  "place": null,
  "possibly_sensitive": false,
  "retweet_count": 1278,
  "retweeted": false,
  "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
  "text": `[써치] 비무장지대,
아무도 본 적 없는 두려움과 마주하다!
밀리터리 스릴러 #써치
10월 COMING SOON
#장동윤 #정수정 #문정희 #윤박 #이현욱 #JANGDONGYOON #JUNGSOOJUNG… https://t.co/aKYWHLl8A3`,
  "truncated": true,
  "user": {
    "contributors_enabled": false,
    "created_at": "Tue Dec 14 07:56:11 +0000 2010",
    "default_profile": false,
    "default_profile_image": false,
    "description": `🌟 토/일 밤 10:30 고수 허준호 #미씽 #0829첫방송
                    🌟🌟 NEXT! 장동윤 정수정 #밀리터리스릴러 #써치`,
    "entities": [Object],
    "favourites_count": 1571,
    "follow_request_sent": null,
    "followers_count": 46369,
    "following": null,
    "friends_count": 1,
    "geo_enabled": false,
    "has_extended_profile": false,
    "id": 226483444,
    "id_str": "226483444",
    "is_translation_enabled": false,
    "is_translator": false,
    "lang": null,
    "listed_count": 242,
    "location": "대한민국 서울",
    "name": "OCN ORIGINAL",
    "notifications": null,
    "profile_background_color": "000000",
    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme16/bg.gif",
    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme16/bg.gif",
    "profile_background_tile": false,
    "profile_banner_url": "https://pbs.twimg.com/profile_banners/226483444/1597731076",
    "profile_image_url": "http://pbs.twimg.com/profile_images/1234360771728965632/RQw40aYk_normal.jpg",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1234360771728965632/RQw40aYk_normal.jpg",
    "profile_link_color": "FAB81E",
    "profile_sidebar_border_color": "FFFFFF",
    "profile_sidebar_fill_color": "E8E8E8",
    "profile_text_color": "333333",
    "profile_use_background_image": false,
    "protected": false,
    "screen_name": "OCN_ORIGINAL",
    "statuses_count": 15644,
    "time_zone": null,
    "translator_type": "none",
    "url": null,
    "utc_offset": null,
    "verified": true
  }
}]



const App = () => {
  const [temp, setTemp] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const keyDown = (e) => {
    console.log(e);
    setTemp(e)
  }

  const submit = () => {
    setIsLoading(true);
  }

  useEffect(() => {
    (async () => {
      if (isLoading) {
        try {
          console.log(temp);
          const res = await fetch(`${env.API}?q=${temp}&result_type=popular`, {
            headers: {
              Authorization: `Bearer ${env.TOKEN}`
            }
          })
          if (!res.ok) {
            throw new Error(res);
          }
          const results = await res.json();
          setIsLoading(false);
          setData(results.statuses);
        } catch (error) {
          console.log("error")
          console.log(JSON.stringify(error));
        }
      }
    })()
  }, [isLoading])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
        <Search temp={temp} keyDown={keyDown} submit={submit} />
        <Twits data={data} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
  }
})

export default App;
