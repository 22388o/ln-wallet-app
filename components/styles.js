import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    backgroundColor: 'black',
    paddingBottom: 36,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingBottom: 36,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  textInput:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    width: 240,
    padding: 10,
    fontSize: 20,
  },
  textInputAmount:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    color: 'white',
    width: 240,
    padding: 10,
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
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
    margin: 8,
    fontSize: 24,
    textAlign: 'center',
  },
  headerContainer: {
    marginBottom:40
  },
  header: {
    color: 'white',
    margin: 12,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  balance: {
    color: 'orange',
    textAlign: 'center',
    fontSize: 36,
  },
  invoice: {
    color: 'orange',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 16,
  },
    logo: {
    alignSelf: 'center',
    height: 180,
    width: 140,
    marginTop:40,
    marginBottom:30
  }, 
    button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
    width: 100,
    margin: 10,
  },
  Invoicebuttons: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
    width: 160,
    margin: 10,
    
  },
  copyButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
    width: 160,
    margin: 10,
    
  },
  copyButtonText: {
    fontSize: 20,
    marginRight: 12,
  },
  sendButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
    width: 160,
    margin: 10,
    
  },
  sendButtonText: {
    fontSize: 20,
    marginRight: 12,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  }
});