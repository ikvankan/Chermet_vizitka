<?php
session_start();
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$name = $data['name'];
$cart = $data['cart'];

$message = '';
$message2 = '';
$totalCost = 0;
if (!isset($_SESSION['orderNumber'])) {
    $_SESSION['orderNumber'] = 0; 
}

$orderNumber = ++$_SESSION['orderNumber']; 

$message .= "Имя заказчика: $name\n";
$message .= "Номер заказа: $orderNumber\n";
$message2 .= "Содержание заказа:\n";

foreach ($cart as $item => $details) {
    $quantity = $details['quantity'];
    $price = $details['price'];
    $Name = $details['Name'];
    $itemCost = $quantity * $price;
    $message2 .= "Наименование: $Name, Количетво: $quantity, Стоимость за единицу: {$price}р, Итоговая стоимость: {$itemCost}р\n";
    $message .= "Наименование: $Name, Количетво: $quantity, Стоимость за единицу: {$price}р, Итоговая стоимость: {$itemCost}р\n";
    $totalCost += $itemCost;
}

$message .= "Итоговая стоимость всех товаров: {$totalCost}p";
$message2 .= "Итоговая стоимость всех товаров: {$totalCost}p";

$mail_sent = mail("testpochtadlyavsego@gmail.com", "Заказ №$orderNumber от $name", $message);
$mail_sent2 = mail($email, "Ваш заказ №{$orderNumber} был принят!",$message2);
if ($mail_sent) {
    echo "Письмо успешно отправлено!";
} else {
    echo "Ошибка при отправке письма.";
}
?>