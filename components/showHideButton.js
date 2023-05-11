import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ShowHideButton({ children }) {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <View>
      {showContent?(
        <TouchableOpacity onPress={toggleContent}>
          <View>{children}</View>
        </TouchableOpacity>
      ):(
        <TouchableOpacity onPress={toggleContent}>
          <View style={{alignSelf:"center", flexDirection:"row"}}>
            <MaterialCommunityIcons name="eye-off" size={36} color="#e2e8f0" />
            </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default ShowHideButton;
