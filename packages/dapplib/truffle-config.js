require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture stomach response mirror connect install define army genre'; 
let testAccounts = [
"0x6d9e6867184895b90a5c5c4036d83b9419c50268cdf6307e21755557a75ce50f",
"0x2222af516556826a5b45e93ff9c8483eecba13ab099b3ae3215a809d350aa4b9",
"0xb48b60039951dfe16f38e68911765708f61b09dc26fc979fc69d7b89d23ac842",
"0x46bea704353508484d6ca1c56243ac35043d60e711689135557ace1d1e65b754",
"0x7285b4682ef1c366003e0124a8c71543119f041d850ed107e5576bfc0faa4c14",
"0x83a662427987974a7a6cb06e851762a811dcb1f07114584dc61f0e2555412409",
"0xa8df3304459196f0b19253cb83af55f50c63cc35063b76f30835cfaf8e6b765b",
"0x5ceb14d1bfae787cf0387a703a1833903e3308806aaa48ffcf3a8508f5bcb481",
"0x9407064cc294f2b04839fb03a952444a6e4ca1fa07bde49436375384dd0026ed",
"0x915514ac11f4559ff83eb738bebfa7adc47338a0008e02e6ae0f80386f31148d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

