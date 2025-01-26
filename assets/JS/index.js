// Задание1.
// Находим необходимые элементы DOM и записываем в переменные
// Создаем функцию createTask(). Внутри функции:
// Создаем новый элемент списка с помощью метода (createElement)
// Присваиваем текст из поля ввода в качестве содержимого новой задачи (textContent)
// Добавляем новую задачу в список с помощью метода (append)
// Очищаем поле ввода
// Добавляем функцию-обработчик к событию клика на кнопку (addEventListener)

        // Получаем элементы из HTML
		const inputElement = document.getElementById('new-task');
		const addButton = document.getElementById('task-btn');
		const taskList = document.getElementById('task-list');
		
		// Функция для создания новой задачи
		function createTask() {
			// Создаем новый элемент списка
			const newTaskItem = document.createElement('li');
			
			// Присваиваем текст из поля ввода в качестве содержимого новой задачи
			newTaskItem.textContent = inputElement.value;
		
			// Добавляем новую задачу в список
			taskList.append(newTaskItem);
		
			// Очищаем поле ввода
			inputElement.value = '';
		}
		// Добавляем обработчик события на кнопку "Добавить"
		addButton.addEventListener('click', createTask);
		
		// Задание2.
		// Создаем функцию checkTask(). Внутри функции:
		// Проверяем, что кликнули на элемент списка (event.target)
		// Если условие выполняется, то переключаем состояние выполнения задачи, добавляя или удаляя класс у элемента списка (element.classList.toggle)
		// Добавляем функцию-обработчик к событию клика на список задач (addEventListener)
		
		// Через анонимную функцию
		// const list = document.getElementById('task-list');
		
		// list.addEventListener('click', function (event) {
		// 	if (event.target.tagName === 'LI') {
		// 		event.target.classList.toggle('completed');
		// 	}
		// });
		
		// Создаем функцию checkTask().
		function checkTask(event){
			// Проверяем, что кликнули на элемент списка <li>
			if (event.target.tagName === 'LI') {
				// Переключаем состояние выполнения задачи
				event.target.classList.toggle('completed');
			}
		}
		
		// Добавляем функцию-обработчик к событию клика на список задач (addEventListener)
		const list = document.getElementById('task-list');
		list.addEventListener('click', checkTask);
		
		