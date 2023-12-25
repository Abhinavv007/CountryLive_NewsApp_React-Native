import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Card = ({item,navigation}) => {
    
  
  return (
    <View className="px-3 py-3 mb-3">
    
      <Image source={{uri:item.urlToImage? item.urlToImage :"https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg" }} className="h-40 w-full " />
      <View className="px-2 py-1 my-2">
      <Text className="text-sm font-extrabold text-2xl text-black" >{item.title!=="[Removed]"?item.title:"Haryana MLA Reacts To BJP MP's 'Dabdaba' Claim After Wrestling Body Rapped"}</Text>
      <View className="py-3">
      <Text className=" text-base font-medium-100 text-black">{item.description!=="[Removed]"?item.description:"Haryana MLA Reacts To BJP MP's 'Dabdaba' Claim After Wrestling Body Rapped"}</Text>
      <Text className=" py-4">{item.author?item.author : "Daniel Bryan"}</Text>
      <Text >{item.publishedAt}</Text>
      <Text className="my-2">{item.source.name!=="[Removed]"? item.source.name:"The Tribune"}</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("NewsView",{
        url:item.url
      })} className=" rounded-md bg-redPrimary w-28  py-2 h-10 justify-center items-center mt-2  " >
        <Text className="text-white font-medium" >Read More</Text>
      </TouchableOpacity>
      </View>
     
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})