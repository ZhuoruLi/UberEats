
import { StyleSheet, Text, View, Image } from 'react-native';


const RessaurantItem = ({restaurant}) => {

    return (
        <View style={styles.restaurantContainer}>
        <Image 
        source={{uri: restaurant.image
        }} 
        style = {styles.image}
        />

        <View style =  {styles.row}>
          <View>
            <Text style = {styles.title}>{restaurant.name}</Text>
            <Text style = {styles.subtitle}>
                $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
                {restaurant.maxDeliveryTime} minutes
            </Text>
          </View>

          <View style = {styles.rating}>
            <Text>{restaurant.rating}</Text>
          </View>

        </View>




        </View>
    )
};

export default RessaurantItem;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    restaurantContainer: {
      width: '100%',
      marginVertical: 10,
    },
    image: {
      width: '100%',
      aspectRatio:5/3,
      marginBottom:5,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 5,
    },
    subtitle: {
      color: 'gray'
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rating: {
      marginLeft: "auto",
      backgroundColor: "lightgray",
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    }
  });
