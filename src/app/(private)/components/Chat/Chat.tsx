import { useEffect, useState, useRef } from 'react';
import { ChatService } from '@/src/shared/api';
import { useUserData } from "@/src/shared/hooks/useUserData";

const Chat = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const { userData } = useUserData();
  const isSubscribed = useRef(false);  // Чтобы контролировать подписку

  useEffect(() => {
    if (!userData || isSubscribed.current) return; // Подписываемся только один раз
    isSubscribed.current = true; // Устанавливаем флаг, что подписка активна

    const unsubscribe = ChatService.subscribeToMessages((message) => {
      setMessages((prev) => [...prev, message]); // Обновляем сообщения
    });

    return () => {
      unsubscribe(); // Отписываемся при размонтировании компонента
      isSubscribed.current = false; // Сбрасываем флаг подписки
    };
  }, [userData]); // Подписываемся на изменение userData

  const handleSendMessage = () => {
    if (!userData || !newMessage.trim()) return; // Проверка на наличие пользователя и пустое сообщение
    ChatService.sendMessage(userData.displayName, newMessage); // Отправляем сообщение
    setNewMessage(''); // Очищаем поле
  };
  console.log('messages',messages)
  return (
    <div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.userId}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Введите сообщение..."
      />
      <button onClick={handleSendMessage}>Отправить</button>
    </div>
  );
};

export default Chat;
