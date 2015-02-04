var store2 = Ext.create('Touch2Demo.store.IpSincronizar_s');
	 arquivo = store2.data.get(1);
	 if (arquivo == null){
	 link = 'app/php1/criarPneusColeta.php';    
	 }else{
	    ip =arquivo.data.ip;	
	    link ='http://'+ip+'/php1/criarColeta.php';
	}

Ext.define('Touch2Demo.store.sincronizarPneusColetaS', {
    extend: 'Ext.data.Store',
    config: {
	model: 'Touch2Demo.model.sincronizarPneusColetaM',
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
		rootProperty: 'sincronizarPneusColetaS'
	    },
	    writer: {
		type: 'json', //json ou xml
		root: 'sincronizarPneusColetaS',
		writeAllFields: true,
		encode: true,
		allowSingle: true
	    }
	},
	autoLoad: true,
	autoSync: true	
    }
});
	