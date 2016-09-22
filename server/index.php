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

function isDelete(){
  return filter_input(INPUT_SERVER, "REQUEST_METHOD") == "DELETE";
}

if (isGet()){
  getRequest();
}

if (isPost()) {
  postRequest();
}

if (isDelete()) {
  deleteContact();
}

function loadData($filter = null){
  $data = array();
  if (!isset($_SESSION["data"])){
    $oi = new Operator("Oi", "14", "Mobile", 2);
    $tim = new Operator("Tim", "41", "Mobile", 1);
    $vivo = new Operator("Vivo", "15", "Mobile", 3);
    $gvt = new Operator("GVT", "25", "Landline", 2);
    $embratel = new Operator("Embratel", "21", "Landline", 1);

    $petter = new Contact("Petter", "9999-8888", $oi, time());
    $ana = new Contact("Ana", "9999-7777", $vivo, time());
    $maria = new Contact("Maria", "9999-5555", $tim, time());
    $sophia = new Contact("Sophia", "9999-9955", $tim, time());
    $emma = new Contact("Emma", "9999-9944", $tim, time());
    $isabella = new Contact("Isabella", "9999-9933", $tim, time());
    $olivia = new Contact("Olivia", "9999-9922", $tim, time());
    $ava = new Contact("Ava", "9999-9911", $tim, time());
    $emily = new Contact("Emily", "9999-9999", $tim, time());
    $abigail = new Contact("Abigail", "9999-8888", $tim, time());
    $mia = new Contact("Mia", "9999-7777", $tim, time());
    $madison = new Contact("Madison", "9999-6666", $tim, time());
    $elizabeth = new Contact("Elizabeth", "9999-4444", $tim, time());
    $giulia = new Contact("Giulia", "9999-3333", $tim, time());
    $martina = new Contact("Martina", "9999-2222", $tim, time());
    $giorgia = new Contact("Giorgia", "9999-1111", $tim, time());

    $data['contact_list'][] = $petter;
    $data['contact_list'][] = $ana;
    $data['contact_list'][] = $maria;
    $data['contact_list'][] = $emma;
    $data['contact_list'][] = $isabella;
    $data['contact_list'][] = $olivia;
    $data['contact_list'][] = $ava;
    $data['contact_list'][] = $ava;
    $data['contact_list'][] = $emily;
    $data['contact_list'][] = $abigail;
    $data['contact_list'][] = $mia;
    $data['contact_list'][] = $madison;
    $data['contact_list'][] = $elizabeth;
    $data['contact_list'][] = $giulia;
    $data['contact_list'][] = $martina;
    $data['contact_list'][] = $giorgia;
    
    
    $data['operator_list'][] = $oi;
    $data['operator_list'][] = $tim;
    $data['operator_list'][] = $vivo;
    $data['operator_list'][] = $gvt;
    $data['operator_list'][] = $embratel;
    $_SESSION["data"] = $data;
  } else {
    $data = $_SESSION["data"];
  }
  
  if (!is_null($filter)) {
    return $data[$filter];  
  } else {
    return $data;
  }
  
  
}

function writeContact(Contact $c){
  $_SESSION["data"]['contact_list'][] = $c;
}

function getRequest(){
  $filter = filter_input(INPUT_GET, "filter");
  $data = loadData($filter);
  echo json_encode($data, JSON_PRETTY_PRINT);
}

function deleteContact(){
  $id = filter_input(INPUT_GET, "id");
  if (!is_null($id)) {
    $data = loadData();
    foreach ($data['contact_list'] as $i => $contact) {
      if ($contact->id == $id){
        unset($_SESSION['data']['contact_list'][$i]);
      }
    } 
  }
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
