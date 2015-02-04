<?php

session_start();

//chama o arquivo de conexão com o bd
include("conectar.php");

$info = $_POST['sincronizarColeta'];

$data = json_decode(stripslashes($info));
//$data = json_decode(str_replace('\"', '"', $info));

$codCliente = $data->codCliente;
//$codPneu = $data->codPneu;
$data_entrega = $data->data_entrega;
$observacao = $data->observacao;
//$n_fogo = $data->n_fogo;
//$n_serie = $data->n_serie;
//$servico = $data->codServico;
$codFunc = $data->codFunc;
$id = $data->idteste;
$vendedor = $data->vendedor;
$data_coleta = $data->data_coleta;

$query = sprintf("INSERT INTO bd_coleta_mob (cliente, data_entrega, observacao, coletor, vendedor, data_coleta) values ('%s', '%s', '%s', '%s', '%s', '%s')", mysql_real_escape_string($codCliente), mysql_real_escape_string($data_entrega), mysql_real_escape_string($observacao), mysql_real_escape_string($codFunc), mysql_real_escape_string($vendedor), mysql_real_escape_string($data_coleta));
$rs = mysql_query($query);
$idInsert = mysql_insert_id();

$_SESSION['realmobile']['coleta'][$id] = $idInsert;

echo json_encode(array(
    "success" => mysql_errno() == 0,
    "sincronizarColeta" => array(
	"codCliente" => $codCliente,
	//"codPneu" => $codPneu,
	"data_entrega" => $data_entrega,
	"observacao" => $observacao,
	//"n_fogo" => $n_fogo,
	//"n_serie" => $n_serie,
	//"servico" => $servico,
	"codFunc" => $codFunc,
	"vendedor"=> $vendedor,
	"data_coleta"=>$data_coleta,
    )
));
?>