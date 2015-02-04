<?php

//chama o arquivo de conexão com o bd
include("conectar.php");

$info = $_POST['sincronizarPneusColetaS'];
$infoColeta = $_POST['sincronizarColeta'];

//

//$data = json_decode(str_replace('\"', '"', $info));
$data = json_decode(stripslashes($info));

$codColetaMobile = $data->codColetaMobile;
$codPneu = $data->codPneu;
$codServico = $data->codServico;

$query = sprintf("INSERT INTO coleta_pneu (cod_coleta_mob, cod_servico, cod_pneu) values ('%s', '%s', '%s')", mysql_real_escape_string($codColetaMobile), mysql_real_escape_string($codPneu), mysql_real_escape_string($codServico));
$rs = mysql_query($query);

echo json_encode(array(
    "success" => mysql_errno() == 0,
    "sincronizarPneusColetaS" => array(
	"codColetaMobile" => $codColetaMobile,
	"codPneu" => $codPneu,
	"codServico" => $codServico,
    )
));

$data10 = json_decode(stripslashes($codColetaMobile));
echo sincronizarPneusColetaS;

?>