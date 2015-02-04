var store2 = Ext.create('Touch2Demo.store.IpSincronizar_s');
	 arquivo = store2.data.get(1);
	 if (arquivo == null){
	 link = 'app/php1/listaContatos.php';    
	 }else{
	    ip =arquivo.data.ip;	
	    link ='http://'+ip+'/php1/criarPneusColeta.php';
	}

Ext.define('Touch2Demo.store.dataSincronizacaoPHP', {
    extend: 'Ext.data.Store',
    config: {
	model: 'Touch2Demo.model.dataSincronizacaoM',
	proxy: {
	    type: 'ajax',
	    //url: 'php/json/listaContatos.php',
	    api: {
		//create: 'app/php/criarColeta.php', //CRUD
		create: link,
		read : 'app/php/listaContatos.php',
		//read: link,
		update: 'app/php/json/atualizaContato.php',
		destroy: 'php/json/deletaContato.php'
	    },
	    reader: {
		type: 'json', //json ou xml
		rootProperty: 'dataSincronizacaoPHP'
	    },
	    writer: {
		type: 'json', //json ou xml
		root: 'dataSincronizacaoPHP',
		writeAllFields: true,
		encode: true,
		allowSingle: true
	    }
	},
	autoLoad: true,
	autoSync: true	
    }
});
	