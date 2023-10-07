
import { StyleSheet, Text, View, Image } from 'react-native';


const RessaurantItem = ({restaurant}) => {

    return (
        <View style={styles.restaurantContainer}>
        <Image 
        source={{uri: restaurant.image
        }} 
        style = {styles.image}
        />
        <Text style = {styles.title}>{restaurant.name}</Text>
        <Text style = {styles.subtitle}>
            $ $
            {restaurant.deliveryFee} {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} minutes
        </Text>



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
    }
  });
