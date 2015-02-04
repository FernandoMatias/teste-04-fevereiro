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
    IF (a.tipo = 'pf', a.nome, a.razao) nome, IF (a.tipo = 'pf', a.apelido, a.fantasia) apelido, 
    IF (a.tipo = 'pf', a.cpf, a.cnpj) cpfoucnpj, IF (a.tipo = 'pf', a.rg, a.insc_estadual) registro, 
    a.telefone_com, a.telefone_res, a.celular, a.email,
    CONCAT(IFNULL(b.cidade, ''), ', ', IFNULL(a.endereco, ''), ' ', IFNULL(a.bairro, ''), ' ', IFNULL(a.cep, '')) localidade

    FROM cad_pessoa a
    INNER JOIN cidade b ON (a.cidade = b.codigo)

    WHERE a.ativo = 'Sim' AND a.area LIKE '%CLI%' 
   /* AND (DATE(a.data_atualizacao) >= DATE('" . $datax . "'))*/
    LIMIT 10";

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