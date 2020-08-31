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

const tempData = { 
  "statuses": [{
    "created_at": "Sun Aug 30 23:56:20 +0000 2020", 
    "id": 1300220841733451800, 
    "id_str": "1300220841733451777", 
    "text": "They’re back!! Are you streaming from home too BTS on the 2020 MTV Video Music Awards broadcast?\n\nMore 📸 #MTV #VMAs… https://t.co/yLG3mnRCjA", 
    "truncated": true, 
    "entities": { 
      "hashtags": [
        { 
          "text": "MTV", 
          "indices": [105, 109] 
        }, 
        { 
          "text": "VMAs", 
          "indices": [110, 115] 
        }
      ], 
      "symbols": [], 
      "user_mentions": [], 
      "urls": [{ 
        "url": "https://t.co/yLG3mnRCjA", 
        "expanded_url": "https://twitter.com/i/web/status/1300220841733451777", 
        "display_url": "twitter.com/i/web/status/1…", 
        "indices": [117, 140] 
      }] 
    }, 
    "metadata": { 
      "result_type": "popular", 
      "iso_language_code": "en" 
    }, 
    "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>", 
    "in_reply_to_status_id": null, 
    "in_reply_to_status_id_str": null, 
    "in_reply_to_user_id": null, 
    "in_reply_to_user_id_str": null, 
    "in_reply_to_screen_name": null, 
    "user": { 
      "id": 211286498, 
      "id_str": "211286498", 
      "name": "Getty Images Entertainment", 
      "screen_name": "GettyVIP", 
      "location": "Global", 
      "description": "A view of entertainment and fashion events around the globe || For more of the world’s best images visit @GettyImages @GettyImagesNews @GettySport", 
      "url": null, 
      "entities": { "description": { "urls": [] } }, 
      "protected": false, 
      "followers_count": 23974, 
      "friends_count": 1331, 
      "listed_count": 324, 
      "created_at": "Tue Nov 02 20:57:20 +0000 2010", 
      "favourites_count": 640, 
      "utc_offset": null, 
      "time_zone": null, 
      "geo_enabled": false, 
      "verified": true, 
      "statuses_count": 16017, 
      "lang": null, 
      "contributors_enabled": false, 
      "is_translator": false, 
      "is_translation_enabled": false, 
      "profile_background_color": "000000", 
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png", 
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png", 
      "profile_background_tile": false, 
      "profile_image_url": "http://pbs.twimg.com/profile_images/1278427031403999235/3IGqJb8q_normal.jpg", 
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1278427031403999235/3IGqJb8q_normal.jpg", 
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/211286498/1583902578", 
      "profile_link_color": "981CEB", 
      "profile_sidebar_border_color": "FFFFFF", 
      "profile_sidebar_fill_color": "E6E6E6", 
      "profile_text_color": "494949", 
      "profile_use_background_image": false, 
      "has_extended_profile": false, 
      "default_profile": false, 
      "default_profile_image": false, 
      "following": null, 
      "follow_request_sent": null, 
      "notifications": null, 
      "translator_type": "none" }, 
      "geo": null, 
      "coordinates": null, 
      "place": null, 
      "contributors": null, 
      "is_quote_status": false, 
      "retweet_count": 5982, 
      "favorite_count": 18170, 
      "favorited": false, 
      "retweeted": false, 
      "possibly_sensitive": false, 
      "lang": "en" 
    }], 
    "search_metadata": { 
      "completed_in": 0.013, 
      "max_id": 0, 
      "max_id_str": "0", 
      "next_results": "?max_id=1300220841733451776&q=Search&count=1&include_entities=1&result_type=popular", 
      "query": "Search", 
      "count": 1, 
      "since_id": 0, 
      "since_id_str": "0" 
    } 
  }



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
