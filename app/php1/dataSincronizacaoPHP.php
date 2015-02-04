<?php

//chama o arquivo de conexão com o bd
//include("conectar.php");

$info = $_POST['dataSincronizacaoPHP'];

//$data = json_decode(str_replace('\"', '"', $info));
$data = json_decode(stripslashes($info));

$dataSincronizacao = $data->dataSincronizacao;


//$query = sprintf("INSERT INTO bd_coleta_mob (codCliente, codPneu, data_entrega, observacao, n_fogo, n_serie, servico, codFunc) values ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')", mysql_real_escape_string($codCliente), mysql_real_escape_string($codPneu), mysql_real_escape_string($data_entrega), mysql_real_escape_string($observacao), mysql_real_escape_string($n_fogo), mysql_real_escape_string($n_serie), mysql_real_escape_string($servico), mysql_real_escape_string($codFunc));
//$rs = mysql_query($query);

echo json_encode(array(
    "success" => mysql_errno() == 0,
    "dataSincronizacaoPHP" => array(
	"dataSincronizacao" => $dataSincronizacao,
//	"codPneu" => $codPneu,
//	"data_entrega" => $data_entrega,
//	"observacao" => $observacao,
//	"n_fogo" => $n_fogo,
//	"n_serie" => $n_serie,
//	"servico" => $servico,
//	"codFunc" => $codFunc
  )
));
//var_dump($dataSincronizacao);
?>