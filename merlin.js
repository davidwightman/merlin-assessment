(function() {
	var xhrOpen = XMLHttpRequest.prototype.open;
	XMLHttpRequest.prototype.open = function() {
		console.log('AJAX request started');
		this.addEventListener('load', function() {
			callWhenReadyToGo();
			console.log('The AJAX response is: ' + this.responseText);
		});
		xhrOpen.apply(this, arguments);
	};
})();

function callWhenReadyToGo(callback) {
	console.log('AJAX call completed');
}
