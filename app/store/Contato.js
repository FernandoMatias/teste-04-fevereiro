Ext.define('Touch2Demo.store.Contato', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.LocalStorage',
	'Ext.data.Store'
    ],
    config: {
	//model: 'Touch2Demo.model.Contato',
//	sorters: 'nomeCliente',
//	grouper: function (record) {
//	    return record.get('nomeCliente')[0];
//	},
	proxy: {
	    type: 'localstorage',
	    id: 'banco_contatos'
	},
	storeId: 'Contatos',
	autoLoad: true,
	autoSync: true,
	fields: [
	    {name: 'codCliente'},
	    {name: 'nomeCliente'}
//	    {name: 'cpfoucnpj'},
//	    {name: 'registro'},
//	    {name: 'telefone_com'},
//	    {name: 'telefone_res'},
//	    {name: 'celular'},
//	    {name: 'endereco'},
//	    {name: 'bairro'},
//	    {name: 'cep'},
//	    {name: 'email'},
//	    {name: 'cidade'}
	]
    }
});
