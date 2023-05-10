import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    backgroundColor: '#f8fafc',
    paddingBottom: 36,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    paddingBottom: 36,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  textInput:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    width: 240,
    padding: 10,
    fontSize: 20,
  },
  textInputAmount:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    color: 'black',
    width: 240,
    padding: 10,
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: "center",
    marginBottom:40
  },
  paragraph: {
    color: 'black',
    marginHorizontal: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheadline: {
    color: 'black',
    margin: 8,
    fontSize: 24,
    textAlign: 'center',
  },
  headerContainer: {
    height: 110
  },
  header: {
    color: 'black',
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
  satBalance: {
    color: 'orange',
    textAlign: 'center',
    fontSize: 36,
    marginRight: 6,
  },
  invoice: {
    color: 'orange',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 16,
  },
    logo: {
    borderRadius: 100,  
    alignSelf: 'center',
    height: 140,
    width: 140,
    marginTop:10,
    marginBottom:10
  }, 
    button: {
    alignItems: 'center',
    backgroundColor: '#e2e8f0',
    padding: 10,
    borderRadius: 10,
    width: 100,
    margin: 10,
  },
  Invoicebuttons: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e2e8f0',
    padding: 10,
    borderRadius: 10,
    width: 160,
    margin: 10,
    
  },
  copyButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#e2e8f0',
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
    backgroundColor: '#e2e8f0',
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
  },
  modalContainer: {
    flex: 1,
  },
});