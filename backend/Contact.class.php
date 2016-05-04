<?php

require_once './Operator.class.php';

/**
 * Description of Contact
 *
 * @author thiago
 */
class Contact {
  
  public $name;
  public $phone;
  public $operator;
  public $date;
  
  function __construct($name, $phone, Operator $operator, $date) {
    $this->name = $name;
    $this->phone = $phone;
    $this->operator = $operator;
    $this->date = $date;
  }

  
  public function toArray(){
    return array ($this);
  }
  
}
