import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import EventCard from '../../components/EventCard';

export default function Homepage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('acasa');

  const categories = [
    { id: 'all', title: 'All', icon: 'star' },
    { id: 'conferinte', title: 'Conferinte', icon: 'mic' },
    { id: 'seminarii', title: 'Seminarii', icon: 'book' },
    { id: 'concerte', title: 'Concerte', icon: 'musical-note' },
  ];

  const tabs = [
    { id: 'acasa', title: 'Acasa', icon: 'home' },
    { id: 'favorite', title: 'Favorite', icon: 'heart' },
    { id: 'biletele', title: 'Bilete', icon: 'ticket' },
  ];

  const renderCategory = (item) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.categoryBadge, activeCategory === item.id && styles.activeCategoryBadge]}
      onPress={() => setActiveCategory(item.id)}
    >
      <Ionicons
        name={item.icon}
        size={18}
        color={activeCategory === item.id ? '#FFFFFF' : '#4F46E5'}
      />
      <Text style={[styles.categoryText, activeCategory === item.id && styles.activeCategoryText]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const renderTab = (tab) => (
    <TouchableOpacity
      key={tab.id}
      style={[styles.tab, activeTab === tab.id && styles.activeTab]}
      onPress={() => setActiveTab(tab.id)}
    >
      <Ionicons name={tab.icon} size={24} color={activeTab === tab.id ? '#6A7BFF' : '#9CA3AF'} />
      <Text style={[styles.tabText, activeTab === tab.id && styles.activeTabText]}>
        {tab.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Entypo name="menu" size={24} color="#272a2e" />
        </TouchableOpacity>

        <Text style={styles.logo}>Evenimente Crestine</Text>

        <TouchableOpacity style={styles.profileButton}>
          <Image style={styles.profileImage} source={require('../../assets/images/profile1.jpg')} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Cauta eveniment"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContainer}
        >
          {categories.map(renderCategory)}
        </ScrollView>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Evenimente din apropiere</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Vezi toate</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.eventsScrollView}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <EventCard />
        </ScrollView>
      </ScrollView>
      <View style={styles.tabContainer}>{tabs.map(renderTab)}</View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuButton: {
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
  },
  logo: {
    fontFamily: 'SfProSemiBold',
    fontSize: 18,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    width: Dimensions.get('window').width * 0.75,
    height: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  menuTitle: {
    fontFamily: 'SfProSemiBold',
    fontSize: 18,
    color: '#272a2e',
  },
  closeButton: {
    padding: 8,
  },
  menuItemsContainer: {
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 12,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  menuItemIcon: {
    marginRight: 16,
  },
  menuItemText: {
    fontFamily: 'SfProMedium',
    fontSize: 16,
    color: '#6A7BFF',
  },
  menuSpacer: {
    flex: 1,
  },
  logoutButton: {
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
  },
  logoutButtonText: {
    fontFamily: 'SfProSemiBold',
    fontSize: 16,
    color: '#6A7BFF',
  },
  contentContainer: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 16,
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'SfProRegular',
    fontSize: 16,
    color: '#333',
  },
  categoryContainer: {
    paddingHorizontal: 16,
    paddingBottom: 6,
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 12,
  },
  activeCategoryBadge: {
    backgroundColor: '#6A7BFF',
    borderColor: '#6A7BFF',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6A7BFF',
    marginLeft: 6,
  },
  activeCategoryText: {
    color: '#FFFFFF',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 24,
  },
  sectionTitle: {
    fontFamily: 'SfProSemiBold',
    fontSize: 18,
  },
  seeAllText: {
    fontFamily: 'SfProMedium',
    fontSize: 14,
    color: '#6A7BFF',
  },
  eventsScrollView: {
    paddingLeft: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginHorizontal: 16,
    marginBottom: 6,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  tab: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activeTab: {
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
  },
  tabText: {
    fontFamily: 'SfProMedium',
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
  activeTabText: {
    color: '#6A7BFF',
  },
};
