import { Ionicons } from '@expo/vector-icons';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
    primary: '#6B49D9',
    secondary: '#FFFFFF',
    text: '#1A1A2E',
    muted: '#8A8A9A',
    bgLight: '#F6F5FB',
    border: '#EFEFEF',
    primaryLight: '#EDE9FD',
};

const PRODUCTS = [
    { id: '1', name: 'Nike Air Max',     price: '$120.00', category: 'Shoes',       stock: 14, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200' },
    { id: '2', name: 'Adidas T-Shirt',   price: '$25.00',  category: 'Clothing',    stock: 32, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200' },
    { id: '3', name: 'Apple Watch',      price: '$320.00', category: 'Electronics', stock: 5,  image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=200' },
    { id: '4', name: 'Sony Headphones',  price: '$89.00',  category: 'Electronics', stock: 9,  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200' },
];

const Products = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Products</Text>
                <Text style={styles.headerSub}>{PRODUCTS.length} items listed</Text>
            </View>

            <View style={styles.body}>
                <FlatList
                    data={PRODUCTS}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.list}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.productCard} activeOpacity={0.75}>
                            <Image source={{ uri: item.image }} style={styles.productImage} />

                            <View style={styles.productInfo}>
                                <Text style={styles.productName}>{item.name}</Text>
                                <View style={styles.categoryBadge}>
                                    <Text style={styles.categoryText}>{item.category}</Text>
                                </View>
                                <Text style={styles.stockText}>Stock: {item.stock}</Text>
                            </View>

                            <View style={styles.productRight}>
                                <Text style={styles.productPrice}>{item.price}</Text>
                                <TouchableOpacity style={styles.editBtn} activeOpacity={0.7}>
                                    <Ionicons name="pencil-outline" size={15} color={COLORS.primary} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default Products;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.primary },
    header: {
        paddingHorizontal: 24,
        paddingTop: 10,
        paddingBottom: 30,
    },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#FFFFFF' },
    headerSub: { fontSize: 13, color: '#E0D7FF', marginTop: 2 },

    body: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 24,
    },
    list: { paddingHorizontal: 20, paddingBottom: 100, gap: 12 },

    productCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: COLORS.border,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 1,
    },
    productImage: {
        width: 54,
        height: 54,
        borderRadius: 12,
        backgroundColor: COLORS.bgLight,
    },
    productInfo: { flex: 1, marginLeft: 14, gap: 4 },
    productName: { fontSize: 14, fontWeight: '600', color: COLORS.text },
    categoryBadge: {
        alignSelf: 'flex-start',
        backgroundColor: COLORS.primaryLight,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 20,
    },
    categoryText: { fontSize: 10, fontWeight: '600', color: COLORS.primary },
    stockText: { fontSize: 11, color: COLORS.muted },

    productRight: { alignItems: 'flex-end', gap: 8 },
    productPrice: { fontSize: 14, fontWeight: 'bold', color: COLORS.text },
    editBtn: {
        width: 30,
        height: 30,
        borderRadius: 8,
        backgroundColor: COLORS.primaryLight,
        justifyContent: 'center',
        alignItems: 'center',
    },
});