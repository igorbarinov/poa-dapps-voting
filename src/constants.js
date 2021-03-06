let constants = {};
constants.CARD_FINALIZE_DESCRIPTION = "Finalization is available after ballot time is finished";
constants.organization = 'poanetwork';
constants.repoName = 'poa-chain-spec';
constants.addressesSourceFile = 'contracts.json';
constants.ABIsSources = {
	'KeysManager': 'KeysManager.abi.json',
	'PoaNetworkConsensus': 'PoaNetworkConsensus.abi.json',
	'BallotStorage': 'BallotsStorage.abi.json',
	'ValidatorMetadata': 'ValidatorMetadata.abi.json',
	'VotingToChangeKeys': 'VotingToChangeKeys.abi.json',
	'VotingToChangeMinThreshold': 'VotingToChangeMinThreshold.abi.json',
	'VotingToChangeProxyAddress': 'VotingToChangeProxyAddress.abi.json'
};
module.exports = {
  constants
}