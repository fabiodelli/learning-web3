<script>
import Web3 from 'web3';

export default {
  name: 'home',
  data() {
    return {
      web3js: null
    };
  },
  mounted() {
    window.addEventListener('load', () => {
      if (typeof Web3 !== 'undefined') {
        this.web3js = new Web3(Web3.currentProvider);
      } else {
        // Gestire il caso in cui l'utente non ha installato Metamask
        // Probabilmente mostrare loro un messaggio che richiede di installare Metamask
      }

      this.startApp();
    });
  },
  methods: {
    startApp() {
      // Qui puoi iniziare a utilizzare web3js per interagire con Ethereum
      // Ad esempio, puoi ottenere l'indirizzo del portafoglio dell'utente
      this.web3js.eth.getAccounts((error, accounts) => {
        if (!error && accounts.length > 0) {
          const userAddress = accounts[0];
          console.log('Indirizzo del portafoglio utente:', userAddress);
        } else {
          console.error('Impossibile ottenere l\'indirizzo del portafoglio utente.');
        }
      });
    }
  }
};
</script>

<template></template>

<style lang="scss">
@use '../style/general.scss';
</style>
