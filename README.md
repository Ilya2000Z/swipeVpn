# swipeVpn

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>VPN State: {vpnState ? JSON.stringify(vpnState) : 'Not Connected'}</Text>
      <Button title={isConnected ? 'Disconnect' : 'Connect'} onPress={isConnected ? stopOvpn : startOvpn} />
    </View>

mapDot - точка на карте с городом и страной
