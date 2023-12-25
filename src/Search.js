import { StyleSheet, Text, TextInput, TouchableOpacity, View,FlatList } from 'react-native'
import React, { useState } from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import Card from './Card'
const Search = ({navigation}) => {
  const[value,setValue] = useState()
  const[data,setData] = useState([])
  const searchNews= async(text)=>{
   if(text.length>2){
    let result = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=44d12b893cbd4939a36cb780c9d77a78&q=${text}`)
    result = await result.json()
   setData(result.articles)
   }
    
  }
  return (
    <View className="flex-1">
      <View className='my-5 px-4 flex-row rounded-2xl bg-redPrimary space-x-4 h-14 text-white font-medium items-center' >
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
        <ArrowLeftIcon color={"white"} />
        </TouchableOpacity>
      
        <TextInput 
        onChangeText={(text)=>searchNews(text)}
        value={value}
        placeholderTextColor={"white"} placeholder='Enter your query here...' />
        
      </View>
      <FlatList
            data={data}
            renderItem={({ item, index }) => {
              return <Card item={item} navigation={navigation} />;
            }}
          />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})