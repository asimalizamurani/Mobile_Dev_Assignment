import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Pressable,
  Switch,
  useColorScheme,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';

// --- Mock Data ---
const MOCK_NOTES = [
  { id: '1', title: 'Grocery List', preview: 'Milk, Eggs, Bread, Coffee beans...', date: 'Oct 24' },
  { id: '2', title: 'Project Ideas', preview: 'Build a React Native app with Expo and Firebase.', date: 'Oct 22' },
  { id: '3', title: 'Meeting Notes', preview: 'Discussed the Q4 roadmap and budget allocations.', date: 'Oct 20' },
  { id: '4', title: 'Workout Routine', preview: 'Push day: Bench press, Overhead press, Triceps.', date: 'Oct 18' },
];

export default function App() {
  const systemTheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');
  const [currentView, setCurrentView] = useState('listing'); // 'listing' or 'editor'
  const { width } = useWindowDimensions();

  const theme = isDarkMode ? darkTheme : lightTheme;

  // Responsive logic: Wider padding for tablets/large screens
  const isLargeScreen = width > 768;
  const containerPadding = isLargeScreen ? 40 : 20;

  // --- View 1: Notes Listing ---
  const NotesListing = () => (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { paddingHorizontal: containerPadding }]}>
        <Text style={[styles.title, { color: theme.text }]}>My Notes</Text>
        <View style={styles.themeToggle}>
          <Text style={{ color: theme.textSecondary, marginRight: 8 }}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={(val) => setIsDarkMode(val)}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={{ paddingHorizontal: containerPadding }}>
        <TextInput
          placeholder="Search notes..."
          placeholderTextColor={theme.textSecondary}
          style={[styles.searchBar, { backgroundColor: theme.card, color: theme.text }]}
        />
      </View>

      <FlatList
        data={MOCK_NOTES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: containerPadding, paddingBottom: 100 }}
        renderItem={({ item }) => (
          <Pressable 
            onPress={() => setCurrentView('editor')}
            style={({ pressed }) => StyleSheet.compose(
              [styles.noteCard, { backgroundColor: theme.card }],
              pressed && { opacity: 0.7 }
            )}
          >
            <View style={styles.cardHeader}>
              <Text style={[styles.noteTitle, { color: theme.text }]}>{item.title}</Text>
              <Text style={[styles.noteDate, { color: theme.textSecondary }]}>{item.date}</Text>
            </View>
            <Text numberOfLines={2} style={[styles.notePreview, { color: theme.textSecondary }]}>
              {item.preview}
            </Text>
          </Pressable>
        )}
      />
      
      {/* Navigation Simulation Button */}
      <Pressable style={styles.fab} onPress={() => setCurrentView('editor')}>
        <Text style={styles.fabText}>+</Text>
      </Pressable>
    </SafeAreaView>
  );

  // --- View 2: Note Editor ---
  const NoteEditor = () => (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1519681393784-d120267953ba?auto=format&fit=crop&w=800&q=80' }}
        style={styles.editorHeaderImage}
      >
        <SafeAreaView style={styles.headerButtons}>
          <Pressable style={styles.iconButton} onPress={() => setCurrentView('listing')}>
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>
          <Pressable style={[styles.iconButton, styles.saveButton]} onPress={() => setCurrentView('listing')}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </SafeAreaView>
      </ImageBackground>

      <View style={[styles.editorContent, { paddingHorizontal: containerPadding }]}>
        <TextInput
          placeholder="Title"
          placeholderTextColor={theme.textSecondary}
          style={[styles.inputTitle, { color: theme.text }]}
        />
        <View style={[styles.separator, { backgroundColor: theme.card }]} />
        <TextInput
          placeholder="Start typing..."
          placeholderTextColor={theme.textSecondary}
          multiline
          textAlignVertical="top"
          style={[styles.inputBody, { color: theme.text }]}
        />
      </View>
    </KeyboardAvoidingView>
  );

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {currentView === 'listing' ? <NotesListing /> : <NoteEditor />}
    </>
  );
}

// --- Styles ---
const lightTheme = {
  background: '#F2F2F7',
  card: '#FFFFFF',
  text: '#000000',
  textSecondary: '#8E8E93',
};

const darkTheme = {
  background: '#1C1C1E',
  card: '#2C2C2E',
  text: '#FFFFFF',
  textSecondary: '#AEAEB2',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  themeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    height: 45,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  noteCard: {
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  noteDate: {
    fontSize: 12,
  },
  notePreview: {
    fontSize: 14,
    lineHeight: 20,
  },
  // Editor Styles
  editorHeaderImage: {
    height: 180,
    width: '100%',
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: Platform.OS === 'android' ? 40 : 10,
  },
  iconButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  saveButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  editorContent: {
    flex: 1,
    paddingTop: 25,
  },
  inputTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  separator: {
    height: 1,
    width: '100%',
    marginBottom: 20,
  },
  inputBody: {
    flex: 1,
    fontSize: 18,
    lineHeight: 24,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#007AFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '300',
  },
});