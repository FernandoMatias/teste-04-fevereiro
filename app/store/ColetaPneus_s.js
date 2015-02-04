Ext.define('Touch2Demo.store.ColetaPneus_s', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.LocalStorage',
	'Ext.data.Store'
    ],
    config: {
	//model: 'Touch2Demo.model.Pneu_m',
	proxy: {
	    type: 'localstorage',
	    id: 'banco_ColetasPneu'
	},
	autoLoad: true,
	autoSync: true,
	fields: [
	    {name: 'cod_pneu'},
	    {name: 'codColeta'},
	    {name: 'servico'},
	    {name: 'n_fogo'},
	    {name: 'n_serie'}
	]
    }
});
