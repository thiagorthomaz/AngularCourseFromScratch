<?php

require_once './Contact.class.php';
require_once './Operator.class.php';

session_start();

function isPost(){
  return filter_input(INPUT_SERVER, "REQUEST_METHOD") == "POST";
}

function isGet(){
  return filter_input(INPUT_SERVER, "REQUEST_METHOD") == "GET";
}

if (isGet()){
  getRequest();
}

if (isPost()) {
  postRequest();
}

function loadData(){
  
  $data = filter_input(INPUT_SESSION, "data");
  if (is_null($data)){
    $data = array();
    $oi = new Operator("Oi", "14", "Mobile", 2);
    $tim = new Operator("Tim", "41", "Mobile", 1);
    $vivo = new Operator("Vivo", "15", "Mobile", 3);
    $gvt = new Operator("GVT", "25", "Landline", 2);
    $embratel = new Operator("Embratel", "21", "Landline", 1);

    $petter = new Contact("Petter", "9999-8888", $oi, time());
    $ana = new Contact("Ana", "9999-7777", $vivo, time());
    $maria = new Contact("Maria", "9999-5555", $tim, time());

    $data['contact_list'][] = $petter;
    $data['contact_list'][] = $ana;
    $data['contact_list'][] = $maria;
    $data['operator_list'][] = $oi;
    $data['operator_list'][] = $tim;
    $data['operator_list'][] = $vivo;
    $data['operator_list'][] = $gvt;
    $data['operator_list'][] = $embratel;
    $_SESSION["data"] = $data;
  }
  
  return $data;
  
}

function writeContact(Contact $c){
  $_SESSION["data"]['contact_list'][] = $c;
}

function getRequest(){
  $data = loadData();
  echo json_encode($data, JSON_PRETTY_PRINT);
}

function postRequest(){
  $data = json_decode(file_get_contents('php://input'), true);
  $name = $data['name'];
  $phone = $data['phone'];
  $operator = new Operator($data["operator"]["name"], $data["operator"]["code"], $data["operator"]["category"], $data["operator"]["price"]);
  $date = time();
  $contact = new Contact($name, $phone, $operator, $date);
  writeContact($contact);
  echo json_encode($contact, JSON_PRETTY_PRINT);
  
}