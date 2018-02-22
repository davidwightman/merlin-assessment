var newCallCount = 0;
var hasBeenCalled = false;

function newCall() {
	if (hasBeenCalled) {
		return;
	} else {
		hasBeenCalled = true;

		console.log('the function newCall has been activated');
		var xhrOpen = XMLHttpRequest.prototype.open;
		XMLHttpRequest.prototype.open = function() {
			console.log('AJAX request started');
			this.addEventListener('load', function() {
				console.log('The AJAX response is: ' + this.responseText);
				console.log('AJAX call completed');
				newCallCount++;
			});

			xhrOpen.apply(this, arguments);
		};
	}
}

function callWhenReadyToGo(callback) {
	console.log('The function callWhenReadyToGo has been activated');
	console.log(newCallCount);
	if (newCallCount === 0) {
		newCall();
		return;
	} else {
		console.log('NOOOOO!');
		return;
	}
}

callWhenReadyToGo(newCall);

function theCallback() {
	console.log('LOADED PAGE.');
}
