import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
    primary: '#6B49D9',
    secondary: '#FFFFFF',
    text: '#1A1A2E',
    muted: '#8A8A9A',
    bgLight: '#F6F5FB',
    border: '#EFEFEF',
    success: '#2ECC71',
    warning: '#F39C12',
    successLight: '#EAFAF1',
    warningLight: '#FEF9EC',
};

const ORDERS = [
    { id: '1', name: 'Nike Air Max',  date: 'Jun 14, 2025', price: '$120.00', status: 'Completed', type: 'success' },
    { id: '2', name: 'Adidas T-Shirt', date: 'Jun 13, 2025', price: '$25.00',  status: 'Pending',   type: 'warning' },
    { id: '3', name: 'Apple Watch',   date: 'Jun 12, 2025', price: '$320.00', status: 'Completed', type: 'success' },
    { id: '4', name: 'Sony Headphones', date: 'Jun 10, 2025', price: '$89.00', status: 'Pending', type: 'warning' },
];

const Orders = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Orders</Text>
                <Text style={styles.headerSub}>{ORDERS.length} orders total</Text>
            </View>

            <View style={styles.body}>
                <FlatList
                    data={ORDERS}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.list}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.orderCard} activeOpacity={0.75}>
                            <View style={[styles.iconBox, { backgroundColor: COLORS.bgLight }]}>
                                <Ionicons name="bag-handle-outline" size={22} color={COLORS.primary} />
                            </View>

                            <View style={styles.orderInfo}>
                                <Text style={styles.orderName}>{item.name}</Text>
                                <Text style={styles.orderDate}>{item.date}</Text>
                            </View>

                            <View style={styles.orderRight}>
                                <Text style={styles.orderPrice}>{item.price}</Text>
                                <View style={[
                                    styles.statusBadge,
                                    { backgroundColor: item.type === 'success' ? COLORS.successLight : COLORS.warningLight }
                                ]}>
                                    <Text style={[
                                        styles.statusText,
                                        { color: item.type === 'success' ? COLORS.success : COLORS.warning }
                                    ]}>
                                        {item.status}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default Orders;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.primary },
    header: {
        paddingHorizontal: 24,
        paddingTop: 10,
        paddingBottom: 30,
    },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.secondary },
    headerSub: { fontSize: 13, color: '#E0D7FF', marginTop: 2 },

    body: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 24,
    },
    list: { paddingHorizontal: 20, paddingBottom: 100, gap: 12 },

    orderCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: 16,
        padding: 14,
        borderWidth: 1,
        borderColor: COLORS.border,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 1,
    },
    iconBox: {
        width: 46,
        height: 46,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
    },
    orderInfo: { flex: 1, marginLeft: 14 },
    orderName: { fontSize: 14, fontWeight: '600', color: COLORS.text },
    orderDate: { fontSize: 12, color: COLORS.muted, marginTop: 3 },

    orderRight: { alignItems: 'flex-end', gap: 6 },
    orderPrice: { fontSize: 14, fontWeight: 'bold', color: COLORS.text },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 20,
    },
    statusText: { fontSize: 11, fontWeight: '600' },
});