import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 8,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  paragraph: {
    color: 'white',
    marginHorizontal: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheadline: {
        color: 'white',
    margin: 24,
    fontSize: 12,
    textAlign: 'center',
  },
  balance: {
    color: 'orange',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 40,
  },
  invoice: {
    color: 'orange',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 16,
  },
    logo: {
    marginBottom: 10,
    alignSelf: 'center',
    height: 180,
    width: 140,
  }
});