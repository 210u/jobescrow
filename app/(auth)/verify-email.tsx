import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { StyleSheet } from 'react-native';

export default function VerifyEmail() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Verify your email</ThemedText>
      <ThemedText>
        We sent you a verification link. Open it to complete signup. After verifying, return to the app and log in.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 12,
  },
});


