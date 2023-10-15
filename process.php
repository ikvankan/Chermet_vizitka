<?php
// Получение данных из POST-запроса
$data = json_decode(file_get_contents('php://input'), true);

// Использование данных в функции mail()
$message = '';
$totalCost = 0;
foreach ($data as $item => $details) {
    $quantity = $details['quantity'];
    $price = $details['price'];
    $Name = $details['Name'];
    $itemCost = $quantity * $price;
    $message .= "Наименование: $Name, Количетво: $quantity, Стоимость за единицу: $price, Итоговая стоимость: $itemCost\n";
    $totalCost += $itemCost;
}
$message .= "Итоговая стоимость всех товаров: $totalCost";

$mail_sent = mail('ikvankan@gmail.com', 'Заказ', $message);

if ($mail_sent) {
    echo "Письмо успешно отправлено!";
} else {
    echo "Ошибка при отправке письма.";
}
?>