require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/nIwP5SeY4FfhTWMnulOPb43Zr_uKuXX0',
      accounts: [ '26a206ed8fcd84fb1350fc6928c91d930d9818e69f2d2825801b1e16e47c4597']
    }
  }
}
