import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import  restaurants from '../../../assets/data/restaurants.json';
import DishListItem from '../../components/DishListItem';

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
    return (

        <View style={styles.page}>

            <Image 
                source={{uri: restaurant.image}} 
                style = {styles.image} 
                resizeMode='cover'
            />

            <Ionicons 
                name="arrow-back-circle" 
                size={45} 
                color="white" 
                style={styles.iconContainer}
            />

            <View style = {styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style = {styles.subtitle}>
                    $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
                    {restaurant.maxDeliveryTime} minutes
                </Text>
            </View>

            <DishListItem dish={restaurant.dishes[0]}/>
            <DishListItem dish={restaurant.dishes[2]}/>
        </View>
    )
};

const styles = StyleSheet.create({
    iconContainer: {
        

        position: 'absolute',
        top: 40,
        left: 10,
    },
    page: {
        flex:1,
    },
    image: {
        width: '100%',
        aspectRatio:5/3,
        marginBottom:5,
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        marginVertical: 10,
        
    },
    subtitle: {
        color: 'gray',
        fontSize: 15,
        
    },
    container: {
        margin: 10,
    },
});
export default RestaurantDetailsPage;



