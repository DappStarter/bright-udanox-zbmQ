require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift rival muscle column hunt screen army genius'; 
let testAccounts = [
"0x08677c96827e900a863b2fdcafb0439107499ec478b6a323e16786e5fe6b3670",
"0xfd62b7cc3d6210ec694eaad4a3f6ef448746215f34ef91bb3b30b09f21a1414c",
"0x1474d3a90433f87a2fdc1c3af5d5987c0da819e05412f5cad584e17306618ab9",
"0xb12ed196b67cd89f128b5bcc3a6581c0c7a300c017fb41bc3403bd09331fab9f",
"0x3f11b570f27e40771175f52b81a06a3767bdc021c79a5f9a8224aa64f5d9f232",
"0xdec397d3d888e0bdf336ac45e1b8c9fcb02902fb7111a41dc79c5da2d4f47b34",
"0x9918e7e0ee174aaa272339035b506fb580bab1510f811808d9271fb3eac98dc8",
"0xbd22b45675925eca109b54c093bd90c7f50a86df379e4a68ad6715c5dfb53091",
"0xb73c36baa345f49289c76c47cfbd1fda65afa2eb7892a0a155e61bc39aef0f1f",
"0x1cc01ca4a1a78a651bccf45f5d4f8f7dd488f121f6d3073eafb728ee88ac1490"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


