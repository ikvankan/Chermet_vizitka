<?php
// Получение данных из POST-запроса
$data = json_decode(file_get_contents('php://input'), true);

// Использование данных в функции mail()
$message = '';
foreach ($data as $item => $quantity) {
    $message .= "$item: $quantity\n";
}

$mail_sent = mail('ikvankan@gmail.com', 'Заказ', $message);

if ($mail_sent) {
    echo "Письмо успешно отправлено!";
} else {
    echo "Ошибка при отправке письма.";
}
?>