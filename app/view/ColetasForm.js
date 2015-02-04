Ext.define('Touch2Demo.view.ColetasForm', {
    extend: 'Ext.form.Panel',
    onItemDisclosure: true,
    alias: 'widget.coletasform',
    requires: [
	'Ext.form.FieldSet',
	'Ext.field.Select',
	'Ext.data.Store',
	'Ext.Panel',
	'Ext.picker.Picker',
	'Ext.data.StoreManager',
	'Ext.List',
	'Touch2Demo.store.Contato',
	'Ext.field.DatePicker',
	'Ext.TitleBar',
	'Touch2Demo.store.Pneu_s',
	'Ext.app.Controller',
	'Ext.Viewport.add',
	'Ext.dataview.List',
	'Touch2Demo.store.Contato'

    ],
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		//ui: 'light',
		title: 'Coleta de Pneus',
		itemId: 'toolbarFormColeta'
	    },
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		items: [
		    {
			xtype: 'button',
			action: 'menuIniciar',
			text: 'Menu Iniciar'
		    },
		    {
			xtype: 'button',
			action: 'listaColetas',
			text: 'Lista de Coletas'
		    }
		]
	    },
	    {
		xtype: 'selectfield',
		label: 'Pneu',
		name: 'idPneu',
		displayField: 'todos',
		valueField: 'id',
//		hidden: false,
		placeHolder: 'Selecione o Pneu',
		usePicker: true,
		autoSelect: 'true',
		store: 'Pneu_s'
	    },
	    {
		xtype: 'selectfield',
		label: 'Serviço',
		name: 'servico',
		//valueField: 'codServico',
		placeHolder: 'Selecione o Serviço',
		usePicker: true,
		disabled: true
	    },
	    {
		xtype: 'textfield',
		name: 'n_fogo',
		label: 'Nº do fogo'
	    },
	    {
		xtype: 'textfield',
		name: 'n_serie',
		label: 'Nº de serie'

	    },
	    {
		xtype: 'button',
		action: 'salvarPneusColeta',
		ui: 'confirm',
		text: 'Salvar Pneus'
	    },
	    {
		xtype: 'container',
		height: 25
	    },
	    {
		xtype: 'fieldset',
		items: [
		    {
			xtype: 'textfield',
			name: 'nomeCliente',
			label: 'Nome do Cliente'
		    },
		    {
			xtype: 'textfield',
			name: 'codCliente',
			label: 'id2',
			hidden: true
		    },
		    {
			xtype: 'button',
			action: 'contatosList',
			iconCls: 'search',
			iconMask: true
		    }
		]
	    },
	    {
		xtype: 'fieldset',
		items: [
//		    {
//			xtype: 'textfield',
//			name: 'id',
//			label: 'id'
//		    },
		    {
			xtype: 'datepickerfield',
			label: 'Data da Entrega',
			name: 'data_entrega',
			dateFormat: 'd/m/Y',
			submitFormat: 'd/m/Y',
			//useMask: true,
			value: new Date(),
			picker: {
			    slotOrder: ['day', 'month', 'year']
			}
		    },
		    {
			xtype: 'textfield',
			name: 'observacao',
			label: 'Observação'
		    }
		]
	    },
//	    {
//		xtype: 'fieldset',
//		items: [
	    {
		xtype: 'container',
		height: 10
	    },
	    {
		xtype: 'button',
		action: 'salvarColeta',
		ui: 'action',
		text: 'Salvar'
	    },
//	    {
//		xtype: 'button',
//		action: 'salvarColetaEdicao',
//		ui: 'action',
//		text: 'Salvar',
//		hidden: true
//	    },
	    {
		xtype: 'container',
		height: 10
	    },
	    {
		xtype: 'button',
		action: 'deletarColeta',
		ui: 'decline',
		text: 'Deletar',
		hidden: true
	    },
	    {
		xtype: 'textfield',
		name: 'vendedor',
		hidden: true,
		value: '01'
	    },
	    {
		xtype: 'datepickerfield',
		label: 'Data da coleta',
		name: 'data_coleta',
		dateFormat: 'd/m/Y',
		hidden: true,
		submitFormat: 'd/m/Y',
		//useMask: true,
		value: new Date()
	    }

	]
    }
});
