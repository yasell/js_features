<?php

$recepient = "strogofcdm@gmail.com";
$sitename = "dobrohlad.by";

$name = trim($_POST["#name"]);
$mail = trim($_POST["#email"]);
$text = trim($_POST["#text"]);
$message = "Имя: $name \nТелефон: $mail \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
