import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      paddingVertical: 24,
    },
    section: {
      paddingHorizontal: 24,
    },
    sectionHeader: {
      paddingVertical: 12,
      fontSize: 12,
      fontWeight: '600',
      color: '#9e9e9e',
      textTransform: 'uppercase',
      letterSpacing: 1.1,
    },
    profile: {
      padding: 24,
      backgroundColor: '#fff',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileAvatar: {
      width: 72,
      height: 72,
      borderRadius: 9999,
    },
    profileAvatarWrapper: {
      position: 'relative',
    },
    profileAction: {
      position: 'absolute',
      right: -4,
      bottom: -10,
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      borderRadius: 9999,
      backgroundColor: '#007bff',
    },
    profileName: {
      marginTop: 20,
      fontSize: 19,
      fontWeight: '600',
      color: '#414d63',
      textAlign: 'center',
    },
    profileAddress: {
      marginTop: 5,
      fontSize: 16,
      color: '#989898',
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 50,
      backgroundColor: '#f2f2f2',
      borderRadius: 8,
      marginBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
    },
    rowIcon: {
      width: 32,
      height: 32,
      borderRadius: 9999,
      marginRight: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowLabel: {
      fontSize: 17,
      fontWeight: '400',
      color: '#0c0c0c',
    },
    rowSpacer: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
  });
  export default styles;