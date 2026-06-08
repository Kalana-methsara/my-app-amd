import { Feather, Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
    primary: '#6B49D9',
    secondary: '#FFFFFF',
    text: '#000000',
    muted: '#686767',
    bgLight: '#FAFAFA',
    border: '#E0E0E0',
    success: '#2ECC71',
    warning: '#F39C12'
};

const HomeDashboard = () => {
    const recentOrders = [
        {
            id: '1',
            name: 'Nike Air Max',
            time: '2 mins ago',
            price: '$120.00',
            status: 'Completed',
            type: 'success',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200'
        },
        {
            id: '2',
            name: 'Adidas T-Shirt',
            time: '1 hour ago',
            price: '$25.00',
            status: 'Pending',
            type: 'warning',
            image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200'
        },
        {
            id: '3',
            name: 'Apple Watch',
            time: '3 hours ago',
            price: '$320.00',
            status: 'Completed',
            type: 'success',
            image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=200'
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerTop}>
                        <View>
                            <Text style={styles.welcomeText}>Hello, Kalana 👋</Text>
                            <Text style={styles.subtitleText}>
                                kalanamethsara53@gmail.com
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={styles.notificationBtn}
                            activeOpacity={0.7}
                        >
                            <Ionicons
                                name="notifications"
                                size={24}
                                color={COLORS.secondary}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.body}>
                    <Text style={styles.sectionTitle}>Overview</Text>

                    <View style={styles.overviewContainer}>
                        <View style={styles.card}>
                            <View
                                style={[
                                    styles.iconWrapper,
                                    { backgroundColor: '#EFECFC' }
                                ]}
                            >
                                <Ionicons
                                    name="people"
                                    size={20}
                                    color={COLORS.primary}
                                />
                            </View>

                            <Text style={styles.cardValue}>120</Text>
                            <Text style={styles.cardLabel}>Total Users</Text>
                        </View>

                        <View style={styles.card}>
                            <View
                                style={[
                                    styles.iconWrapper,
                                    { backgroundColor: '#EFECFC' }
                                ]}
                            >
                                <Feather
                                    name="dollar-sign"
                                    size={20}
                                    color={COLORS.primary}
                                />
                            </View>

                            <Text style={styles.cardValue}>$12,450</Text>
                            <Text style={styles.cardLabel}>Total Revenue</Text>
                        </View>

                        <View style={styles.card}>
                            <View
                                style={[
                                    styles.iconWrapper,
                                    { backgroundColor: '#EFECFC' }
                                ]}
                            >
                                <Ionicons
                                    name="cart"
                                    size={20}
                                    color={COLORS.primary}
                                />
                            </View>

                            <Text style={styles.cardValue}>32</Text>
                            <Text style={styles.cardLabel}>Orders</Text>
                        </View>
                    </View>

                    <View style={styles.sectionHeaderRow}>
                        <Text style={styles.sectionTitle}>Recent Orders</Text>

                        <TouchableOpacity activeOpacity={0.7}>
                            <Text style={styles.viewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.ordersList}>
                        {recentOrders.map((order) => (
                            <View key={order.id} style={styles.orderItem}>
                                <Image
                                    source={{ uri: order.image }}
                                    style={styles.productImage}
                                />

                                <View style={styles.orderInfo}>
                                    <Text style={styles.productName}>
                                        {order.name}
                                    </Text>

                                    <Text style={styles.orderTime}>
                                        {order.time}
                                    </Text>
                                </View>

                                <View style={styles.orderRight}>
                                    <Text style={styles.productPrice}>
                                        {order.price}
                                    </Text>

                                    <Text
                                        style={[
                                            styles.statusText,
                                            {
                                                color:
                                                    order.type === 'success'
                                                        ? COLORS.success
                                                        : COLORS.warning
                                            }
                                        ]}
                                    >
                                        {order.status}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
        </SafeAreaView>
    );
};

export default HomeDashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary
    },

    scrollContent: {
        paddingBottom: 90
    },

    header: {
        paddingHorizontal: 24,
        paddingTop: 10,
        paddingBottom: 35
    },

    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.secondary
    },

    subtitleText: {
        fontSize: 13,
        color: '#E0D7FF',
        marginTop: 2
    },

    notificationBtn: {
        padding: 8,
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: 12
    },

    body: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 24,
        paddingTop: 30,
        minHeight: 600
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 16
    },

    overviewContainer: {
        flexDirection: 'row',
        marginBottom: 28,
        gap: 12
    },

    card: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderRadius: 16,
        padding: 14,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2
    },

    iconWrapper: {
        width: 38,
        height: 38,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12
    },

    cardValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text
    },

    cardLabel: {
        fontSize: 11,
        color: COLORS.muted,
        marginTop: 2
    },

    sectionHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
    },

    viewAllText: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.primary
    },

    ordersList: {
        gap: 14
    },

    orderItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        padding: 12,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#F5F5F5'
    },

    productImage: {
        width: 50,
        height: 50,
        borderRadius: 12,
        backgroundColor: COLORS.bgLight
    },

    orderInfo: {
        flex: 1,
        marginLeft: 14
    },

    productName: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.text
    },

    orderTime: {
        fontSize: 12,
        color: COLORS.muted,
        marginTop: 4
    },

    orderRight: {
        alignItems: 'flex-end'
    },

    productPrice: {
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.text
    },

    statusText: {
        fontSize: 12,
        fontWeight: '600',
        marginTop: 4
    }
});