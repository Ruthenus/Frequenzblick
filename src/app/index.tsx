import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.bezel}>
        <View style={styles.screen}>
          <Text style={styles.label}>FREQUENZBLICK</Text>

          <View style={styles.digits}>
            <Text style={styles.frequency}>50.012</Text>
          </View>

          <Text style={styles.unit}>Hz</Text>
          <Text style={styles.sub}>UCTE  1s</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050805",
    alignItems: "center",
    justifyContent: "center",
  },
  bezel: {
    backgroundColor: "#1a1a1a",
    padding: 10,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: "#333",
  },
  screen: {
    backgroundColor: "#0a1f0a",
    paddingVertical: 20,
    paddingHorizontal: 28,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0d2a0d",
    shadowColor: "#003300",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  label: {
    fontFamily: "Courier",
    fontSize: 11,
    color: "#006622",
    letterSpacing: 4,
    marginBottom: 18,
  },
  digits: {
    backgroundColor: "#061406",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#0a2a0a",
  },
  frequency: {
    fontFamily: "Courier",
    fontSize: 72,
    fontWeight: "900",
    color: "#00ff41",
    letterSpacing: 6,
    textShadowColor: "#00ff41",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  unit: {
    fontFamily: "Courier",
    fontSize: 18,
    color: "#00cc33",
    marginTop: 4,
    letterSpacing: 2,
  },
  sub: {
    fontFamily: "Courier",
    fontSize: 10,
    color: "#007722",
    marginTop: 14,
    letterSpacing: 2,
  },
});