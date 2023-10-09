import {View, Text, StyleSheet, Image} from 'react-native';

const DishListItem = ({dish}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <Text style={styles.price}>$ {dish.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        // paddingHorizontal: 20,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    description: {
        color: 'gray',
        
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
    },
});
export default DishListItem;
