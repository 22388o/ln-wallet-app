import React, { useState } from 'react';
import { View, Button } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ShowHideButton({ children }) {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <View style={{flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
      {showContent && children}        
      {showContent ? <MaterialCommunityIcons name="eye" size={24} color="#a8a8a8" onPress={toggleContent}/> : 
        <MaterialCommunityIcons name="eye-off" size={24} color="#a8a8a8" onPress={toggleContent}/>
        }
    </View>
  );
}

export default ShowHideButton;
