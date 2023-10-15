<?php
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$name = $data['name'];
$cart = $data['cart'];

$message = '';
$totalCost = 0;
$orderNumber = rand(1, 999); // Генерируем случайный номер заказа

$message .= "Имя заказчика: $name\n";
$message .= "Номер заказа: $orderNumber\n";

foreach ($cart as $item => $details) {
    $quantity = $details['quantity'];
    $price = $details['price'];
    $Name = $details['Name'];
    $itemCost = $quantity * $price;
    $message .= "Наименование: $Name, Количетво: $quantity, Стоимость за единицу: {$price}р, Итоговая стоимость: {$itemCost}р\n";
    $totalCost += $itemCost;
}

$message .= "Итоговая стоимость всех товаров: {$totalCost}p";

$mail_sent = mail("testpochtadlyavsego@gmail.com", "Заказ №$orderNumber от $name", $message);

if ($mail_sent) {
    echo "Письмо успешно отправлено!";
} else {
    echo "Ошибка при отправке письма.";
}
?>