Ext.define('Touch2Demo.store.dataSincronizacaoS', { 
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.LocalStorage',
	'Ext.data.Store'
    ],
    config: {
	//model: 'Touch2Demo.model.Pneu_m',
	proxy: {
	    type: 'localstorage',
	    id: 'banco_dataSincronizacao'
	},
	autoLoad: true,
	autoSync: true,
	    fields: [
	    {name: 'dataSincronizacao'}
	]
    }
});
