<?php
session_start();
//chama o arquivo de conexão com o bd
include("conectar_real.php");

$info = $_POST['dataSincronizacaoPHP'];

//$data = json_decode(str_replace('\"', '"', $info));
$data = json_decode(stripslashes($info));
$_SESSION['QULAUQER'][] = 
//$dataSincronizacao = $data->dataSincronizacao;
$datax = substr($data->dataSincronizacao, 0, 10);

$qr = "SELECT a.codigo, 
    IF (a.tipo = 'pf', TRIM(a.nome), TRIM(a.razao)) nome
    FROM cad_pessoa a
    INNER JOIN cidade b ON (a.cidade = b.codigo)

    WHERE a.ativo = 'Sim' AND a.area LIKE '%CLI%' 
    ORDER BY nome ASC 
  LIMIT 300  ";

//var_dump($qr);
//exit;
//consulta sql
$query = mysql_query($qr) or die(mysql_error());

//faz um looping e cria um array com os campos da consulta
$rows = array('contatos' => array());
while ($contato = mysql_fetch_assoc($query)) {
    $rows['contatos'][] = $contato;
}

//encoda para formato JSON
echo json_encode($rows);
?>