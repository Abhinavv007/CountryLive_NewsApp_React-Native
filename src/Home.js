import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Card from './Card';
import Header from './Header';
import { useEffect, useState } from 'react';
function Home({navigation}) {
  const[loading,setLoading] = useState(true)
  const getData = async()=>{
    setLoading(true);
    let result = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=44d12b893cbd4939a36cb780c9d77a78&category=${category[select].category}`)
    result = await result.json()
   setData(result.articles)
   
   setLoading(false);
}
    const [category, setCategory] =useState([
        {
          id: 1,
          name: 'Top Headlines',
          category: 'general',
        },
        {
          id: 5,
          name: 'Sports',
          category: 'sports',
        },
        {
          id: 2,
          name: 'Business',
          category: 'business',
        },
        {
          id: 3,
          name: 'Entertainment',
          category: 'entertainment',
        },
        {
          id: 4,
          name: 'Health',
          category: 'health',
        },
        {
          id: 6,
          name: 'Science',
          category: 'science',
        },
        {
          id: 7,
          name: 'Technology',
          category: 'technology',
        },
      ]);
    const[select,setSelect] = useState(0)
    const[data,setData] = useState([])
    useEffect(()=>{
        
        getData()
    },[])
    return (
      loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator animating={loading} size={100} color={"red"}/>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Header navigation={navigation} />
          <View className="px-3 py-3">
            <FlatList
              data={category}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelect(index);
                      
                      getData();
                     
                    }}
                    className={index === select ? "rounded-md mr-3 px-3 py-3 bg-redPrimary" : "rounded-md mr-3 px-3 py-3 bg-gray-200"}
                  >
                    <Text className={index === select ? "text-white font-bold" : "text-black font-bold"}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              return <Card item={item} navigation={navigation} />;
            }}
          />
        </View>
      )
    )
          };
export default Home