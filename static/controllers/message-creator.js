angular.module('techNodeApp').controller('MessageCreatorCtrl',function($scope,socket) {
	$scope.createMessage = function() {
		socket.emit('createMessage',{
			message:$scope.newMessage,
			creator:$scope.me
		})
		$scope.newMessage = '';
	}
})