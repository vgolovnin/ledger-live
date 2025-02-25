<img src="https://user-images.githubusercontent.com/211411/34776833-6f1ef4da-f618-11e7-8b13-f0697901d6a8.png" height="100" />

[Github](https://github.com/LedgerHQ/ledgerjs/),
[Ledger Devs Slack](https://ledger-dev.slack.com/)

## @ledgerhq/hw-transport-node-ble

**Ledger Hardware Wallet Bluetooth BLE transport for Node.js (noble)**

> yarn add @ledgerhq/hw-transport-node-ble

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [BluetoothTransport](#bluetoothtransport)
    -   [Parameters](#parameters)
    -   [Examples](#examples)
    -   [exchange](#exchange)
        -   [Parameters](#parameters-1)
    -   [isSupported](#issupported)
    -   [availability](#availability)
    -   [listen](#listen)
        -   [Parameters](#parameters-2)
    -   [open](#open)
        -   [Parameters](#parameters-3)
    -   [disconnect](#disconnect)
        -   [Parameters](#parameters-4)

### BluetoothTransport

**Extends Transport**

TransportNodeBle bluetooth BLE implementation

#### Parameters

-   `device` **Device** 
-   `writeCharacteristic` **any** 
-   `notifyObservable` **Observable&lt;[Buffer](https://nodejs.org/api/buffer.html)>** 
-   `deviceModel` **DeviceModel** 

#### Examples

```javascript
import BluetoothTransport from "@ledgerhq/hw-transport-node-ble";
```

#### exchange

communicate with a BLE transport

##### Parameters

-   `apdu` **[Buffer](https://nodejs.org/api/buffer.html)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Buffer](https://nodejs.org/api/buffer.html)>** 

#### isSupported

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>** 

#### availability

#### listen

Scan for bluetooth Ledger devices

##### Parameters

-   `observer` **any** 

#### open

Open a BLE transport

##### Parameters

-   `deviceOrId` **any** 

#### disconnect

Globally disconnect a BLE device by its ID

##### Parameters

-   `id` **any** 

---

## Are you adding Ledger support to your software wallet?

You may be using this package to open a Bluetooth connexion between your web application and the device.

For a smooth and quick integration:

- See the developers’ documentation on the [Developer Portal](https://developers.ledger.com/docs/transport/overview/) and
- Go on [Discord](https://developers.ledger.com/discord-pro/) to chat with developer support and the developer community.

---
