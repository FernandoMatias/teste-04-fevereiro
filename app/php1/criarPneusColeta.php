<?php

session_start();

//chama o arquivo de conexão com o bd
include("conectar.php");

$info = $_POST['sincronizarPneusColetaS'];

//$data = json_decode(str_replace('\"', '"', $info));
$data = json_decode(stripslashes($info));

$codColetaMobile = $_SESSION['realmobile']['coleta'][$data->codColetaMobile];
$codPneu = $data->codPneu;
$codServico = $data->codServico;
$n_fogo = $data->n_fogo;
$n_serie = $data->n_serie;

$query = sprintf("INSERT INTO coleta_pneu (cod_coleta_mob, cod_servico, cod_pneu, n_fogo, n_serie) values ('%s', '%s', '%s', '%s', '%s')", mysql_real_escape_string($codColetaMobile), mysql_real_escape_string($codPneu), mysql_real_escape_string($codServico), mysql_real_escape_string($n_fogo), mysql_real_escape_string($n_serie));
$rs = mysql_query($query);

echo json_encode(array(
    "success" => mysql_errno() == 0,
    "sincronizarPneusColetaS" => array(
	"codColetaMobile" => $codColetaMobile,
	"codPneu" => $codPneu,
	"codServico" => $codServico,
	"n_fogo" => $n_fogo,
	"n_serie" => $n_serie,
    )
));

?>