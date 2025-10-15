import { StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useSession } from '@/hooks/use-session';
import { supabase } from '@/src/lib/supabase';

export default function HomeScreen() {
  const { session } = useSession();
  const userName = session?.user?.user_metadata?.full_name || session?.user?.email;

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome, {userName || 'Guest'}!</ThemedText>
      <ThemedText>This is your personalized dashboard.</ThemedText>

      <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
        <ThemedText style={styles.logoutButtonText}>Log Out</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
