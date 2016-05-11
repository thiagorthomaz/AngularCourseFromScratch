<?php


/**
 * Description of Operator
 *
 * @author thiago
 */
class Operator {
  
  public $name;
  public $code;
  public $category;
  public $price;
  
  
  function __construct($name, $code, $category, $price) {
    $this->name = $name;
    $this->code = $code;
    $this->category = $category;
    $this->price = $price;
  }

  public function toJson(){
    return array ($this);
  }
  
}
