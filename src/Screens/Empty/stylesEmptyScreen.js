import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      paddingBottom: 140,
      padding: 50,
    },
    title: {
      fontSize: 32,
      fontWeight: '700',
      color: '#1d1d1d',
      marginBottom: 12,
    },
    empty: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyTitle: {
      fontSize: 21,
      fontWeight: '600',
      color: '#000',
      alignItems:'center',
      marginBottom: 8,
      marginTop: 5,
    },
    emptyDescription: {
      fontSize: 15,
      fontWeight: '500',
      color: '#878787',
      marginBottom: 24,
    },
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 1,
      backgroundColor: '#2b64e3',
      borderColor: '#2b64e3',
    },
    btnText: {
      fontSize: 17,
      lineHeight: 24,
      fontWeight: '600',
      color: '#fff',
    },
  });
  export default styles;