var ishop = React.createClass({
	displayName: 'ishop',
	getDefaultProps: function() {
		return { nameIshop: 'Какой-то магазин' }
	},
	render: function() {
		var phonesCode=[];
		this.props.phones.forEach(element => {
			var phone=Object.values(element);
			var phoneCode=        
			React.DOM.div({key:phone[0], className:'phones'},
			React.DOM.div({className:'namePhone'}, phone[1]), 
			React.DOM.img({className:'imgPhone', src: phone[2], alt: phone[1], width: '90vh', height:'auto' },),
			React.DOM.div({className:'pricePhone'}, phone[3]),
			React.DOM.div({className:'stockBalances'}, 'Stock Balances: ' + phone[4]),
		);
      phonesCode.push(phoneCode);
		});
		return React.DOM.div( {className:'ishop'}, 
      React.DOM.div( {className:'nameIshop'}, nameIshop ),
      React.DOM.div( {className:'phonesCode'}, phonesCode ),
		);
	},
});
