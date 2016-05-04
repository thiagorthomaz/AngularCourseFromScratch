<?php

require_once './Contact.class.php';
require_once './Operator.class.php';

$contact_list = array();

          
$oi = new Operator("Oi", "14", "Mobile", 2);
$tim = new Operator("Tim", "41", "Mobile", 1);
$vivo = new Operator("Vivo", "15", "Mobile", 3);
$gvt = new Operator("GVT", "25", "Landline", 2);
$embratel = new Operator("Embratel", "21", "Landline", 1);

$petter = new Contact("Petter", "9999-8888", $oi, "05/05/2016");
$ana = new Contact("Ana", "9999-7777", $vivo, "05/05/2016");
$maria = new Contact("Maria", "9999-5555", $tim, "05/05/2016");

$contact_list[] = $petter;
$contact_list[] = $ana;
$contact_list[] = $maria;

echo json_encode($contact_list, JSON_PRETTY_PRINT);